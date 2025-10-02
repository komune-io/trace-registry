package io.komune.registry.script.update.executor.dataset

import cccev.dsl.client.DataClient
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateCommandDTOBase
import io.komune.registry.script.update.model.context.DatasetContextData
import io.komune.registry.script.update.model.context.getWorkflowContext
import io.komune.registry.script.update.model.workflow.DatasetRenameWorkflow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.toList
import org.springframework.stereotype.Service

@Service
class DatasetRenameWorkflowExecutor(
    private val dataClient: DataClient
) : DatasetWorkflowExecutor<DatasetRenameWorkflow>(DatasetRenameWorkflow::class) {

    override suspend fun doExecute(workflow: DatasetRenameWorkflow) {
        val contextData = getWorkflowContext().data as? DatasetContextData
            ?: error("No dataset context data found")

        logger.info("Renaming ${contextData.datasets.size} datasets to title='${workflow.title}'...")

        val commands = contextData.datasets.map { dataset ->
            DatasetUpdateCommandDTOBase(
                id = dataset.id,
                title = workflow.title,
                description = dataset.description
            )
        }

        commands.chunked(20).forEach { chunk ->
            dataClient.dataset.datasetUpdate().invoke(chunk.asFlow()).toList()
        }
        logger.info("Finished renaming datasets.")
    }
}
