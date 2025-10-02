package io.komune.registry.script.update.executor.dataset

import io.komune.registry.script.update.executor.WorkflowExecutor
import io.komune.registry.script.update.model.context.DatasetContextData
import io.komune.registry.script.update.model.workflow.DatasetWorkflow
import io.komune.registry.script.update.provider.DatasetDataProvider
import org.springframework.beans.factory.annotation.Autowired
import kotlin.reflect.KClass

abstract class DatasetWorkflowExecutor<W: DatasetWorkflow>(
    type: KClass<W>
) : WorkflowExecutor<W>(type) {

    @Autowired
    protected lateinit var datasetDataProvider: DatasetDataProvider

    override suspend fun collectData(workflow: W) = DatasetContextData(datasetDataProvider.collect(workflow.data))
}
