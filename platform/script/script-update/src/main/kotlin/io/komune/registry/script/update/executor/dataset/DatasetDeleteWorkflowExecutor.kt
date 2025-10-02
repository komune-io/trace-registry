package io.komune.registry.script.update.executor.dataset

import cccev.dsl.client.DataClient
import io.komune.registry.f2.dataset.domain.command.DatasetDeleteCommandDTOBase
import io.komune.registry.script.update.model.context.DatasetContextData
import io.komune.registry.script.update.model.context.getWorkflowContext
import io.komune.registry.script.update.model.workflow.DatasetDeleteWorkflow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList
import org.springframework.stereotype.Service

@Service
class DatasetDeleteWorkflowExecutor(
    private val dataClient: DataClient
) : DatasetWorkflowExecutor<DatasetDeleteWorkflow>(DatasetDeleteWorkflow::class) {

    override suspend fun doExecute(workflow: DatasetDeleteWorkflow) {
        val contextData = getWorkflowContext().data as? DatasetContextData
            ?: error("No dataset context data found")

        logger.info("Deleting ${contextData.datasets.size} datasets...")

        val commands = contextData.datasets.map { dataset ->
            DatasetDeleteCommandDTOBase(dataset.id)
        }

        commands.chunked(20).forEach { chunk ->
            dataClient.dataset.datasetDelete().invoke(chunk.asFlow()).toList()
        }

        logger.info("Finished deleting datasets.")
    }
}
