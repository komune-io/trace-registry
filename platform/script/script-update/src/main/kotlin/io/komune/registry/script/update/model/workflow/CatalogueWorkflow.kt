package io.komune.registry.script.update.model.workflow

import io.komune.registry.s2.commons.model.CatalogueType

sealed interface CatalogueWorkflow : Workflow {
    override val data: CatalogueWorkflowData
}

data class CatalogueWorkflowData(
    override val source: WorkflowDataSource,
    val languages: List<String>,
    val types: List<CatalogueType>?,
) : WorkflowData

data class CatalogueBridgeWorkflow(
    override val data: CatalogueWorkflowData,
    override val operations: List<Workflow>,
) : CatalogueWorkflow {
    override val type: WorkflowType = WorkflowType.CATALOGUE
}
