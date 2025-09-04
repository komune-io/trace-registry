package io.komune.registry.control.core.cccev.requirement

import f2.spring.exception.NotFoundException
import io.komune.fs.s2.file.client.FileClient
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.spring.utils.contentByteArray
import io.komune.fs.spring.utils.toUploadCommand
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.concept.entity.InformationConceptRepository
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddBadgeCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddConceptsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddEvidenceTypesCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddRequirementsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddedBadgeEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddedConceptsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddedEvidenceTypesEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddedRequirementsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementCreateCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementCreatedEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveBadgeCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveConceptsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveEvidenceTypesCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveRequirementsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemovedConceptsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemovedEvidenceTypesEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemovedRequirementsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdateBadgeCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdateCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdatedBadgeEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdatedEvent
import io.komune.registry.control.core.cccev.requirement.entity.Badge
import io.komune.registry.control.core.cccev.requirement.entity.BadgeLevel
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.infra.fs.FsPath
import io.komune.registry.infra.fs.toDeleteCommand
import io.komune.registry.infra.neo4j.detachDelete
import io.komune.registry.infra.neo4j.findSafeShallowAllById
import io.komune.registry.infra.neo4j.removeRelation
import io.komune.registry.infra.neo4j.removeSeveredRelations
import io.komune.registry.infra.neo4j.transaction
import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.BadgeLevelId
import org.neo4j.ogm.session.SessionFactory
import org.springframework.context.ApplicationEventPublisher
import org.springframework.http.codec.multipart.FilePart
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class RequirementAggregateService(
    private val applicationEventPublisher: ApplicationEventPublisher,
    private val fileClient: FileClient,
    private val informationConceptRepository: InformationConceptRepository,
    private val sessionFactory: SessionFactory
) {
    suspend fun create(command: RequirementCreateCommand): RequirementCreatedEvent = sessionFactory.transaction { session, _ ->
        val subRequirements = session.findSafeShallowAllById<Requirement>(command.subRequirementIds, "Requirement")

        val conceptIds = command.conceptIds.toSet() + command.enablingConditionDependencies + command.validatingConditionDependencies
        val concepts = session.findSafeShallowAllById<InformationConcept>(conceptIds, "InformationConcept")
            .associateBy(InformationConcept::id)

        val evidenceTypes = session.findSafeShallowAllById<EvidenceType>(command.evidenceTypeIds, "EvidenceType")

        val requirement = Requirement().also { requirement ->
            requirement.id = UUID.randomUUID().toString()
            requirement.identifier = command.identifier ?: requirement.id
            requirement.kind = command.kind
            requirement.name = command.name
            requirement.description = command.description
            requirement.type = command.type
            requirement.subRequirements = subRequirements.toMutableList()
            requirement.concepts = command.conceptIds.mapNotNull { concepts[it] }.toMutableList()
            requirement.evidenceTypes = evidenceTypes.toMutableList()
            requirement.enablingCondition = command.enablingCondition
            requirement.enablingConditionDependencies = command.enablingConditionDependencies.mapNotNull { concepts[it] }.toMutableList()
            requirement.required = command.required
            requirement.validatingCondition = command.validatingCondition
            requirement.validatingConditionDependencies = command.validatingConditionDependencies
                .mapNotNull { concepts[it] }
                .toMutableList()
            requirement.evidenceValidatingCondition = command.evidenceValidatingCondition
            requirement.order = command.order
            requirement.properties = command.properties
        }
        session.save(requirement)

        RequirementCreatedEvent(requirement.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun update(command: RequirementUpdateCommand): RequirementUpdatedEvent = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 1)
            ?: throw NotFoundException("Requirement", command.id)

        val subRequirements = session.findSafeShallowAllById<Requirement>(command.subRequirementIds, "Requirement")
        val conceptIds = command.conceptIds.toSet() + command.enablingConditionDependencies + command.validatingConditionDependencies
        val concepts = session.findSafeShallowAllById<InformationConcept>(conceptIds, "InformationConcept")
            .associateBy(InformationConcept::id)
        val evidenceTypes = session.findSafeShallowAllById<EvidenceType>(command.evidenceTypeIds, "EvidenceType")

        session.removeSeveredRelations(
            Requirement.LABEL, command.id, Requirement.HAS_REQUIREMENT, Requirement.LABEL,
            requirement.subRequirements.map { it.id }, command.subRequirementIds.toSet()
        )
        session.removeSeveredRelations(
            Requirement.LABEL, command.id, Requirement.HAS_CONCEPT, InformationConcept.LABEL,
            requirement.concepts.map { it.id }, command.conceptIds.toSet()
        )
        session.removeSeveredRelations(
            Requirement.LABEL, command.id, Requirement.ENABLING_DEPENDS_ON, InformationConcept.LABEL,
            requirement.enablingConditionDependencies.map { it.id }, command.enablingConditionDependencies.toSet()
        )
        session.removeSeveredRelations(
            Requirement.LABEL, command.id, Requirement.VALIDATION_DEPENDS_ON, InformationConcept.LABEL,
            requirement.validatingConditionDependencies.map { it.id }, command.validatingConditionDependencies.toSet()
        )
        session.removeSeveredRelations(
            Requirement.LABEL, command.id, Requirement.HAS_EVIDENCE_TYPE, EvidenceType.LABEL,
            requirement.evidenceTypes.map { it.id }, command.evidenceTypeIds.toSet()
        )

        requirement.also { r ->
            r.name = command.name
            r.description = command.description
            r.type = command.type
            r.concepts = command.conceptIds.mapNotNull { concepts[it] }.toMutableList()
            r.evidenceTypes = evidenceTypes.toMutableList()
            r.subRequirements = subRequirements.toMutableList()
            r.enablingCondition = command.enablingCondition
            r.enablingConditionDependencies = command.enablingConditionDependencies.mapNotNull { concepts[it] }.toMutableList()
            r.required = command.required
            r.validatingCondition = command.validatingCondition
            r.validatingConditionDependencies = command.validatingConditionDependencies.mapNotNull { concepts[it] }.toMutableList()
            r.evidenceValidatingCondition = command.evidenceValidatingCondition
            r.order = command.order
            r.properties = command.properties
        }
        session.save(requirement)

        RequirementUpdatedEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun addRequirements(command: RequirementAddRequirementsCommand) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        val subRequirements = session.findSafeShallowAllById<Requirement>(command.requirementIds, "Requirement")

        requirement.subRequirements.addAll(subRequirements)
        session.save(requirement)

        RequirementAddedRequirementsEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun removeRequirements(command: RequirementRemoveRequirementsCommand) = sessionFactory.transaction { session, _ ->
        session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        command.requirementIds.mapAsync { requirementId ->
            session.removeRelation(Requirement.LABEL, command.id, Requirement.HAS_REQUIREMENT, Requirement.LABEL, requirementId)
        }

        RequirementRemovedRequirementsEvent(command.id)
    }

    suspend fun addConcepts(command: RequirementAddConceptsCommand) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        val concepts = session.findSafeShallowAllById<InformationConcept>(command.conceptIds, "InformationConcept")

        requirement.concepts.addAll(concepts)
        session.save(requirement)

        RequirementAddedConceptsEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun removeConcepts(command: RequirementRemoveConceptsCommand) = sessionFactory.transaction { session, _ ->
        session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        command.conceptIds.mapAsync { conceptId ->
            session.removeRelation(Requirement.LABEL, command.id, Requirement.HAS_CONCEPT, InformationConcept.LABEL, conceptId)
        }

        RequirementRemovedConceptsEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun addEvidenceTypes(command: RequirementAddEvidenceTypesCommand) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        val evidenceTypes = session.findSafeShallowAllById<EvidenceType>(command.evidenceTypeIds, "EvidenceType")

        requirement.evidenceTypes.addAll(evidenceTypes)
        requirement.evidenceValidatingCondition = command.evidenceValidatingCondition
        session.save(requirement)

        RequirementAddedEvidenceTypesEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun removeEvidenceTypes(command: RequirementRemoveEvidenceTypesCommand) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        command.evidenceTypeIds.mapAsync { evidenceTypeId ->
            session.removeRelation(Requirement.LABEL, command.id, Requirement.HAS_EVIDENCE_TYPE, EvidenceType.LABEL, evidenceTypeId)
        }
        requirement.evidenceValidatingCondition = command.evidenceValidatingCondition
        session.save(requirement)


        RequirementRemovedEvidenceTypesEvent(command.id, command.evidenceTypeIds)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun addBadge(
        command: RequirementAddBadgeCommand, images: Map<String, FilePart>?
    ) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        val concept = informationConceptRepository.findShallowByIdentifier(command.informationConceptIdentifier)
            ?: throw NotFoundException("InformationConcept", command.informationConceptIdentifier)

        val badge = Badge().also { badge ->
            badge.id = UUID.randomUUID().toString()
            badge.identifier = command.identifier ?: badge.id
            badge.name = command.name
            badge.informationConcept = concept
            badge.image = uploadBadgeImageFromFiles(badge.id, null, images, command.image)
            badge.levels = command.levels.map { levelCommand ->
                BadgeLevel().also { level ->
                    level.id = levelCommand.id ?: UUID.randomUUID().toString()
                    level.identifier = levelCommand.identifier ?: level.id
                    level.name = levelCommand.name
                    level.color = levelCommand.color
                    level.image = uploadBadgeImageFromFiles(badge.id, level.id, images, levelCommand.image)
                    level.level = levelCommand.level
                    level.expression = levelCommand.expression
                }
            }.toMutableList()
        }
        requirement.badges.add(badge)

        session.save(requirement)

        RequirementAddedBadgeEvent(command.id, badge.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun updateBadge(
        command: RequirementUpdateBadgeCommand, images: Map<String, FilePart>?
    ) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 2)
            ?: throw NotFoundException("Requirement", command.id)

        val badge = requirement.badges.find { it.id == command.badgeId }
            ?: throw NotFoundException("Badge", command.badgeId)

        val concept = informationConceptRepository.findShallowByIdentifier(command.informationConceptIdentifier)
            ?: throw NotFoundException("InformationConcept", command.informationConceptIdentifier)

        badge.name = command.name
        badge.informationConcept = concept
        badge.image = uploadBadgeImageFromFiles(badge.id, null, images, command.image) ?: badge.image

        badge.levels.forEach { level ->
            if (command.levels.none { it.id == level.id }) {
                session.detachDelete(BadgeLevel.LABEL, level.id)
                level.image?.let { fileClient.fileDelete(listOf(it.toDeleteCommand())) }
            }
        }

        val existingLevels = badge.levels.associateBy { it.id }
        command.levels.forEach { levelCommand ->
            val level = existingLevels[levelCommand.id] ?: BadgeLevel().also { level ->
                level.id = UUID.randomUUID().toString()
                badge.levels.add(level)
            }
            level.name = levelCommand.name
            level.color = levelCommand.color
            level.image = uploadBadgeImageFromFiles(badge.id, level.id, images, levelCommand.image) ?: level.image
            level.level = levelCommand.level
            level.expression = levelCommand.expression
        }

        session.save(requirement)

        RequirementUpdatedEvent(command.id)
            .also(applicationEventPublisher::publishEvent)

        RequirementUpdatedBadgeEvent(command.id, command.badgeId)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun removeBadge(command: RequirementRemoveBadgeCommand) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 2)
            ?: throw NotFoundException("Requirement", command.id)

        val badge = requirement.badges.find { it.id == command.badgeId }
            ?: throw NotFoundException("Badge", command.badgeId)

        badge.image?.let { fileClient.fileDelete(listOf(it.toDeleteCommand())) }
        fileClient.fileDelete(badge.levels.mapNotNull { it.image?.toDeleteCommand() })

        badge.levels.mapAsync { level -> session.detachDelete(BadgeLevel.LABEL, level.id) }
        session.detachDelete(BadgeLevel.LABEL, command.id)

        RequirementRemovedRequirementsEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    private suspend fun uploadBadgeImageFromFiles(
        badgeId: BadgeId, levelId: BadgeLevelId?, files: Map<String, FilePart>?, fileKey: String?
    ): FilePath? {
        val filePart = fileKey?.let { files?.get(it) } ?: return null
        return uploadBadgeImage(badgeId, levelId, filePart)
    }

    private suspend fun uploadBadgeImage(badgeId: BadgeId, levelId: BadgeLevelId?, filePart: FilePart): FilePath {
        val path = FsPath.Control.Badge.image(badgeId, levelId, filePart.filename().replaceAfterLast('.', "png"))
        fileClient.fileUpload(path.toUploadCommand(), filePart.contentByteArray())
        return path
    }
}
