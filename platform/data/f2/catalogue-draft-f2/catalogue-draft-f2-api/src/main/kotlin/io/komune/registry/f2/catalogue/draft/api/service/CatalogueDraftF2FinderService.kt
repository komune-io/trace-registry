package io.komune.registry.f2.catalogue.draft.api.service

import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.draft.api.model.toDTO
import io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTOBase
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CatalogueDraftF2FinderService(
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueF2FinderService: CatalogueF2FinderService
) {
    suspend fun getOrNull(id: CatalogueDraftId): CatalogueDraftDTOBase? {
        return catalogueDraftFinderService.getOrNull(id)?.toDTOCached()
    }

    private suspend fun CatalogueDraftModel.toDTOCached(cache: Cache = Cache()) = toDTO(
        getCatalogue = { id, language -> cache.catalogues.get(id to language) }
    )

    private inner class Cache {
        val catalogues = SimpleCache<Pair<CatalogueId, Language>, CatalogueDTOBase> { (id, language) ->
            catalogueF2FinderService.get(id, language)
        }
    }
}
