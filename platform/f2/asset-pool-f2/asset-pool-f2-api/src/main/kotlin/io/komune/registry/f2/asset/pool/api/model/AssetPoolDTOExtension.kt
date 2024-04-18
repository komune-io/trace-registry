package io.komune.registry.f2.asset.pool.api.model

import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.s2.concept.domain.InformationConceptIdentifier
import io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTOBase
import io.komune.registry.s2.asset.domain.model.AssetPool
import io.komune.registry.s2.asset.domain.model.AssetPoolStatsBase

suspend fun AssetPool.toDTO(
    getInformationConcept: suspend (InformationConceptIdentifier) -> InformationConceptDTOBase
) = AssetPoolDTOBase(
    id = id,
    status = status.name,
    vintage = vintage,
    indicator = getInformationConcept(indicator),
    granularity = granularity,
    wallets = wallets,
    stats = AssetPoolStatsBase(
        available = stats.available,
        retired = stats.retired,
        transferred = stats.transferred,
    ),
    metadata = metadata
)
