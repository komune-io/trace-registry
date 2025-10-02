package io.komune.registry.script.update.provider

import cccev.dsl.client.DataClient
import f2.dsl.fnc.invokeWith
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.query.CataloguePageQuery
import io.komune.registry.script.update.model.workflow.CatalogueWorkflowData
import io.komune.registry.script.update.model.workflow.WorkflowDataSource
import org.springframework.stereotype.Service

@Service
class CatalogueDataProvider(
    private val dataClient: DataClient,
) : DataProvider<CatalogueWorkflowData, List<CatalogueDTOBase>> {

    override suspend fun collect(data: CatalogueWorkflowData): List<CatalogueDTOBase> {
        return when (data.source) {
            WorkflowDataSource.FETCH -> fetchCatalogues(data)
            WorkflowDataSource.PARENT -> TODO()
        }
    }

    private suspend fun fetchCatalogues(data: CatalogueWorkflowData): List<CatalogueDTOBase> {
        return data.languages.flatMap { language ->
            CataloguePageQuery(
                language = language,
                type = data.types,
                limit = Int.MAX_VALUE,
            ).invokeWith(dataClient.catalogue.cataloguePage()).items
        }
    }
}
