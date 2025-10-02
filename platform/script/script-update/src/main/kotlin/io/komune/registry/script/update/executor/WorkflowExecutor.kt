package io.komune.registry.script.update.executor

import io.komune.registry.script.update.model.context.WorkflowContext
import io.komune.registry.script.update.model.context.WorkflowContextData
import io.komune.registry.script.update.model.workflow.Workflow
import kotlinx.coroutines.currentCoroutineContext
import kotlinx.coroutines.withContext
import s2.spring.utils.logger.Logger
import kotlin.reflect.KClass

abstract class WorkflowExecutor<W: Workflow>(
    val type: KClass<W>
) {
    protected val logger by Logger()

    init {
        WorkflowExecutorDirectory.register(this)
    }

    suspend fun execute(workflow: W) {
        withWorkflowContext(workflow) {
            doExecute(workflow)
            workflow.operations.forEach { op ->
                @Suppress("UNCHECKED_CAST")
                (WorkflowExecutorDirectory.get(op::class) as WorkflowExecutor<Workflow>).execute(op)
            }
        }
    }

    protected suspend fun <R> withWorkflowContext(workflow: W, block: suspend () -> R): R {
        val parentContext = currentCoroutineContext()[WorkflowContext]
        val data = collectData(workflow)
        return withContext(WorkflowContext(data, parentContext)) { block() }
    }

    protected abstract suspend fun collectData(workflow: W): WorkflowContextData

    protected abstract suspend fun doExecute(workflow: W)
}
