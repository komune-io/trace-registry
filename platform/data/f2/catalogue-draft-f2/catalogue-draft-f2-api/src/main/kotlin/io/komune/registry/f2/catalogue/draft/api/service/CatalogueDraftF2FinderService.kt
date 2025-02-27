package io.komune.registry.f2.catalogue.draft.api.service

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.cqrs.page.map
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDraftRefDTOBase
import io.komune.registry.f2.catalogue.draft.api.model.toDTO
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.f2.dataset.api.model.toRef
import io.komune.registry.f2.user.api.service.UserF2FinderService
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.api.entity.CatalogueDraftSnapMeiliSearchRepository
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
    private val catalogueDraftSnapMeiliSearchRepository: CatalogueDraftSnapMeiliSearchRepository,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val userF2FinderService: UserF2FinderService
) {
    suspend fun get(id: CatalogueDraftId): CatalogueDraftDTOBase {
        return catalogueDraftFinderService.get(id).toDTOCached()
    }

    suspend fun getOrNull(id: CatalogueDraftId): CatalogueDraftDTOBase? {
        return catalogueDraftFinderService.getOrNull(id)?.toDTOCached()
    }

    suspend fun getRef(id: CatalogueDraftId): CatalogueDraftRefDTOBase {
        return catalogueDraftFinderService.get(id).toRefCached()
    }

    suspend fun page(
        id: Match<CatalogueDraftId>? = null,
        catalogueId: Match<CatalogueId>? = null,
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
            catalogueId = catalogueId,
            originalCatalogueId = originalCatalogueId,
            language = language,
            baseVersion = baseVersion,
            creatorId = creatorId,
            status = status,
            offset = offset
        ).map { it.toDTOCached(cache) }
    }

    suspend fun search(
        query: String? = null,
        catalogueId: Match<CatalogueId>? = null,
        originalCatalogueId: Match<CatalogueId>? = null,
        type: Match<String>? = null,
        language: Match<String>? = null,
        status: Match<CatalogueDraftState>? = null,
        creatorId: Match<UserId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<CatalogueDraftDTOBase> {
        val cache = Cache()

        val searchResult = catalogueDraftSnapMeiliSearchRepository.search(
            query = query,
            catalogueId = catalogueId,
            originalCatalogueId = originalCatalogueId,
            type = type,
            language = language,
            status = status,
            creatorId = creatorId,
            offset = offset
        )

        return searchResult.map { catalogueDraftFinderService.get(it.id).toDTOCached(cache) }
    }

    private suspend fun CatalogueDraftModel.toDTOCached(cache: Cache = Cache()) = toDTO(
        getCatalogue = { id, language -> cache.catalogues.get(id to language) },
        getUser = cache.users::get
    )

    private suspend fun CatalogueDraftModel.toRefCached(cache: Cache = Cache()) = toRef(
        getUser = cache.users::get
    )

    private inner class Cache {
        val catalogues = SimpleCache<Pair<CatalogueId, Language>, CatalogueDTOBase> { (id, language) ->
            catalogueF2FinderService.get(id, language)
        }

        val users = SimpleCache(userF2FinderService::getRef)
    }
}
