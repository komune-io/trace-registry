package io.komune.registry.script.update.provider

import cccev.dsl.client.DataClient
import f2.dsl.fnc.invokeWith
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetPageQuery
import io.komune.registry.script.update.model.context.CatalogueContextData
import io.komune.registry.script.update.model.context.DatasetContextData
import io.komune.registry.script.update.model.context.getWorkflowContext
import io.komune.registry.script.update.model.workflow.DatasetWorkflowData
import io.komune.registry.script.update.model.workflow.WorkflowDataSource
import org.springframework.stereotype.Service

@Service
class DatasetDataProvider(
    private val dataClient: DataClient,
) : DataProvider<DatasetWorkflowData, List<DatasetDTOBase>> {

    override suspend fun collect(data: DatasetWorkflowData): List<DatasetDTOBase> {
        return when (data.source) {
            WorkflowDataSource.FETCH -> fetchDatasets(data)
            WorkflowDataSource.PARENT -> collectFromParent(data)
        }
    }

    private suspend fun fetchDatasets(data: DatasetWorkflowData): List<DatasetDTOBase> {
        return DatasetPageQuery(
            type = data.types,
            limit = Int.MAX_VALUE,
        ).invokeWith(dataClient.dataset.datasetPage()).items
    }

    private suspend fun collectFromParent(data: DatasetWorkflowData): List<DatasetDTOBase> {
        val context = getWorkflowContext()

        val sourceDatasets = when (context.data) {
            is DatasetContextData -> context.data.datasets
            is CatalogueContextData -> context.data.catalogues.flatMap { it.datasets }
        }

        return sourceDatasets.asSequence()
            .filter { data.types == null || it.type in data.types }
            .filter { data.title == null || data.title == it.title }
            .toList()
    }
}
