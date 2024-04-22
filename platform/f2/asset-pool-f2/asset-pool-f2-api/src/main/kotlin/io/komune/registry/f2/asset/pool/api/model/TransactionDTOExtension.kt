package io.komune.registry.f2.asset.pool.api.model

import io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTOBase
import io.komune.registry.f2.asset.pool.domain.model.AssetTransactionDTOBase
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.model.AssetTransaction

suspend fun AssetTransaction.toDTO(
    getAssetPool: suspend (AssetPoolId) -> AssetPoolDTOBase
): AssetTransactionDTOBase {
    val pool = getAssetPool(poolId)
    return AssetTransactionDTOBase(
        id = id,
        poolId = poolId,
        from = from,
        to = to,
        by = by,
        quantity = quantity,
        type = type.name,
        date = date,
        unit = pool.indicator.unit?.notation.orEmpty(),
        vintage = pool.vintage,
        file = file,
        status = state.name
    )
}
