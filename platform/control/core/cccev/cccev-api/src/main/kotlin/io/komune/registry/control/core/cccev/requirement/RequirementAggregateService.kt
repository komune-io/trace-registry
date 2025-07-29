package io.komune.registry.control.core.cccev.requirement

import f2.spring.exception.NotFoundException
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.control.core.cccev.concept.entity.InformationConcept
import io.komune.registry.control.core.cccev.evidencetype.entity.EvidenceType
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddConceptsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddEvidenceTypesCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddRequirementsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddedConceptsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddedEvidenceTypesEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementAddedRequirementsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementCreateCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementCreatedEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveConceptsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveEvidenceTypesCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemoveRequirementsCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemovedConceptsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemovedEvidenceTypesEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementRemovedRequirementsEvent
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdateCommand
import io.komune.registry.control.core.cccev.requirement.command.RequirementUpdatedEvent
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.infra.neo4j.findSafeShallowAllById
import io.komune.registry.infra.neo4j.removeRelation
import io.komune.registry.infra.neo4j.removeSeveredRelations
import io.komune.registry.infra.neo4j.transaction
import org.neo4j.ogm.session.SessionFactory
import org.springframework.context.ApplicationEventPublisher
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class RequirementAggregateService(
    private val applicationEventPublisher: ApplicationEventPublisher,
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
}
