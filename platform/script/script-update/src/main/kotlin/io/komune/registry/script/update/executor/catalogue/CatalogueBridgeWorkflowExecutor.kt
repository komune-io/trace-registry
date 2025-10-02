package io.komune.registry.script.update.executor.catalogue

import io.komune.registry.script.update.executor.WorkflowExecutor
import io.komune.registry.script.update.model.context.CatalogueContextData
import io.komune.registry.script.update.model.context.WorkflowContextData
import io.komune.registry.script.update.model.context.getWorkflowContext
import io.komune.registry.script.update.model.workflow.CatalogueBridgeWorkflow
import io.komune.registry.script.update.provider.CatalogueDataProvider
import org.springframework.stereotype.Service

@Service
class CatalogueBridgeWorkflowExecutor(
    private val catalogueDataProvider: CatalogueDataProvider
) : WorkflowExecutor<CatalogueBridgeWorkflow>(CatalogueBridgeWorkflow::class) {
    override suspend fun collectData(workflow: CatalogueBridgeWorkflow): WorkflowContextData {
        return CatalogueContextData(
            catalogues = catalogueDataProvider.collect(workflow.data)
        )
    }

    override suspend fun doExecute(workflow: CatalogueBridgeWorkflow) {
        val contextData = getWorkflowContext().data as? CatalogueContextData
            ?: error("No catalogue context data found")

        logger.info("Bridge: Found ${contextData.catalogues.size} catalogues")
    }
}
