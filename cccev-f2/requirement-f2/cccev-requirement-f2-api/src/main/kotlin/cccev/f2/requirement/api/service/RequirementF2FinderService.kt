package cccev.f2.requirement.api.service

import cccev.core.requirement.RequirementFinderService
import cccev.core.requirement.entity.Requirement
import cccev.core.requirement.model.RequirementId
import cccev.core.requirement.model.RequirementIdentifier
import org.springframework.stereotype.Service

@Service
class RequirementF2FinderService(
    private val requirementFinderService: RequirementFinderService
) {
    suspend fun getOrNull(id: RequirementId): Requirement? {
        return requirementFinderService.getOrNull(id)
    }

    suspend fun get(id: RequirementId): Requirement {
        return requirementFinderService.get(id)
    }

    suspend fun getOrNullByIdentifier(identifier: RequirementIdentifier): Requirement? {
        return requirementFinderService.getOrNullByIdentifier(identifier)
    }
}
