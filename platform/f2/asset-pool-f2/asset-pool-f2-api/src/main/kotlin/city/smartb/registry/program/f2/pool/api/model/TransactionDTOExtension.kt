package city.smartb.registry.program.f2.pool.api.model

import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTOBase
import city.smartb.registry.program.f2.pool.domain.model.AssetTransactionDTOBase
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetTransaction

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
