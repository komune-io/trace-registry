package io.komune.registry.api.commons.model

import java.util.concurrent.ConcurrentHashMap

class SimpleCache<K: Any, V>(
    private val fetch: suspend (key: K) -> V
) {
    private val cache = ConcurrentHashMap<K, CachedValue<V>>()

    suspend fun get(key: K): V {
        return cache.getOrPut(key) { CachedValue(fetch(key)) }.value
    }

    fun register(key: K, value: V) {
        cache[key] = CachedValue(value)
    }

    operator fun contains(key: K): Boolean {
        return cache.containsKey(key)
    }

    // null protection for ConcurrentHashMap which does not allow null values
    private data class CachedValue<V>(val value: V)
}
