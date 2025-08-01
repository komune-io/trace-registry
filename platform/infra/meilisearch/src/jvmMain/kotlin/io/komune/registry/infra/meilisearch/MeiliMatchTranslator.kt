package io.komune.registry.infra.meilisearch

import f2.dsl.cqrs.filter.AndMatch
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ComparableMatch
import f2.dsl.cqrs.filter.ComparableMatchCondition
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.OrMatch
import f2.dsl.cqrs.filter.StringMatch
import f2.dsl.cqrs.filter.StringMatchCondition
import io.komune.registry.api.commons.utils.joinAppend
import io.komune.registry.s2.commons.model.MeiliSearchField

fun <T> match(field: MeiliSearchField, matcher: Match<T>?): String? = matcher?.let {
    StringBuilder().appendMatch(field, matcher).toString()
}

internal fun <T> StringBuilder.appendMatch(field: MeiliSearchField, matcher: Match<T>): StringBuilder {
    return when {
        matcher.negative -> appendNot(field, matcher.not())
        else -> when (matcher) {
            is CollectionMatch -> appendMatch(field, matcher)
            is ExactMatch -> appendMatch(field, matcher)
            is StringMatch -> appendMatch(field, matcher)
            is ComparableMatch -> appendMatch(field, matcher)
            is AndMatch -> appendMatch(field, matcher)
            is OrMatch -> appendMatch(field, matcher)
        }
    }
}

private fun <T> StringBuilder.appendNot(field: MeiliSearchField, matcher: Match<T>): StringBuilder = apply {
    append("NOT (")
    appendMatch(field, matcher)
    append(")")
}

private fun <T> StringBuilder.appendMatch(field: MeiliSearchField, matcher: CollectionMatch<T>): StringBuilder = apply {
    append("${field.identifier} IN ")
    joinAppend(
        values = matcher.values,
        separator = ", ",
        prefix = "[",
        postfix = "]",
    ) {
        appendValue(it)
    }
}

private fun <T> StringBuilder.appendMatch(field: MeiliSearchField, matcher: ExactMatch<T>): StringBuilder = apply {
    append("${field.identifier} = ")
    appendValue(matcher.value)
}

private fun StringBuilder.appendMatch(field: MeiliSearchField, matcher: StringMatch): StringBuilder = apply {
    if (matcher.caseSensitive) {
        throw IllegalArgumentException("MeiliSearch does not support case sensitive search")
    }

    val operator = when (matcher.condition) {
        StringMatchCondition.EXACT -> "="
        StringMatchCondition.CONTAINS -> "CONTAINS"
        StringMatchCondition.STARTS_WITH -> "STARTS_WITH"
        StringMatchCondition.ENDS_WITH -> throw IllegalArgumentException("MeiliSearch does not support ENDS_WITH")
    }

    append("${field.identifier} $operator \"${matcher.value}\"")
}

private fun <T> StringBuilder.appendMatch(field: MeiliSearchField, matcher: ComparableMatch<T>): StringBuilder = apply {
    if (matcher.value !is Number) {
        throw IllegalArgumentException("MeiliSearch only supports comparable matches with numbers " +
                "(field: ${field.identifier}, value: ${matcher.value})")
    }

    val operator = when (matcher.condition) {
        ComparableMatchCondition.EQ -> "="
        ComparableMatchCondition.GT -> ">"
        ComparableMatchCondition.GTE -> ">="
        ComparableMatchCondition.LT -> "<"
        ComparableMatchCondition.LTE -> "<="
    }

    append("${field.identifier} $operator ${matcher.value}")
}

private fun <T> StringBuilder.appendMatch(field: MeiliSearchField, matcher: AndMatch<T>): StringBuilder = joinAppend(
    values = matcher.matches,
    separator = " AND ",
    prefix = "(",
    postfix = ")",
    appendValue = { appendMatch(field, it) }
)

private fun <T> StringBuilder.appendMatch(field: MeiliSearchField, matcher: OrMatch<T>): StringBuilder = joinAppend(
    values = matcher.matches,
    separator = " OR ",
    prefix = "(",
    postfix = ")",
    appendValue = { appendMatch(field, it) }
)

private fun StringBuilder.appendValue(value: Any?): StringBuilder = apply {
    return when (value) {
        is String,
        is Enum<*> -> append("\"$value\"")
        else -> append(value)
    }
}
