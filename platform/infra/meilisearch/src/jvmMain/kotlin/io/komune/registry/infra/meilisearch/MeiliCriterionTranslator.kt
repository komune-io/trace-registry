package io.komune.registry.infra.meilisearch

import io.komune.registry.api.commons.utils.joinAppend
import io.komune.registry.s2.commons.model.AndCriterion
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.FieldCriterion
import io.komune.registry.s2.commons.model.MeiliSearchField
import io.komune.registry.s2.commons.model.OrCriterion

fun criterion(criterion: Criterion?): String? = criterion?.let {
    StringBuilder().appendCriterion(criterion).toString()
}

private fun StringBuilder.appendCriterion(criterion: Criterion): StringBuilder {
    return when {
        criterion.negative -> appendNot(criterion.not())
        else -> when (criterion) {
            is FieldCriterion<*> -> appendCriterion(criterion)
            is AndCriterion -> appendCriterion(criterion)
            is OrCriterion -> appendCriterion(criterion)
        }
    }
}

private fun StringBuilder.appendNot(criterion: Criterion): StringBuilder = apply {
    append("NOT (")
    appendCriterion(criterion)
    append(")")
}

private fun <T> StringBuilder.appendCriterion(criterion: FieldCriterion<T>): StringBuilder = apply {
    if (criterion.field !is MeiliSearchField) {
        throw IllegalArgumentException("Criterion field ${criterion.field} must be a MeiliSearchField")
    }
    appendMatch(criterion.field as MeiliSearchField, criterion.match)
}

private fun StringBuilder.appendCriterion(criterion: AndCriterion): StringBuilder = joinAppend(
    values = criterion.criteria,
    separator = " AND ",
    prefix = "(",
    postfix = ")",
) {
    appendCriterion(it)
}

private fun StringBuilder.appendCriterion(criterion: OrCriterion): StringBuilder = joinAppend(
    values = criterion.criteria,
    separator = " OR ",
    prefix = "(",
    postfix = ")",
) {
    appendCriterion(it)
}
