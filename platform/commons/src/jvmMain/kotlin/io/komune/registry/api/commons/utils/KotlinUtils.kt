package io.komune.registry.api.commons.utils

import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope

fun anyNotNull(vararg params: Any?): Boolean = params.any { it != null }
fun anyNull(vararg params: Any?): Boolean = params.any { it == null }

fun <T> intersectNotNullsOrNull(vararg collections: Collection<T>?): Set<T>? {
    return collections.filterNotNull()
        .map { if (it is Set<T>) it else it.toSet() }
        .reduceOrNull(Set<T>::intersect)
}

suspend fun <T, R> Collection<T>.mapAsyncDeferred(transform: suspend (T) -> R): List<Deferred<R>> = coroutineScope {
    map {
        async {
            transform(it)
        }
    }
}

suspend fun <T, R> Collection<T>.mapAsync(transform: suspend (T) -> R): List<R> = mapAsyncDeferred(transform).awaitAll()

suspend fun <T, R> Collection<T>.mapAsyncDeferredIndexed(transform: suspend (Int, T) -> R): List<Deferred<R>> = coroutineScope {
    mapIndexed { index, item ->
        async {
            transform(index, item)
        }
    }
}

suspend fun <T, R> Collection<T>.mapAsyncIndexed(transform: suspend (Int, T) -> R): List<R> = mapAsyncDeferredIndexed(transform).awaitAll()

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
