package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.s2.asset.domain.model.Transaction

fun TransactionEntity.toTransaction() = Transaction(
    id = id,
    poolId = poolId,
    from = from,
    to = to,
    by = by,
    quantity = quantity,
    type = type,
    date = date
)
