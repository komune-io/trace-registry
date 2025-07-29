package io.komune.registry.control.core.cccev.certification

import f2.spring.exception.NotFoundException
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationAddEvidenceCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationAddRequirementsCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationAddedEvidenceEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationAddedRequirementsEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationCreateCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationCreatedEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationFillValuesCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationFilledValuesEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationRemoveRequirementsCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationRemovedRequirementsEvent
import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.control.core.cccev.certification.entity.isFulfilled
import io.komune.registry.control.core.cccev.certification.model.CertificationFsPath
import io.komune.registry.control.core.cccev.certification.service.CertificationEvidenceService
import io.komune.registry.control.core.cccev.certification.service.CertificationValuesFillerService
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.infra.neo4j.checkNotExists
import io.komune.registry.infra.neo4j.session
import io.komune.registry.s2.commons.model.RequirementIdentifier
import org.neo4j.ogm.session.SessionFactory
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import java.util.UUID

@Service("CertificationAggregateService2")
class CertificationAggregateService(
    private val applicationEventPublisher: ApplicationEventPublisher,
    private val certificationEvidenceService: CertificationEvidenceService,
    private val certificationRepository: CertificationRepository,
    private val certificationValuesFillerService: CertificationValuesFillerService,
    private val fileClient: FileClient,
    private val requirementRepository: RequirementRepository,
    private val sessionFactory: SessionFactory
) {
    suspend fun create(command: CertificationCreateCommand): CertificationCreatedEvent = sessionFactory.session { session ->
        command.id?.let { id ->
            session.checkNotExists<Certification>(id, "Certification")
        }

        val requirements = command.requirementIdentifiers.map { requirementIdentifier ->
            requirementRepository.loadRequirementOnlyGraph(requirementIdentifier)
                ?: throw NotFoundException("Requirement", requirementIdentifier)
        }

        val certification = Certification().apply {
            id = command.id ?: UUID.randomUUID().toString()
            requirementCertifications = requirements.map { it.toEmptyCertification() }.toMutableList()
        }

        certificationRepository.save(certification)

        CertificationCreatedEvent(certification.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun fillValues(command: CertificationFillValuesCommand): CertificationFilledValuesEvent {
        val context = CertificationValuesFillerService.Context(
            certificationId = command.id,
            rootRequirementCertificationId = command.rootRequirementCertificationId
        )
        certificationValuesFillerService.fillValues(command.values, context)

        return CertificationFilledValuesEvent(
            id = command.id,
            rootRequirementCertificationId = command.rootRequirementCertificationId
        ).also(applicationEventPublisher::publishEvent)
    }

    suspend fun addEvidence(command: CertificationAddEvidenceCommand, file: ByteArray, filename: String?): CertificationAddedEvidenceEvent {
        val path = command.filePath
            ?: CertificationFsPath.pathEvidenceType(command.id, command.evidenceTypeId)
                .copy(name = filename ?: System.currentTimeMillis().toString())

        val evidenceId = certificationEvidenceService.addEvidence(
            command = command,
            filePath = path
        )

        fileClient.fileUpload(
            command = path.toUploadCommand(vectorize = command.vectorize),
            file = file
        )

        return CertificationAddedEvidenceEvent(
            id = command.id,
            rootRequirementCertificationId = command.rootRequirementCertificationId,
            evidenceId = evidenceId,
            filePath = path
        ).also(applicationEventPublisher::publishEvent)
    }

    suspend fun addRequirements(
        command: CertificationAddRequirementsCommand
    ): CertificationAddedRequirementsEvent = sessionFactory.session { session ->
        val requirements = command.requirementIdentifiers.map { requirementIdentifier ->
            requirementRepository.loadRequirementOnlyGraph(requirementIdentifier)
                ?: throw NotFoundException("Requirement", requirementIdentifier)
        }

        val requirementCertifications = requirements.map { it.toEmptyCertification() }

        if (command.parentId == null) {
            val certification = session.load(Certification::class.java, command.id as String, 0)
                ?: throw NotFoundException("Certification", command.id)
            certification.requirementCertifications.addAll(requirementCertifications)
            certificationRepository.save(certification)
        } else {
            if (!certificationRepository.hasRequirementCertification(command.id, command.parentId!!)) {
                throw NotFoundException("RequirementCertification [${command.parentId}] in Certification", command.id)
            }

            val parentRequirementCertification = session.load(RequirementCertification::class.java, command.parentId as String, 0)
                ?: throw NotFoundException("RequirementCertification", command.parentId!!)
            parentRequirementCertification.subCertifications.addAll(requirementCertifications)
            certificationRepository.save(parentRequirementCertification)
        }

        CertificationAddedRequirementsEvent(
            id = command.id,
            parentId = command.parentId,
            requirementCertificationIds = requirementCertifications.map { it.id }
        ).also(applicationEventPublisher::publishEvent)
    }

    suspend fun removeRequirements(command: CertificationRemoveRequirementsCommand): CertificationRemovedRequirementsEvent {
        TODO()
    }

    private suspend fun Requirement.toEmptyCertification(
        existingCertifications: MutableMap<RequirementIdentifier, RequirementCertification> = mutableMapOf()
    ): RequirementCertification {
        return existingCertifications[identifier]
            ?: RequirementCertification().also { certification ->
                existingCertifications[identifier] = certification

                certification.id = UUID.randomUUID().toString()
                certification.requirement = this
                subRequirements.forEach { requirement ->
                    certification.subCertifications.add(requirement.toEmptyCertification(existingCertifications))
                }
                certification.isEnabled = enablingCondition == null
                certification.isValidated = validatingCondition == null
                certification.hasAllValues = !requirementRepository.hasAnyConcept(identifier)
                certification.areEvidencesProvided = evidenceValidatingCondition == null
                certification.isFulfilled = certification.isFulfilled()
            }
    }
}
