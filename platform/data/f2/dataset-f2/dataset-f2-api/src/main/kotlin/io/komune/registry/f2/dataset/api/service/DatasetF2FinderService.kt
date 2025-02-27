package io.komune.registry.f2.dataset.api.service

import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.f2.dataset.api.model.toDTO
import io.komune.registry.f2.dataset.api.model.toSimpleRefDTO
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetPageResult
import io.komune.registry.f2.dataset.domain.query.DatasetRefListResult
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.dataset.domain.automate.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import org.springframework.stereotype.Service

@Service
class DatasetF2FinderService(
    private val datasetFinderService: DatasetFinderService,
) {

    suspend fun getById(
        id: DatasetIdentifier,
    ): DatasetDTOBase? {
        return datasetFinderService.getOrNull(id)?.toDTO()
    }

    suspend fun getAllRefs(): DatasetRefListResult {
        val items = datasetFinderService.getAll().map { it.toSimpleRefDTO() }
        return DatasetRefListResult(items = items, total = items.size)
    }

    suspend fun getByIdentifier(
        identifier: DatasetIdentifier,
        language: String
    ): DatasetDTOBase? {
        return datasetFinderService.getOrNullByIdentifier(identifier, language)?.toDTO()
    }

    suspend fun page(
        datasetId: String?,
        title: String?,
        status: String?,
        offset: OffsetPagination? = null
    ): DatasetPageResult {
        val defaultValue = status?.let { DatasetState.valueOf(it) } ?: DatasetState.ACTIVE
        val datasets = datasetFinderService.page(
            id = datasetId?.let { ExactMatch(it) },
            title = title?.let { StringMatch(it, StringMatchCondition.CONTAINS) },
            status = ExactMatch(defaultValue),
            offset = offset
        )
        return DatasetPageResult(
            items = datasets.items.map { it.toDTO() },
            total = datasets.total
        )
    }
}
