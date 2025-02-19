package io.komune.registry.s2.catalogue.domain

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier

interface CatalogueFinder {
    suspend fun getOrNull(id: CatalogueId): CatalogueModel?
    suspend fun get(id: CatalogueId): CatalogueModel
    suspend fun getByIdentifierOrNull(identifier: CatalogueIdentifier): CatalogueModel?
    suspend fun getByIdentifier(identifier: CatalogueIdentifier): CatalogueModel
    suspend fun page(
        id: Match<CatalogueId>? = null,
        identifier: Match<CatalogueIdentifier>? = null,
        title: Match<String>? = null,
        parentIdentifier: String? = null,
        language: Match<String>? = null,
        type: Match<String>? = null,
        catalogues: Match<CatalogueId>? = null,
        status: Match<CatalogueState>? = null,
        hidden: Match<Boolean>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<CatalogueModel>

    suspend fun getAll(): List<CatalogueModel>
}
