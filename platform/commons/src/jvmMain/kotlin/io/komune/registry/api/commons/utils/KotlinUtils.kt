package io.komune.registry.api.commons.utils

import f2.dsl.fnc.operators.Batch
import f2.dsl.fnc.operators.CHUNK_DEFAULT_SIZE
import f2.dsl.fnc.operators.batch
import f2.dsl.fnc.operators.flattenConcurrently
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.toList

fun anyNotNull(vararg params: Any?): Boolean = params.any { it != null }
fun anyNull(vararg params: Any?): Boolean = params.any { it == null }

fun <T> intersectNotNullsOrNull(vararg collections: Collection<T>?): Set<T>? {
    return collections.filterNotNull()
        .map { if (it is Set<T>) it else it.toSet() }
        .reduceOrNull(Set<T>::intersect)
}

suspend fun <T, R> Iterable<T>.mapAsyncDeferred(transform: suspend (T) -> R): List<Deferred<R>> = coroutineScope {
    map {
        async {
            transform(it)
        }
    }
}

suspend fun <T, R> Iterable<T>.mapAsync(transform: suspend (T) -> R): List<R> = mapAsyncDeferred(transform).awaitAll()

suspend fun <T, R> Iterable<T>.mapAsyncDeferredIndexed(
    chunkItemsNumber: Int, transform: suspend (Int, T) -> R
): List<Deferred<R>> = coroutineScope {
    mapIndexed { index, item ->
        async {
            transform(chunkItemsNumber+index, item)
        }
    }
}

suspend fun <T, R> Iterable<T>.mapAsyncIndexed(transform: suspend (Int, T) -> R): List<R> {
    return asFlow().chunkIndexed(50) { chunkItemsNumber, list  ->
        list.mapAsyncDeferredIndexed(chunkItemsNumber, transform).awaitAll()
    }.flattenConcurrently(1).toList()
}

fun <T, R> Flow<T>.chunkIndexed(
    size: Int = CHUNK_DEFAULT_SIZE,
    fnc: suspend (chunkNumber: Int, t: List<T>) -> List<R>
): Flow<List<R>> = flow {
    val buffer = mutableListOf<T>()
    var chunkNumber = 0
    collect { value ->
        buffer.add(value)
        if (buffer.size == size) {
            emit(fnc((chunkNumber * size), ArrayList(buffer))) // Apply fnc to the chunk and emit the result
            chunkNumber = chunkNumber.inc()
            buffer.clear()
        }
    }
    if (buffer.isNotEmpty()) {
        emit(fnc(chunkNumber, ArrayList(buffer))) // Apply fnc to remaining elements and emit the result
    }
}


suspend fun <T> doWithRetry(retries: Int, block: suspend () -> T): T {
    return try {
        block()
    } catch (e: Throwable) {
        if (retries == 0) {
            throw e
        }
        println("Retrying ($retries left)")
        doWithRetry(retries - 1, block)
    }
}

fun <T> StringBuilder.joinAppend(
    values: Collection<T>,
    separator: CharSequence = ", ",
    prefix: CharSequence = "",
    postfix: CharSequence = "",
    limit: Int = -1,
    truncated: CharSequence = "...",
    appendValue: StringBuilder.(T) -> Unit = { append(it) },
): StringBuilder {
    append(prefix)
    var count = 0
    for (element in values) {
        if (++count > 1) append(separator)
        if (limit < 0 || count <= limit) {
            appendValue(element)
        } else {
            append(truncated)
            break
        }
    }
    append(postfix)
    return this
}
