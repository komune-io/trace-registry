package city.smartb.registry.s2.order.api.entity

import city.smartb.registry.infra.redis.RedisRepository
import city.smartb.registry.s2.order.domain.OrderId
import org.springframework.stereotype.Repository

@Repository
interface OrderRepository: RedisRepository<OrderEntity, OrderId>
