package io.komune.registry.f2.catalogue.draft.api.service

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.draft.api.model.toDTO
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import org.springframework.stereotype.Service

@Service
class CatalogueDraftF2FinderService(
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val userF2FinderService: UserF2FinderService
) {
    suspend fun getOrNull(id: CatalogueDraftId): CatalogueDraftDTOBase? {
        return catalogueDraftFinderService.getOrNull(id)?.toDTOCached()
    }

    suspend fun page(
        id: Match<CatalogueDraftId>? = null,
        originalCatalogueId: Match<CatalogueId>? = null,
        language: Match<String>? = null,
        baseVersion: Match<Int>? = null,
        creatorId: Match<UserId>? = null,
        status: Match<CatalogueDraftState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueDraftDTOBase> {
        val cache = Cache()

        return catalogueDraftFinderService.page(
            id = id,
            originalCatalogueId = originalCatalogueId,
            language = language,
            baseVersion = baseVersion,
            creatorId = creatorId,
            status = status,
            offset = offset
        ).map { it.toDTOCached(cache) }
    }

    private suspend fun CatalogueDraftModel.toDTOCached(cache: Cache = Cache()) = toDTO(
        getCatalogue = { id, language -> cache.catalogues.get(id to language) },
        getUser = cache.users::get
    )

    private inner class Cache {
        val catalogues = SimpleCache<Pair<CatalogueId, Language>, CatalogueDTOBase> { (id, language) ->
            catalogueF2FinderService.get(id, language)
        }

        val users = SimpleCache(userF2FinderService::getRef)
    }
}
