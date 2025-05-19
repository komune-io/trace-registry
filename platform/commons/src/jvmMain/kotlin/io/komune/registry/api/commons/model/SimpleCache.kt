package io.komune.registry.api.commons.model

import java.util.concurrent.ConcurrentHashMap

class SimpleCache<K: Any, V>(
    private val fetch: suspend (key: K) -> V
) {
    private val cache = ConcurrentHashMap<K, V>()

    suspend fun get(key: K): V {
        return cache.getOrPut(key) { fetch(key) }
    }

    fun register(key: K, value: V) {
        cache[key] = value
    }

    operator fun contains(key: K): Boolean {
        return cache.containsKey(key)
    }
}
