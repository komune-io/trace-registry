package city.smartb.registry.program.s2.order.domain

import city.smartb.registry.program.s2.order.domain.model.Order

interface OrderFinder {
    suspend fun getOrNull(id: OrderId): Order?
    suspend fun get(id: OrderId): Order
}
