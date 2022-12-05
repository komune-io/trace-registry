package city.smartb.registry.program.bdd.data

import city.smartb.registry.program.bdd.exception.EntityNotInitializedException

class TestEntities<KEY: Any, ITEM>(
    private val type: String
) {
    private val mutableEntities = mutableMapOf<KEY, ITEM?>()

    val items: List<ITEM>
        get() = mutableEntities.values.mapNotNull { it }

    private var lastUsedPair: Pair<KEY, ITEM?>? = null

    val lastUsedKey: KEY
        get() = lastUsedPair?.first ?: throw EntityNotInitializedException("lastUsed", type)

    val lastUsedOrNull: ITEM?
        get() = lastUsedPair?.second

    val lastUsed: ITEM
        get() = lastUsedOrNull ?: throw EntityNotInitializedException("lastUsed", type)

    val size
        get() = items.size

    operator fun get(key: KEY): ITEM? = mutableEntities[key]
        .also { lastUsedPair = key to it }

    fun safeGet(key: KEY): ITEM = get(key) ?: throw EntityNotInitializedException(key.toString(), type)

    fun containsKey(key: KEY): Boolean = mutableEntities.containsKey(key)

    operator fun set(key: KEY, entity: ITEM?) {
        mutableEntities[key] = entity
        lastUsedPair = key to entity
    }

    fun reset() {
        lastUsedPair = null
        mutableEntities.clear()
    }

    inline fun register(key: KEY, block: () -> ITEM?) {
        try {
            set(key, block())
        } catch (e: Exception) {
            set(key, null)
            throw e
        }
    }
}
