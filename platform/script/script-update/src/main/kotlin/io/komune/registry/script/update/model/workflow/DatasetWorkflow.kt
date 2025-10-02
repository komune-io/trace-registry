package io.komune.registry.script.update.model.workflow


sealed interface DatasetWorkflow : Workflow {
    override val data: DatasetWorkflowData
}

data class DatasetWorkflowData(
    override val source: WorkflowDataSource,
    val title: String?,
    val types: List<String>?,
) : WorkflowData

data class DatasetBridgeWorkflow(
    override val data: DatasetWorkflowData,
    override val operations: List<Workflow>,
) : DatasetWorkflow {
    override val type: WorkflowType = WorkflowType.DATASET
}

data class DatasetDeleteWorkflow(
    override val data: DatasetWorkflowData,
) : DatasetWorkflow {
    override val type: WorkflowType = WorkflowType.DATASET_DELETE
    override val operations: List<Workflow> = emptyList()
}

data class DatasetRenameWorkflow(
    override val data: DatasetWorkflowData,
    val title: String,
) : DatasetWorkflow {
    override val type: WorkflowType = WorkflowType.DATASET_RENAME
    override val operations: List<Workflow> = emptyList()
}
