package io.komune.registry.s2.asset.api.entity.pool

import io.komune.registry.s2.asset.domain.model.AssetPool
import io.komune.registry.s2.asset.domain.model.AssetPoolStatsBase

fun AssetPoolEntity.toAssetPool() = AssetPool(
    id = id,
    status = status,
    vintage = vintage,
    indicator = indicator,
    granularity = granularity,
    wallets = wallets,
    stats = AssetPoolStatsBase(
        available = stats.available,
        retired = stats.retired,
        transferred = stats.transferred
    ),
    metadata = metadata
)
