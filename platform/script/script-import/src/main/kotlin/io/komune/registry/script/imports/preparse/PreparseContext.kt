package io.komune.registry.script.imports.preparse

import io.komune.registry.s2.commons.model.Language
import kotlinx.coroutines.withContext
import java.io.File
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.coroutineContext

internal data class PreparseContext(
    val rootDirectory: File,
    val destinationDirectory: File,
    val cache: PreparseCache,
    val iFile: Int? = null,
    val iCatalogue: Int? = null,
    val language: Language? = null
) : CoroutineContext.Element {
    override val key: CoroutineContext.Key<PreparseContext> = Key
    companion object Key : CoroutineContext.Key<PreparseContext>

}

internal suspend fun getPreparseContext(): PreparseContext {
    return coroutineContext[PreparseContext] ?: error("Preparse context not found")
}

internal suspend fun <R> withPreparseContext(
    rootDirectory: File,
    destinationDirectory: File,
    cache: PreparseCache,
    block: suspend (PreparseContext) -> R
): R {
    val context = PreparseContext(
        rootDirectory = rootDirectory,
        destinationDirectory = destinationDirectory,
        cache = cache
    )
    return withContext(context) { block(context) }
}

internal suspend fun <R> withFileIndex(
    index: Int,
    block: suspend (PreparseContext) -> R
): R = withUpdatedContext(block) {
    copy(iFile = index)
}

internal suspend fun <R> withCatalogueIndex(
    index: Int,
    block: suspend (PreparseContext) -> R
): R = withUpdatedContext(block) {
    copy(iCatalogue = index)
}
internal suspend fun <R> withLanguage(
    language: Language,
    block: suspend (PreparseContext) -> R
): R = withUpdatedContext(block) {
    copy(language = language)
}

private suspend fun <R> withUpdatedContext(
    block: suspend (PreparseContext) -> R,
    update: PreparseContext.() -> PreparseContext,
): R {
    val context = getPreparseContext()
    val newContext = context.update()
    return withContext(newContext) { block(newContext) }
}
