package city.smartb.registry.f2.asset.pool.api.model

import city.smartb.registry.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.s2.asset.domain.model.AssetTransaction

suspend fun AssetTransaction.toDTO(
    getAssetPool: suspend (AssetPoolId) -> city.smartb.registry.f2.asset.pool.domain.model.AssetPoolDTOBase
): city.smartb.registry.f2.asset.pool.domain.model.AssetTransactionDTOBase {
    val pool = getAssetPool(poolId)
    return city.smartb.registry.f2.asset.pool.domain.model.AssetTransactionDTOBase(
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
