package io.komune.registry.control.f2.protocol.api.service

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.Page
import f2.dsl.cqrs.page.map
import io.komune.registry.control.core.cccev.requirement.entity.BadgeRepository
import io.komune.registry.control.core.cccev.requirement.entity.RequirementRepository
import io.komune.registry.control.f2.protocol.api.model.toDTO
import io.komune.registry.control.f2.protocol.api.model.toProtocolRef
import io.komune.registry.control.f2.protocol.domain.model.BadgeDTOBase
import io.komune.registry.control.f2.protocol.domain.model.ProtocolDTO
import io.komune.registry.control.f2.protocol.domain.model.ProtocolRef
import io.komune.registry.s2.commons.exception.NotFoundException
import io.komune.registry.s2.commons.model.BadgeId
import io.komune.registry.s2.commons.model.RequirementId
import org.springframework.stereotype.Service

@Service
class ProtocolF2FinderService(
    private val badgeRepository: BadgeRepository,
    private val requirementRepository: RequirementRepository
) {
    suspend fun getOrNull(id: RequirementId): ProtocolDTO? {
        return requirementRepository.findById(id)
            ?.let { CccevToProtocolConverter.convert(it) }
    }

    suspend fun get(id: RequirementId): ProtocolDTO {
        return getOrNull(id) ?: throw NotFoundException("Protocol", id)
    }

    suspend fun getRef(id: RequirementId): ProtocolRef {
        return requirementRepository.findShallowById(id)?.toProtocolRef()
            ?: throw NotFoundException("Protocol", id)
    }

    suspend fun pageRefs(
        type: String,
        offset: OffsetPagination? = null
    ): Page<ProtocolRef> {
        return requirementRepository.pageShallow(type = type, offset = offset)
            .map { it.toProtocolRef() }
    }

    suspend fun getBadgeOrNull(id: BadgeId): BadgeDTOBase? {
        return badgeRepository.findById(id)?.toDTO()
    }
}
