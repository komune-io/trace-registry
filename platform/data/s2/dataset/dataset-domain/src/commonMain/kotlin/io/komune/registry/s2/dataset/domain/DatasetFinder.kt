package io.komune.registry.s2.dataset.domain

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import io.komune.registry.s2.dataset.domain.automate.DatasetId
import io.komune.registry.s2.dataset.domain.automate.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import io.komune.registry.s2.dataset.domain.model.DatasetModel

interface DatasetFinder {
    suspend fun getOrNull(id: DatasetId): DatasetModel?
    suspend fun getOrNullByIdentifier(id: DatasetIdentifier, language: String): DatasetModel?
    suspend fun get(id: DatasetId): DatasetModel
    suspend fun page(
        id: Match<DatasetId>? = null,
        identifier: Match<DatasetIdentifier>? = null,
        title: Match<String>? = null,
        status: Match<DatasetState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<DatasetModel>
    suspend fun listByIdentifier(identifier: String): List<DatasetModel>
    suspend fun getAll(): List<DatasetModel>
}
