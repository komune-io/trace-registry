package city.smartb.registry.f2.asset.api.model

import city.smartb.registry.f2.asset.domain.model.OrderDTOBase
import city.smartb.registry.s2.order.domain.model.Order

fun Order.toDTO() = OrderDTOBase(
    id = id,
    status = status.name,
    poolId = poolId,
    from = from,
    to = to,
    by = by,
    quantity = quantity,
    type = type.name,
    creationDate = creationDate,
    certificate = certificate,
    cancelReason = cancelReason,
)
