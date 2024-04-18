package io.komune.registry.s2.order.api

import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransactionType
import io.komune.registry.s2.order.api.entity.OrderRepository
import io.komune.registry.s2.order.api.entity.toOrder
import io.komune.registry.s2.order.api.query.OrderPageQueryDB
import io.komune.registry.s2.order.domain.OrderFinder
import io.komune.registry.s2.order.domain.OrderId
import io.komune.registry.s2.order.domain.OrderState
import io.komune.registry.s2.order.domain.model.Order
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import f2.spring.exception.NotFoundException
import org.springframework.stereotype.Service

@Service
class OrderFinderService(
    private val orderRepository: OrderRepository,
    private val orderPageQueryDB: OrderPageQueryDB
): OrderFinder {
    override suspend fun getOrNull(id: OrderId): Order? {
        return orderRepository.findById(id).orElse(null)?.toOrder()
    }

    override suspend fun get(id: OrderId): Order {
        return getOrNull(id)
            ?: throw NotFoundException("Order", id)
    }

    override suspend fun page(
        offset: OffsetPagination?,
        status: Match<OrderState>?,
        from: Match<String>?,
        to: Match<String>?,
        by: Match<String>?,
        type: Match<AssetTransactionType>?,
        poolId: Match<AssetPoolId>?
    ): PageDTO<Order> {
        return orderPageQueryDB.execute(
            offset = offset,
            status = status,
            from = from,
            to = to,
            by = by,
            type = type,
            poolId = poolId
        ).map { it.toOrder() }
    }
}
