package io.komune.registry.s2.order.api.entity

import io.komune.registry.s2.order.domain.model.Order

fun OrderEntity.toOrder() = Order(
    id = id,
    status = status,
    poolId = poolId,
    from = from,
    to = to,
    by = by,
    quantity = quantity,
    type = type,
    creationDate = creationDate,
    completedDate = completedDate,
    certificate = certificate,
    cancelReason = cancelReason
)
