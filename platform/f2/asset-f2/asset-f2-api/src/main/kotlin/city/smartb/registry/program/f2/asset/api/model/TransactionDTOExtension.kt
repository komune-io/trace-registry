package city.smartb.registry.program.f2.asset.api.model

import city.smartb.registry.program.f2.asset.domain.model.TransactionDTOBase
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTOBase
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.Transaction

suspend fun Transaction.toDTO(
    getAssetPool: suspend (AssetPoolId) -> AssetPoolDTOBase
): TransactionDTOBase {
    val pool = getAssetPool(poolId)
    return TransactionDTOBase(
        id = id,
        poolId = poolId,
        from = from,
        to = to,
        by = by,
        quantity = quantity,
        type = type.name,
        date = date,
        unit = pool.indicator.unit?.notation.orEmpty(),
        vintage = pool.vintage
    )
}
