package io.komune.registry.s2.order.api.entity

import io.komune.registry.infra.redis.RedisRepository
import io.komune.registry.s2.order.domain.OrderId
import org.springframework.stereotype.Repository

@Repository
interface OrderRepository: RedisRepository<OrderEntity, OrderId>
