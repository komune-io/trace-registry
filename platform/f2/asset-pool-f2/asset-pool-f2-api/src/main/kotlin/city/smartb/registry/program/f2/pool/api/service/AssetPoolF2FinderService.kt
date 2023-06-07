package city.smartb.registry.program.f2.pool.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import cccev.s2.concept.domain.InformationConceptIdentifier
import city.smartb.registry.program.api.commons.model.SimpleCache
import city.smartb.registry.program.f2.pool.api.model.toDTO
import city.smartb.registry.program.f2.pool.domain.model.AssetPoolDTOBase
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.model.AssetPool
import f2.dsl.fnc.invokeWith
import org.springframework.stereotype.Service

@Service
class AssetPoolF2FinderService(
    private val assetPoolFinderService: AssetPoolFinderService,
    private val cccevClient: CCCEVClient
) {
    suspend fun get(id: AssetPoolId): AssetPoolDTOBase {
        return assetPoolFinderService.get(id).toDTO()
    }

    suspend fun getOrNull(id: AssetPoolId): AssetPoolDTOBase? {
        return assetPoolFinderService.getOrNull(id)?.toDTO()
    }

    private suspend fun AssetPool.toDTO(cache: Cache = Cache()) = toDTO(
        getInformationConcept = cache.concepts::get
    )

    private inner class Cache {
        val concepts = SimpleCache<InformationConceptIdentifier, InformationConceptDTOBase> { identifier ->
            InformationConceptGetByIdentifierQueryDTOBase(
                identifier = identifier
            ).invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier())
                .item!!
        }
    }
}
