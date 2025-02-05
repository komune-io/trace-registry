package io.komune.registry.s2.order.domain

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.order.domain.model.Order

interface OrderFinder {
    suspend fun getOrNull(id: OrderId): Order?
    suspend fun get(id: OrderId): Order
    suspend fun page(
        offset: OffsetPagination?,
        status: Match<OrderState>?,
        from: Match<String>?,
        to: Match<String>?,
        by: Match<String>?,
        type: Match<AssetTransactionType>?,
        poolId: Match<AssetPoolId>?
    ): PageDTO<Order>
}
