package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.f2.asset.api.model.toDTO
import city.smartb.registry.program.f2.asset.domain.model.OrderDTOBase
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransactionType
import city.smartb.registry.program.s2.order.api.OrderFinderService
import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.OrderState
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import org.springframework.stereotype.Service

@Service
class AssetOrderF2FinderService(
    private val orderFinderService: OrderFinderService
) {

    suspend fun get(id: OrderId): OrderDTOBase {
        return orderFinderService.get(id).toDTO()
    }

    suspend fun page(
        offset: OffsetPagination?,
        status: Match<OrderState>?,
        from: Match<String>?,
        to: Match<String>?,
        by: Match<String>?,
        type: Match<AssetTransactionType>?,
        poolId: Match<AssetPoolId>?
    ): PageDTO<OrderDTOBase> {
        return orderFinderService.page(
            offset = offset,
            status = status,
            from = from,
            to = to,
            by = by,
            type = type,
            poolId = poolId
        ).map { it.toDTO() }
    }

}
