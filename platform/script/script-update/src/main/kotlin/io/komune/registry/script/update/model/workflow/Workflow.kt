package io.komune.registry.script.update.model.workflow

import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo

@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.PROPERTY,
    property = "type"
)
@JsonSubTypes(
    JsonSubTypes.Type(value = CatalogueBridgeWorkflow::class, name = "CATALOGUE"),
    JsonSubTypes.Type(value = DatasetBridgeWorkflow::class, name = "DATASET"),
    JsonSubTypes.Type(value = DatasetDeleteWorkflow::class, name = "DATASET_DELETE"),
    JsonSubTypes.Type(value = DatasetRenameWorkflow::class, name = "DATASET_RENAME"),
)
sealed interface Workflow {
    val type: WorkflowType
    val data: WorkflowData
    val operations: List<Workflow>
}

sealed interface WorkflowData {
    val source: WorkflowDataSource
}
