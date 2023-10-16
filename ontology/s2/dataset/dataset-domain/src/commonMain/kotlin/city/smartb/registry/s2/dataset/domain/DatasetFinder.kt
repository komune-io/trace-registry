package city.smartb.registry.s2.dataset.domain

import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import city.smartb.registry.s2.dataset.domain.model.DatasetModel
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO

interface DatasetFinder {
    suspend fun getOrNull(id: DatasetId): DatasetModel?
    suspend fun getOrNullByIdentifier(id: DatasetIdentifier): DatasetModel?
    suspend fun get(id: DatasetId): DatasetModel
    suspend fun page(
        id: Match<DatasetId>? = null,
        identifier: Match<DatasetIdentifier>? = null,
        title: Match<String>? = null,
        parentIdentifier: StringMatch? = null,
        status: Match<DatasetState>? = null,
        offset: OffsetPagination? = null,
    ): PageDTO<DatasetModel>

    suspend fun getAll(): List<DatasetModel>
}
