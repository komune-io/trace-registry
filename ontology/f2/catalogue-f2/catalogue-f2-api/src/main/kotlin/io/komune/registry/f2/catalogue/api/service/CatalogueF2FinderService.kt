package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetResult
import io.komune.registry.f2.catalogue.domain.query.CataloguePageResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefListResult
import io.komune.registry.f2.dataset.api.service.DatasetF2FinderService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueFinderService: CatalogueFinderService,
    private val datasetF2FinderService: DatasetF2FinderService
) {

    suspend fun getById(
        id: CatalogueIdentifier,
    ): CatalogueGetResult {
        val item = catalogueFinderService.getOrNull(id)
        return CatalogueGetResult(item?.toDTO(catalogueFinderService, datasetF2FinderService))
    }
    suspend fun getAllRefs(): CatalogueRefListResult {
        val items = catalogueFinderService.getAll().map { it.toSimpleRefDTO() }
        return CatalogueRefListResult(items = items, total = items.size)
    }
    suspend fun getByIdentifier(
        identifier: CatalogueIdentifier,
    ): CatalogueGetResult? {
        val item = catalogueFinderService.getOrNullByIdentifier(identifier)
        return CatalogueGetResult(item?.toDTO(catalogueFinderService, datasetF2FinderService))
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
            items = catalogues.items.toDTO(catalogueFinderService, datasetF2FinderService),
            total = catalogues.total
        )
    }
}
