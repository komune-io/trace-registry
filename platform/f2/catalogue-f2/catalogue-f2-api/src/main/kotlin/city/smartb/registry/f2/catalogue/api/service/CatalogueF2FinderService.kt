package city.smartb.registry.f2.catalogue.api.service

import city.smartb.registry.f2.catalogue.domain.query.CatalogueGetResult
import city.smartb.registry.f2.catalogue.domain.query.CataloguePageResult
import city.smartb.registry.program.s2.catalogue.api.CatalogueFinderService
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueFinderService: CatalogueFinderService,
) {

    suspend fun getById(
        id: CatalogueIdentifier,
    ): CatalogueGetResult {
        val item = catalogueFinderService.getOrNull(id)
        return CatalogueGetResult(item)
    }
    suspend fun getByIdentifier(
        identifier: CatalogueIdentifier,
    ): CatalogueGetResult? {
        val item = catalogueFinderService.getOrNullByIdentifier(identifier)
        return CatalogueGetResult(item)
    }

    suspend fun page(
        catalogueId: String?,
        title: String?,
        status: String?,
        offset: OffsetPagination? = null
    ): CataloguePageResult {
        val defaultValue = status?.let { CatalogueState.valueOf(it) } ?: CatalogueState.ACTIVE
        val catalogues = catalogueFinderService.page(
            id = catalogueId?.let { ExactMatch(it) },
            title = title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            status = ExactMatch(defaultValue),
            offset = offset
        )
        return CataloguePageResult(
            items = catalogues.items,
            total = catalogues.total
        )
    }

}
