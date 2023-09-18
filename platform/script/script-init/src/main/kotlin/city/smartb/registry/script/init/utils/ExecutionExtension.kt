package city.smartb.registry.script.init.utils

import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope

suspend inline fun <T, R> List<T>.asyncExecution(
    size: Int = 8,
    crossinline execute: suspend (value: T) -> R
): List<R> = coroutineScope {
    chunked(size).mapIndexed { index, chunk ->
        println("Chunk[$index] size: ${chunk.size}")
        chunk.map {
            async {
                execute(it)
            }
        }.awaitAll()
    }.flatten().toList()
}
