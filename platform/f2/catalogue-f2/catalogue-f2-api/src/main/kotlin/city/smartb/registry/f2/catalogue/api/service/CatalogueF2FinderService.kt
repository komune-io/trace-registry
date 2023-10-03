package city.smartb.registry.f2.catalogue.api.service

import city.smartb.registry.f2.catalogue.domain.query.CataloguePageResult
import city.smartb.registry.program.s2.catalogue.api.CatalogueFinderService
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.model.DcatApCatalogue
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.page.OffsetPagination
import org.springframework.stereotype.Service

@Service
class CatalogueF2FinderService(
    private val catalogueFinderService: CatalogueFinderService,
) {

    suspend fun get(
        identifier: CatalogueIdentifier,
    ): DcatApCatalogue? {
        return   catalogueFinderService.getOrNullByIdentifier(identifier)
    }

    suspend fun page(
        catalogueId: String,
        offset: OffsetPagination? = null
    ): CataloguePageResult {
        val catalogues = catalogueFinderService.page(
            id = catalogueId.let { ExactMatch(it) },
            offset = offset
        )

        return CataloguePageResult(
            items = catalogues.items,
            total = catalogues.total
        )
    }

}
