package io.komune.registry.s2.commons.utils

fun <T: Any> T?.isNotNullAnd(block: (T) -> Boolean): Boolean {
    return this != null && block(this)
}

fun <C: Collection<T>, T> C.nullIfEmpty(): C? = takeIf { it.isNotEmpty() }

fun String.truncateLanguage() = substringBefore("-")
