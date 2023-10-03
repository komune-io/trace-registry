package city.smartb.registry.s2.catalogue.domain

import city.smartb.im.commons.model.OrganizationId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.model.DcatApCatalogue
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface CatalogueFinder {
    suspend fun getOrNull(id: CatalogueId): DcatApCatalogue?
    suspend fun getOrNullByIdentifier(id: CatalogueIdentifier): DcatApCatalogue?
    suspend fun get(id: CatalogueId): DcatApCatalogue
    suspend fun page(
        id: Match<CatalogueId>? = null,
        identifier: Match<CatalogueIdentifier>? = null,
        title: Match<String>? = null,
        status: Match<CatalogueState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<DcatApCatalogue>
}
