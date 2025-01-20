package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.ExactMatch
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
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueFinderService: CatalogueFinderService,
) {

    suspend fun getByIdOrNull(
        id: CatalogueId,
    ): CatalogueDTOBase? {
        return catalogueFinderService.getOrNull(id)?.toDTO(catalogueFinderService)
    }
    suspend fun getAllRefs(): CatalogueRefListResult {
        val items = catalogueFinderService.getAll().map { it.toRefDTO() }
        return CatalogueRefListResult(items = items, total = items.size)
    }

    suspend fun getRefTreeOrNull(identifier: CatalogueIdentifier, language: String): CatalogueRefTreeDTOBase? {
        return catalogueFinderService.getOrNullByIdentifier(identifier, language)?.toRefTreeDTO(catalogueFinderService)
    }

    suspend fun getByIdentifierOrNull(
        identifier: CatalogueIdentifier,
        language: String,
    ): CatalogueDTOBase? {
        return catalogueFinderService.getOrNullByIdentifier(identifier, language)?.toDTO(catalogueFinderService)
    }

    suspend fun page(
        catalogueId: String?,
        parentIdentifier: String?,
        title: String?,
        status: String?,
        offset: OffsetPagination? = null
    ): CataloguePageResult {
        val defaultValue = status?.let { CatalogueState.valueOf(it) } ?: CatalogueState.ACTIVE
        val catalogues = catalogueFinderService.page(
            id = catalogueId?.let { ExactMatch(it) },
            title = title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            parentIdentifier = parentIdentifier?.let { StringMatch(it, StringMatchCondition.EXACT) },
            status = ExactMatch(defaultValue),
            offset = offset
        )
        return CataloguePageResult(
            items = catalogues.items.toDTO(catalogueFinderService),
            total = catalogues.total
        )
    }
}
