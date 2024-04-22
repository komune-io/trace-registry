package io.komune.registry.f2.asset.order.api.service

import io.komune.registry.f2.asset.order.api.model.toDTO
import io.komune.registry.f2.asset.order.domain.model.OrderDTOBase
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.order.api.OrderFinderService
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.OrderState
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
