package cccev.f2.requirement.api.service

import cccev.core.requirement.RequirementAggregateService
import cccev.core.requirement.command.RequirementAddRequirementsCommand
import cccev.core.requirement.command.RequirementAddedRequirementsEvent
import cccev.core.requirement.command.RequirementCreateCommand
import cccev.core.requirement.command.RequirementCreatedEvent
import cccev.core.requirement.command.RequirementUpdateCommand
import cccev.core.requirement.command.RequirementUpdatedEvent
import cccev.core.requirement.model.RequirementKind
import cccev.f2.requirement.domain.command.RequirementCreateCommandDTO
import org.springframework.stereotype.Service

@Service
class RequirementF2AggregateService(
    private val requirementAggregateService: RequirementAggregateService
) {
    suspend fun create(command: RequirementCreateCommandDTO): RequirementCreatedEvent {
        return RequirementCreateCommand(
            identifier = command.identifier,
            kind = RequirementKind.valueOf(command.kind),
            name = command.name,
            description = command.description,
            type = command.type,
            hasRequirement = command.hasRequirement,
            hasConcept = command.hasConcept,
            hasEvidenceTypeList = command.hasEvidenceTypeList,
            enablingCondition = command.enablingCondition,
            enablingConditionDependencies = command.enablingConditionDependencies,
            required = command.required,
            validatingCondition = command.validatingCondition,
            validatingConditionDependencies = command.validatingConditionDependencies,
            order = command.order,
            properties = command.properties,
        ).let { requirementAggregateService.create(it) }
    }

    suspend fun update(command: RequirementUpdateCommand): RequirementUpdatedEvent {
        return requirementAggregateService.update(command)
    }

    suspend fun addRequirements(command: RequirementAddRequirementsCommand): RequirementAddedRequirementsEvent {
        return requirementAggregateService.addRequirements(command)
    }
}
