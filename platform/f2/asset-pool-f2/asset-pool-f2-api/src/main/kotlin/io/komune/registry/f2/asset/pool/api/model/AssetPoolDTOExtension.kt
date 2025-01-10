package io.komune.registry.f2.asset.pool.api.model

import io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTOBase
import io.komune.registry.s2.asset.domain.model.AssetPool
import io.komune.registry.s2.asset.domain.model.AssetPoolStatsBase

suspend fun AssetPool.toDTO() = AssetPoolDTOBase(
    id = id,
    status = status.name,
    vintage = vintage,
    indicator = indicator,
    granularity = granularity,
    wallets = wallets,
    stats = AssetPoolStatsBase(
        available = stats.available,
        retired = stats.retired,
        transferred = stats.transferred,
    ),
    metadata = metadata
)
