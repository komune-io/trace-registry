package cccev.s2.requirement.api

import cccev.s2.requirement.api.entity.RequirementAutomateExecutor
import cccev.s2.requirement.domain.RequirementAggregate
import cccev.s2.requirement.domain.RequirementState
import cccev.s2.requirement.domain.command.RequirementAddConceptsCommand
import cccev.s2.requirement.domain.command.RequirementAddEvidenceTypeListsCommand
import cccev.s2.requirement.domain.command.RequirementAddRequirementsCommand
import cccev.s2.requirement.domain.command.RequirementAddedConceptsEvent
import cccev.s2.requirement.domain.command.RequirementAddedEvidenceTypeListsEvent
import cccev.s2.requirement.domain.command.RequirementAddedRequirementsEvent
import cccev.s2.requirement.domain.command.RequirementCreateCommand
import cccev.s2.requirement.domain.command.RequirementCreatedEvent
import cccev.s2.requirement.domain.command.RequirementRemoveConceptsCommand
import cccev.s2.requirement.domain.command.RequirementRemoveEvidenceTypeListsCommand
import cccev.s2.requirement.domain.command.RequirementRemoveRequirementsCommand
import cccev.s2.requirement.domain.command.RequirementRemovedConceptsEvent
import cccev.s2.requirement.domain.command.RequirementRemovedEvidenceTypeListsEvent
import cccev.s2.requirement.domain.command.RequirementRemovedRequirementsEvent
import cccev.s2.requirement.domain.command.RequirementUpdateCommand
import cccev.s2.requirement.domain.command.RequirementUpdatedEvent
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class RequirementAggregateService(
    private val automate: RequirementAutomateExecutor
): RequirementAggregate {

    override suspend fun create(command: RequirementCreateCommand) = automate.init(command) {
        RequirementCreatedEvent(
            id = UUID.randomUUID().toString(),
            status = RequirementState.CREATED,
            identifier = command.identifier,
            kind = command.kind,
            name = command.name,
            description = command.description,
            type = command.type,
            isDerivedFrom = command.isDerivedFrom,
            hasRequirement = command.hasRequirement,
            hasConcept = command.hasConcept,
            hasEvidenceTypeList = command.hasEvidenceTypeList,
            hasQualifiedRelation = command.hasQualifiedRelation,
            enablingCondition = command.enablingCondition,
            enablingConditionDependencies = command.enablingConditionDependencies,
            required = command.required,
            validatingCondition = command.validatingCondition,
            validatingConditionDependencies = command.validatingConditionDependencies,
            order = command.order,
            properties = command.properties,
        )
    }

    override suspend fun update(command: RequirementUpdateCommand) = automate.transition(command) {
        RequirementUpdatedEvent(
            id = command.id,
            name = command.name,
            description = command.description,
            type = command.type,
            hasConcept = command.hasConcept,
            hasEvidenceTypeList = command.hasEvidenceTypeList,
            hasRequirement = command.hasRequirement,
            hasQualifiedRelation = command.hasQualifiedRelation,
            enablingCondition = command.enablingCondition,
            enablingConditionDependencies = command.enablingConditionDependencies,
            required = command.required,
            validatingCondition = command.validatingCondition,
            validatingConditionDependencies = command.validatingConditionDependencies,
            order = command.order,
            properties = command.properties
        )
    }

    override suspend fun addRequirements(command: RequirementAddRequirementsCommand) = automate.transition(command) {
        RequirementAddedRequirementsEvent(
            id = command.id,
            requirementIds = command.requirementIds
        )
    }

    override suspend fun removeRequirements(command: RequirementRemoveRequirementsCommand) = automate.transition(command) {
        RequirementRemovedRequirementsEvent(
            id = command.id,
            requirementIds = command.requirementIds
        )
    }

    override suspend fun addConcepts(command: RequirementAddConceptsCommand) = automate.transition(command) {
        RequirementAddedConceptsEvent(
            id = command.id,
            conceptIds = command.conceptIds
        )
    }

    override suspend fun removeConcepts(command: RequirementRemoveConceptsCommand) = automate.transition(command) {
        RequirementRemovedConceptsEvent(
            id = command.id,
            conceptIds = command.conceptIds
        )
    }

    override suspend fun addEvidenceTypeLists(command: RequirementAddEvidenceTypeListsCommand) = automate.transition(command) {
        RequirementAddedEvidenceTypeListsEvent(
            id = command.id,
            evidenceTypeListIds = command.evidenceTypeListIds
        )
    }

    override suspend fun removeEvidenceTypeLists(command: RequirementRemoveEvidenceTypeListsCommand) = automate.transition(command) {
        RequirementRemovedEvidenceTypeListsEvent(
            id = command.id,
            evidenceTypeListIds = command.evidenceTypeListIds
        )
    }
}
