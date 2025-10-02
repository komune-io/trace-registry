package io.komune.registry.script.update.executor.dataset

import io.komune.registry.script.update.model.context.DatasetContextData
import io.komune.registry.script.update.model.context.getWorkflowContext
import io.komune.registry.script.update.model.workflow.DatasetBridgeWorkflow
import org.springframework.stereotype.Service

@Service
class DatasetBridgeWorkflowExecutor : DatasetWorkflowExecutor<DatasetBridgeWorkflow>(DatasetBridgeWorkflow::class) {
    override suspend fun doExecute(workflow: DatasetBridgeWorkflow) {
        val contextData = getWorkflowContext().data as? DatasetContextData
            ?: error("No dataset context data found")

        logger.info("Bridge: Found ${contextData.datasets.size} datasets")
    }
}
