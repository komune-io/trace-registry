package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.catalogue.domain.query.CataloguePageResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListResult
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueFinderService: CatalogueFinderService,
    private val catalogueI18nService: CatalogueI18nService
) {

    suspend fun getOrNull(
        id: CatalogueId,
        language: Language
    ): CatalogueDTOBase? {
        return catalogueFinderService.getOrNull(id)
            ?.let { catalogueI18nService.translateToDTO(it, language, false) }
    }

    suspend fun getByIdentifierOrNull(
        identifier: CatalogueIdentifier,
        language: Language,
    ): CatalogueDTOBase? {
        return catalogueFinderService.getByIdentifierOrNull(identifier, language)
            ?.let { catalogueI18nService.translateToDTO(it, language, false) }
    }

    suspend fun getAllRefs(language: Language): CatalogueRefListResult {
        val items = catalogueFinderService.getAll().mapNotNull {
            catalogueI18nService.translateToRefDTO(it, language, true)
        }
        return CatalogueRefListResult(items = items, total = items.size)
    }

    suspend fun getRefTreeByIdentifierOrNull(identifier: CatalogueIdentifier, language: String): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getByIdentifierOrNull(identifier, language)
            ?.let { catalogueI18nService.translateToRefTreeDTO(it, language, true) }
    }

    suspend fun page(
        catalogueId: String?,
        parentIdentifier: String?,
        language: String,
        title: String?,
        type: Match<String>?,
        status: String?,
        hidden: Match<Boolean>? = null,
        offset: OffsetPagination? = null
    ): CataloguePageResult {
        val defaultValue = status?.let { CatalogueState.valueOf(it) } ?: CatalogueState.ACTIVE
        val catalogues = catalogueFinderService.page(
            id = catalogueId?.let { ExactMatch(it) },
            title = title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            parentIdentifier = parentIdentifier,
            language = language,
            type = type,
            status = ExactMatch(defaultValue),
            hidden = hidden,
            offset = offset
        )

        return CataloguePageResult(
            items = catalogues.items.mapNotNull { catalogueI18nService.translateToDTO(it, language, true) },
            total = catalogues.total
        )
    }

    private suspend fun CatalogueModel.toDTOCached(cache: Cache = Cache()) = toDTO(
        getCatalogue = cache.catalogues::get,
        getDataset = cache.datasets::get
    )

    private inner class Cache {
        val catalogues = SimpleCache(catalogueFinderService::get)
        val datasets = SimpleCache(datasetFinderService::get)
    }
}
