package city.smartb.registry.program.s2.asset.api.entity.pool

import city.smartb.registry.program.s2.asset.domain.model.AssetPool

fun AssetPoolEntity.toAssetPool() = AssetPool(
    id = id,
    status = status,
    vintage = vintage,
    indicator = indicator,
    granularity = granularity,
    wallets = wallets
)
