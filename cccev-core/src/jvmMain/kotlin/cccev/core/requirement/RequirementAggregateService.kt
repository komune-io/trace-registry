package cccev.core.requirement

import cccev.commons.utils.mapAsync
import cccev.core.requirement.command.RequirementAddConceptsCommand
import cccev.core.requirement.command.RequirementAddRequirementsCommand
import cccev.core.requirement.command.RequirementAddedConceptsEvent
import cccev.core.requirement.command.RequirementAddedRequirementsEvent
import cccev.core.requirement.command.RequirementCreateCommand
import cccev.core.requirement.command.RequirementCreatedEvent
import cccev.core.requirement.command.RequirementRemoveConceptsCommand
import cccev.core.requirement.command.RequirementRemoveRequirementsCommand
import cccev.core.requirement.command.RequirementRemovedConceptsEvent
import cccev.core.requirement.command.RequirementRemovedRequirementsEvent
import cccev.core.requirement.command.RequirementUpdateCommand
import cccev.core.requirement.command.RequirementUpdatedEvent
import cccev.core.requirement.entity.Requirement
import cccev.infra.neo4j.findSafeShallowAllById
import cccev.infra.neo4j.removeRelation
import cccev.infra.neo4j.transaction
import cccev.projection.api.entity.concept.InformationConceptEntity
import cccev.projection.api.entity.framework.FrameworkEntity
import f2.spring.exception.NotFoundException
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
        val subRequirements = session.findSafeShallowAllById<Requirement>(command.hasRequirement, "Requirement")

        val conceptIds = command.hasConcept.toSet() + command.enablingConditionDependencies + command.validatingConditionDependencies
        val concepts = session.findSafeShallowAllById<InformationConceptEntity>(conceptIds, "InformationConcept")
            .associateBy(InformationConceptEntity::id)

//        val evidenceTypeLists = evidenceTypeListRepository.findAllById(command.hasEvidenceTypeList).collectList().awaitSingle()
        val frameworks = session.findSafeShallowAllById<FrameworkEntity>(command.isDerivedFrom, "Framework")

        val requirement = Requirement().apply {
            id = UUID.randomUUID().toString()
            identifier = command.identifier ?: id
            kind = command.kind
            name = command.name
            description = command.description
            type = command.type
            isDerivedFrom = frameworks.toMutableList()
            hasRequirement = subRequirements.toMutableList()
            hasConcept = command.hasConcept.mapNotNull { concepts[it] }.toMutableList()
//            hasEvidenceTypeList = evidenceTypeLists
            enablingCondition = command.enablingCondition
            enablingConditionDependencies = command.enablingConditionDependencies.mapNotNull { concepts[it] }.toMutableList()
            required = command.required
            validatingCondition = command.validatingCondition
            validatingConditionDependencies = command.validatingConditionDependencies.mapNotNull { concepts[it] }.toMutableList()
            order = command.order
            properties = command.properties
        }

        RequirementCreatedEvent(requirement.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun update(command: RequirementUpdateCommand): RequirementUpdatedEvent = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 1)
            ?: throw NotFoundException("Requirement", command.id)

        val subRequirements = session.findSafeShallowAllById<Requirement>(command.hasRequirement, "Requirement")
        requirement.hasRequirement.mapAsync {
            if (it.id !in command.hasRequirement) {
                session.removeRelation(Requirement.LABEL, command.id, Requirement.HAS_REQUIREMENT, Requirement.LABEL, it.id)
            }
        }

        val conceptIds = command.hasConcept.toSet() + command.enablingConditionDependencies + command.validatingConditionDependencies
        val concepts = session.findSafeShallowAllById<InformationConceptEntity>(conceptIds, "InformationConcept")
            .associateBy(InformationConceptEntity::id)
        requirement.hasConcept.mapAsync {
            if (it.id !in command.hasConcept) {
                session.removeRelation(Requirement.LABEL, command.id, Requirement.HAS_CONCEPT, InformationConceptEntity.LABEL, it.id)
            }
        }
        requirement.enablingConditionDependencies.mapAsync {
            if (it.id !in command.enablingConditionDependencies) {
                session.removeRelation(
                    Requirement.LABEL, command.id, Requirement.ENABLING_DEPENDS_ON, InformationConceptEntity.LABEL, it.id
                )
            }
        }
        requirement.validatingConditionDependencies.mapAsync {
            if (it.id !in command.validatingConditionDependencies) {
                session.removeRelation(
                    Requirement.LABEL, command.id, Requirement.VALIDATION_DEPENDS_ON, InformationConceptEntity.LABEL, it.id
                )
            }
        }

//        val evidenceTypeLists = evidenceTypeListRepository.findAllById(command.hasEvidenceTypeList).collectList().awaitSingle()

        requirement.apply {
            name = command.name
            description = command.description
            type = command.type
            hasConcept = command.hasConcept.mapNotNull { concepts[it] }.toMutableList()
//            hasEvidenceTypeList = command.hasEvidenceTypeList
            hasRequirement = subRequirements.toMutableList()
            enablingCondition = command.enablingCondition
            enablingConditionDependencies = command.enablingConditionDependencies.mapNotNull { concepts[it] }.toMutableList()
            required = command.required
            validatingCondition = command.validatingCondition
            validatingConditionDependencies = command.validatingConditionDependencies.mapNotNull { concepts[it] }.toMutableList()
            order = command.order
            properties = command.properties
        }
        session.save(requirement)

        RequirementUpdatedEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun addRequirements(command: RequirementAddRequirementsCommand) = sessionFactory.transaction { session, _ ->
        val requirement = session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        val subRequirements = session.findSafeShallowAllById<Requirement>(command.requirementIds, "Requirement")

        requirement.hasRequirement.addAll(subRequirements)
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

        val concepts = session.findSafeShallowAllById<InformationConceptEntity>(command.conceptIds, "InformationConcept")

        requirement.hasConcept.addAll(concepts)
        session.save(requirement)

        RequirementAddedConceptsEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

    suspend fun removeConcepts(command: RequirementRemoveConceptsCommand) = sessionFactory.transaction { session, _ ->
        session.load(Requirement::class.java, command.id as String, 0)
            ?: throw NotFoundException("Requirement", command.id)

        command.conceptIds.mapAsync { conceptId ->
            session.removeRelation(Requirement.LABEL, command.id, Requirement.HAS_CONCEPT, InformationConceptEntity.LABEL, conceptId)
        }

        RequirementRemovedConceptsEvent(command.id)
            .also(applicationEventPublisher::publishEvent)
    }

//    suspend fun addEvidenceTypeLists(command: RequirementAddEvidenceTypeListsCommand): RequirementAddedEvidenceTypeListsEvent {
//        TODO()
//    }
//
//    suspend fun removeEvidenceTypeLists(command: RequirementRemoveEvidenceTypeListsCommand): RequirementRemovedEvidenceTypeListsEvent {
//        TODO()
//    }
}
