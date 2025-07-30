package io.komune.registry.control.f2.protocol.api.service

import io.komune.registry.control.core.cccev.requirement.RequirementFinderService
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.RequirementId
import org.springframework.stereotype.Service

@Service
class ProtocolF2FinderService(
    private val requirementFinderService: RequirementFinderService
) {
    suspend fun getOrNull(id: RequirementId): ProtocolDTO? {
        return requirementFinderService.getOrNull(id)
            ?.let { CccevToProtocolConverter.convert(it) }
    }

    suspend fun get(id: RequirementId): ProtocolDTO {
        return getOrNull(id) ?: throw NotFoundException("Protocol", id)
    }
}
