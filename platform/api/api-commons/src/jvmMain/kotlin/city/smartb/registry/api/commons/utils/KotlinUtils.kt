package city.smartb.registry.api.commons.utils

fun anyNotNull(vararg params: Any?): Boolean = params.any { it != null }
fun anyNull(vararg params: Any?): Boolean = params.any { it == null }

fun <T> intersectNotNullsOrNull(vararg collections: Collection<T>?): Set<T>? {
    return collections.filterNotNull()
        .map { if (it is Set<T>) it else it.toSet() }
        .reduceOrNull(Set<T>::intersect)
}
