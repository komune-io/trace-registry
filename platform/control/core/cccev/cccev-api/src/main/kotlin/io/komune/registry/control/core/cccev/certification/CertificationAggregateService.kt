package io.komune.registry.control.core.cccev.certification

import f2.spring.exception.NotFoundException
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.control.core.cccev.certification.command.CertificationAddEvidenceCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationAddedEvidenceEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationCreateCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationCreatedEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationFillValuesCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationFilledValuesEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationRejectCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationRejectedEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationSubmitCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationSubmittedEvent
import io.komune.registry.control.core.cccev.certification.command.CertificationValidateCommand
import io.komune.registry.control.core.cccev.certification.command.CertificationValidatedEvent
import io.komune.registry.control.core.cccev.certification.entity.BadgeCertification
import io.komune.registry.control.core.cccev.certification.entity.Certification
import io.komune.registry.control.core.cccev.certification.entity.CertificationRepository
import io.komune.registry.control.core.cccev.certification.entity.RequirementCertification
import io.komune.registry.control.core.cccev.certification.entity.isFulfilled
import io.komune.registry.control.core.cccev.certification.service.CertificationEvidenceService
import io.komune.registry.control.core.cccev.certification.service.CertificationValuesFillerService
import io.komune.registry.control.core.cccev.requirement.entity.Badge
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.infra.fs.FsPath
import io.komune.registry.infra.neo4j.findSafeShallowById
import io.komune.registry.infra.neo4j.session
import io.komune.registry.infra.neo4j.transaction
import io.komune.registry.s2.commons.model.CertificationId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import org.neo4j.ogm.session.Session
import org.neo4j.ogm.session.SessionFactory
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import s2.dsl.automate.S2Command
import java.util.UUID

@Service
class CertificationAggregateService(
    private val applicationEventPublisher: ApplicationEventPublisher,
    private val certificationEvidenceService: CertificationEvidenceService,
    private val certificationRepository: CertificationRepository,
    private val certificationValuesFillerService: CertificationValuesFillerService,
    private val fileClient: FileClient,
    private val requirementRepository: RequirementRepository,
    private val sessionFactory: SessionFactory
) {
    suspend fun create(command: CertificationCreateCommand): CertificationCreatedEvent = sessionFactory.transaction { session, _ ->
        val requirements = command.requirementIds.map { requirementId ->
            requirementRepository.loadRequirementOnlyGraph(requirementId, withBadges = true)
                ?: throw NotFoundException("Requirement", requirementId)
        }

        val authedUser = AuthenticationProvider.getAuthedUser()

        val certification = Certification().apply {
            id = UUID.randomUUID().toString()
            requirementCertifications = requirements.map { it.toEmptyCertification() }.toMutableList()
            creatorUserId = authedUser?.id
            creatorOrganizationId = authedUser?.memberOf
        }

        certificationRepository.save(certification)

        CertificationCreatedEvent(certification.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun fillValues(
        command: CertificationFillValuesCommand
    ): CertificationFilledValuesEvent = doOnEntity(command, 0) { session ->
        val context = CertificationValuesFillerService.Context(
            certificationId = command.id,
            rootRequirementCertificationId = command.rootRequirementCertificationId
        )
        certificationValuesFillerService.fillValues(command.values, context)

        CertificationFilledValuesEvent(
            id = command.id,
            rootRequirementCertificationId = command.rootRequirementCertificationId
        )
    }

    suspend fun addEvidence(
        command: CertificationAddEvidenceCommand, file: ByteArray, filename: String?
    ): CertificationAddedEvidenceEvent = doOnEntity(command, 0) { session ->
        val path = command.filePath
            ?: FsPath.Control.Certification.evidenceType(command.id, command.evidenceTypeIdentifier)
                .copy(name = filename ?: System.currentTimeMillis().toString())

        val evidenceId = certificationEvidenceService.addEvidence(
            command = command,
            filePath = path
        )

        fileClient.fileUpload(
            command = path.toUploadCommand(vectorize = command.vectorize),
            file = file
        )

        CertificationAddedEvidenceEvent(
            id = command.id,
            rootRequirementCertificationId = command.rootRequirementCertificationId,
            evidenceId = evidenceId,
            filePath = path
        )
    }

    suspend fun submit(command: CertificationSubmitCommand): CertificationSubmittedEvent = doOnEntity(command, 0) { session ->
        status = CertificationState.SUBMITTED
        CertificationSubmittedEvent(command.id)
    }

    suspend fun reject(command: CertificationRejectCommand): CertificationRejectedEvent = doOnEntity(command, 0) { session ->
        status = CertificationState.REJECTED
        auditDate = System.currentTimeMillis()
        comment = command.reason

        val authedUser = AuthenticationProvider.getAuthedUser()
        auditorUserId = authedUser?.id
        auditorOrganizationId = authedUser?.memberOf

        CertificationRejectedEvent(command.id, command.reason)
    }

    suspend fun validate(command: CertificationValidateCommand): CertificationValidatedEvent = doOnEntity(command, 0) { session ->
        status = CertificationState.VALIDATED
        auditDate = System.currentTimeMillis()

        val authedUser = AuthenticationProvider.getAuthedUser()
        auditorUserId = authedUser?.id
        auditorOrganizationId = authedUser?.memberOf

        CertificationValidatedEvent(command.id)
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
                badges.forEach { badge ->
                    certification.badges.add(badge.toEmptyCertification())
                }
                certification.isEnabled = enablingCondition == null
                certification.isValidated = validatingCondition == null
                certification.hasAllValues = !requirementRepository.hasAnyConcept(identifier)
                certification.areEvidencesProvided = evidenceValidatingCondition == null
                certification.isFulfilled = certification.isFulfilled()
            }
    }

    private fun Badge.toEmptyCertification(): BadgeCertification = BadgeCertification().also { badgeCertification ->
        badgeCertification.id = UUID.randomUUID().toString()
        badgeCertification.badge = this
    }

    private suspend fun <Evt: Any> doOnEntity(
        command: S2Command<CertificationId>,
        depth: Int,
        applyUpdate: suspend Certification.(Session) -> Evt
    ): Evt = doTransitionWithEvent(command) { session ->
        val certification = session.load(Certification::class.java, command.id, depth)
            ?: throw NotFoundException(Certification.LABEL, command.id)

        certification.lastModificationDate = System.currentTimeMillis()
        certification.applyUpdate(session)
            .also { certificationRepository.save(certification) }
    }

    private suspend fun <Evt: Any> doTransitionWithEvent(
        command: S2Command<CertificationId>,
        exec: suspend (Session) -> Evt
    ): Evt = sessionFactory.transaction { session, _ ->
        checkTransition(command)
        exec(session).also(applicationEventPublisher::publishEvent)
    }

    private suspend fun checkTransition(command: S2Command<CertificationId>) = sessionFactory.session { session ->
        val certification = session.findSafeShallowById<Certification>(command.id, Certification.LABEL)
        require(s2Certification.isAvailableTransition(certification.status, command)) {
            "No available transition from [${certification.status}] with command $command"
        }
    }
}
