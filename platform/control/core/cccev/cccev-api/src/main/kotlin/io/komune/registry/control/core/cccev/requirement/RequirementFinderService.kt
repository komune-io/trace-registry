package io.komune.registry.control.core.cccev.requirement

import f2.spring.exception.NotFoundException
import io.komune.registry.control.core.cccev.requirement.entity.Requirement
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.s2.commons.model.RequirementId
import io.komune.registry.s2.commons.model.RequirementIdentifier
import org.springframework.stereotype.Service

@Service
class RequirementFinderService(
    private val requirementRepository: RequirementRepository
) {
    suspend fun getOrNull(id: RequirementId): Requirement? {
        return requirementRepository.findById(id)
    }

    suspend fun get(id: RequirementId): Requirement {
        return getOrNull(id)
            ?: throw NotFoundException("Requirement", id)
    }

    suspend fun getOrNullByIdentifier(identifier: RequirementIdentifier): Requirement? {
        return requirementRepository.findByIdentifier(identifier)
    }
}
