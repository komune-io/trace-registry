package city.smartb.registry.program.s2.order.api

import city.smartb.registry.program.s2.order.api.entity.OrderRepository
import city.smartb.registry.program.s2.order.api.entity.toOrder
import city.smartb.registry.program.s2.order.domain.OrderFinder
import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.model.Order
import f2.spring.exception.NotFoundException
import org.springframework.stereotype.Service

@Service
class OrderFinderService(
    private val orderRepository: OrderRepository
): OrderFinder {
    override suspend fun getOrNull(id: OrderId): Order? {
        return orderRepository.findById(id).orElse(null)?.toOrder()
    }

    override suspend fun get(id: OrderId): Order {
        return getOrNull(id)
            ?: throw NotFoundException("Order", id)
    }
}
