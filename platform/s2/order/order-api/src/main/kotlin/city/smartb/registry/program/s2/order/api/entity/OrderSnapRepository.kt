package city.smartb.registry.program.s2.order.api.entity

import city.smartb.registry.program.s2.order.domain.OrderId
import org.springframework.stereotype.Service
import s2.sourcing.dsl.snap.SnapRepository

@Service
class OrderSnapRepository(
    private val repository: OrderRepository
): SnapRepository<OrderEntity, OrderId> {
    override suspend fun get(id: OrderId): OrderEntity? {
        return repository.findById(id).orElse(null)
    }

    override suspend fun remove(id: OrderId): Boolean {
        repository.deleteById(id)
        return true
    }

    override suspend fun save(entity: OrderEntity): OrderEntity {
        return repository.save(entity)
    }

    fun clean() {
        repository.deleteAll()
    }
}
