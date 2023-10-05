package city.smartb.registry.s2.catalogue.domain

import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.model.CatalogueModel
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface CatalogueFinder {
    suspend fun getOrNull(id: CatalogueId): CatalogueModel?
    suspend fun getOrNullByIdentifier(id: CatalogueIdentifier): CatalogueModel?
    suspend fun get(id: CatalogueId): CatalogueModel
    suspend fun page(
        id: Match<CatalogueId>? = null,
        identifier: Match<CatalogueIdentifier>? = null,
        title: Match<String>? = null,
        status: Match<CatalogueState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueModel>
}
