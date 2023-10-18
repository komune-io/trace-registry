package city.smartb.registry.f2.dataset.api.service

import city.smartb.registry.f2.dataset.domain.dto.DatasetDTOBase
import city.smartb.registry.f2.dataset.domain.dto.DatasetRefDTOBase
import city.smartb.registry.f2.dataset.domain.query.DatasetGetResult
import city.smartb.registry.f2.dataset.domain.query.DatasetPageResult
import city.smartb.registry.f2.dataset.domain.query.DatasetRefListResult
import city.smartb.registry.program.s2.dataset.api.DatasetFinderService
import city.smartb.registry.s2.dataset.domain.automate.DatasetIdentifier
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import city.smartb.registry.s2.dataset.domain.model.DatasetModel
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import f2.dsl.cqrs.page.OffsetPagination
import org.springframework.stereotype.Service

@Service
class DatasetF2FinderService(
    private val datasetFinderService: DatasetFinderService,
) {

    suspend fun getById(
        id: DatasetIdentifier,
    ): DatasetGetResult {
        val item = datasetFinderService.getOrNull(id)
        return DatasetGetResult(item?.toDTO(datasetFinderService))
    }
    suspend fun getAllRefs(): DatasetRefListResult {
        val items = datasetFinderService.getAll().map { it.toSimpleRefDTO() }
        return DatasetRefListResult(items = items, total = items.size)
    }
    suspend fun getByIdentifier(
        identifier: DatasetIdentifier,
    ): DatasetGetResult? {
        val item = datasetFinderService.getOrNullByIdentifier(identifier)
        return DatasetGetResult(item?.toDTO(datasetFinderService))
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
            items = datasets.items.toDTO(datasetFinderService),
            total = datasets.total
        )
    }
}
