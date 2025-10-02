package io.komune.registry.script.update.model.context

import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import kotlinx.coroutines.currentCoroutineContext
import kotlin.coroutines.CoroutineContext

suspend fun getWorkflowContext(): WorkflowContext = currentCoroutineContext()[WorkflowContext]
    ?: error("No WorkflowContext found in the current coroutine context")

data class WorkflowContext(
    val data: WorkflowContextData,
    val parent: WorkflowContext? = null
): CoroutineContext.Element {
    override val key: CoroutineContext.Key<*> = Key
    companion object Key: CoroutineContext.Key<WorkflowContext>
}

sealed interface WorkflowContextData

data class CatalogueContextData(
    val catalogues: List<CatalogueDTOBase>
) : WorkflowContextData

data class DatasetContextData(
    val datasets: List<DatasetDTOBase>
) : WorkflowContextData
