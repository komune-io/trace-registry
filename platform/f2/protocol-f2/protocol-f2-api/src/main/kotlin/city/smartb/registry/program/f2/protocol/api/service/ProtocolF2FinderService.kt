package city.smartb.registry.program.f2.protocol.api.service

import f2.dsl.cqrs.page.OffsetPagination
import city.smartb.registry.program.f2.protocol.domain.query.ProtocolPageResult
import city.smartb.registry.program.s2.protocol.api.ProtocolFinderService
import city.smartb.registry.program.s2.protocol.domain.model.Protocol
import city.smartb.registry.program.s2.protocol.domain.model.ProtocolId
import org.springframework.stereotype.Service

@Service
class ProtocolF2FinderService(
    private val protocolFinderService: ProtocolFinderService,
) {
    suspend fun getOrNull(id: ProtocolId): Protocol? {
        return protocolFinderService.getOrNull(id)
    }

    suspend fun get(id: ProtocolId): Protocol {
        return protocolFinderService.get(id)
    }

    suspend fun page(
        offset: OffsetPagination? = null
    ): ProtocolPageResult {
        return protocolFinderService.page(
            offset = offset
        ).let { page ->
            ProtocolPageResult(
                items = page.items,
                total = page.total
            )
        }
    }

}
