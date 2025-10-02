package io.komune.registry.script.update.provider

import io.komune.registry.script.update.model.workflow.WorkflowData

interface DataProvider<I: WorkflowData, O> {
    suspend fun collect(data: I): O
}
