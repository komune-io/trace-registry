package io.komune.registry.s2.catalogue.domain

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel

interface CatalogueFinder {
    suspend fun getOrNull(id: CatalogueId): CatalogueModel?
    suspend fun getOrNullByIdentifier(id: CatalogueIdentifier, language: String): CatalogueModel?
    suspend fun get(id: CatalogueId): CatalogueModel
    suspend fun page(
        id: Match<CatalogueId>? = null,
        identifier: Match<CatalogueIdentifier>? = null,
        title: Match<String>? = null,
        parentIdentifier: StringMatch? = null,
        status: Match<CatalogueState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueModel>

    suspend fun getAll(): List<CatalogueModel>
}
