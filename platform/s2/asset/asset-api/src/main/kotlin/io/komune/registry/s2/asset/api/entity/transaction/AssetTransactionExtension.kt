package io.komune.registry.s2.asset.api.entity.transaction

import io.komune.registry.s2.asset.domain.model.AssetTransaction

fun AssetTransactionEntity.toTransaction() = AssetTransaction(
    id = id,
    poolId = poolId,
    from = from,
    to = to,
    by = by,
    quantity = quantity,
    type = type,
    date = date,
    file = file,
    state = s2State()
)
