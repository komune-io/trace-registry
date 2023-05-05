package city.smartb.registry.program.f2.pool.api.model

import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTOBase
import city.smartb.registry.program.s2.asset.domain.model.AssetPool

suspend fun AssetPool.toDTO(
    getInformationConcept: suspend (InformationConceptIdentifier) -> InformationConceptDTOBase
) = AssetPoolDTOBase(
    id = id,
    status = status.name,
    vintage = vintage,
    indicator = getInformationConcept(indicator),
    granularity = granularity,
    wallets = wallets
)
