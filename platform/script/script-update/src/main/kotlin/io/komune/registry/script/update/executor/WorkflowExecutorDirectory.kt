package io.komune.registry.script.update.executor

import io.komune.registry.script.update.model.workflow.Workflow
import kotlin.reflect.KClass

object WorkflowExecutorDirectory {
    private val executors = mutableMapOf<KClass<*>, WorkflowExecutor<*>>()

    @Suppress("UNCHECKED_CAST")
    fun <T: Workflow> get(type: KClass<T>): WorkflowExecutor<T> {
        return executors[type] as WorkflowExecutor<T>?
            ?: throw NoExecutorFoundException(type)
    }

    fun register(executor: WorkflowExecutor<*>) {
        executors[executor.type] = executor
    }
}
