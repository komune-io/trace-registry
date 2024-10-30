package io.komune.registry.f2.asset.pool.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.client.model.unflatten
import cccev.dsl.model.InformationConcept
import cccev.dsl.model.InformationConceptIdentifier
import cccev.f2.concept.query.InformationConceptGetByIdentifierQuery
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.asset.pool.api.model.toDTO
import io.komune.registry.f2.asset.pool.domain.model.AssetPoolDTOBase
import io.komune.registry.s2.asset.api.AssetPoolFinderService
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.asset.domain.model.AssetPool
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
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

    suspend fun page(
        status: Match<AssetPoolState>? = null,
        vintage: Match<String>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<AssetPoolDTOBase> {
        return assetPoolFinderService.page(
            status = status,
            vintage = vintage,
            offset = offset
        ).map { it.toDTO() }
    }

    private suspend fun AssetPool.toDTO(cache: Cache = Cache()) = toDTO(
        getInformationConcept = cache.concepts::get
    )

    private inner class Cache {
        val concepts = SimpleCache<InformationConceptIdentifier, InformationConcept> { identifier ->
            InformationConceptGetByIdentifierQuery(
                identifier = identifier
            ).invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier())
                .unflatten()
        }
    }
}
