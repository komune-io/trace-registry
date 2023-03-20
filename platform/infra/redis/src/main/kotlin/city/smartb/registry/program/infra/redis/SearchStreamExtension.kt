package city.smartb.registry.program.infra.redis

import city.smartb.registry.program.api.commons.model.AndMatch
import city.smartb.registry.program.api.commons.model.CollectionMatch
import city.smartb.registry.program.api.commons.model.ComparableMatch
import city.smartb.registry.program.api.commons.model.ComparableMatchCondition
import city.smartb.registry.program.api.commons.model.ExactMatch
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.api.commons.model.OrMatch
import city.smartb.registry.program.api.commons.model.StringMatch
import city.smartb.registry.program.api.commons.model.StringMatchCondition
import com.redis.om.spring.metamodel.MetamodelField
import com.redis.om.spring.metamodel.indexed.BooleanField
import com.redis.om.spring.metamodel.indexed.NumericField
import com.redis.om.spring.metamodel.indexed.TagField
import com.redis.om.spring.metamodel.indexed.TextField
import com.redis.om.spring.metamodel.indexed.TextTagField
import com.redis.om.spring.search.stream.SearchStream
import java.util.function.Predicate
import java.util.function.Predicate.not

fun <E> SearchStream<E>.match(x: BooleanField<E, Boolean?>, matcher: Match<Boolean?>?): SearchStream<E> {
    return match(x as MetamodelField<E, Boolean?>, matcher)
        ?.let(::filter)
        ?: this
}
fun <E, T: Number?> SearchStream<E>.match(x: NumericField<E, T>, matcher: Match<T>?):SearchStream<E> {
    return match(x as MetamodelField<E, T>, matcher)
        ?.let(::filter)
        ?: this
}
fun <E, T: String?> SearchStream<E>.match(x: TextField<E, T>, matcher: Match<T>?): SearchStream<E> {
    return match(x as MetamodelField<E, T>, matcher)
        ?.let(::filter)
        ?: this
}
fun <E, T: String?> SearchStream<E>.match(x: TextTagField<E, T>, matcher: Match<T>?): SearchStream<E> {
    return match(x as MetamodelField<E, T>, matcher)
        ?.let(::filter)
        ?: this
}

private fun <E, T> match(x: MetamodelField<E, T>, matcher: Match<T>?): Predicate<T>? {
    return when {
        matcher == null -> null
        matcher.negative -> not(match(x, matcher.not()))
        else -> when (matcher) {
            is CollectionMatch -> match(x, matcher)
            is ExactMatch -> match(x, matcher)
            is StringMatch -> match(x as MetamodelField<E, String>, matcher) as Predicate<T>
            is ComparableMatch -> match(x, matcher)
            is AndMatch -> match(x, matcher)
            is OrMatch -> match(x, matcher)
        }
    }
}

private fun <E, T> match(x: MetamodelField<E, T>, matcher: AndMatch<T>): Predicate<T> {
    return matcher.matches.mapNotNull { match(x, it) }
        .reduce { acc, current -> acc.and(current) }
}

private fun <E, T> match(x: MetamodelField<E, T>, matcher: OrMatch<T>): Predicate<T> {
    return matcher.matches.mapNotNull { match(x, it) }
        .reduce { acc, current -> acc.or(current) }
}

private fun <E, T> match(x: MetamodelField<E, T>, matcher: CollectionMatch<T>): Predicate<T> {
    return when {
        matcher.values.any { it == null } -> {
            val notNullValues = matcher.values.filterNotNull()
            if (notNullValues.isEmpty()) {
                x.isNull()
            } else {
                match(x, matcher.copy(values = notNullValues))
                    .or(x.isNull())
            }
        }

        else -> x.inValues(matcher.values)
    }
}

private fun <E, T> match(x: MetamodelField<E, T>, matcher: ExactMatch<T>): Predicate<T> {
    return when (matcher.value) {
        null -> x.isNull()
        else -> x.eq(matcher.value)
    }
}

private fun <E> match(x: MetamodelField<E, String>, matcher: StringMatch): Predicate<String> {
    return when {
        // TODO check case sensitivity in redis
//         !matcher.caseSensitive -> ilike(x, matcher.toString())
        matcher.condition == StringMatchCondition.EXACT -> x.eq(matcher.value)
        else -> when (x) {
            is TextField<E, String> -> when (matcher.condition) {
                StringMatchCondition.EXACT -> x.eq(matcher.value)
                StringMatchCondition.STARTS_WITH -> x.startsWith(matcher.value)
                StringMatchCondition.ENDS_WITH -> x.endsWith(matcher.value)
                StringMatchCondition.CONTAINS -> x.containing(matcher.value)
            }
            is TextTagField<E, String> -> when (matcher.condition) {
                StringMatchCondition.EXACT -> x.eq(matcher.value)
                StringMatchCondition.STARTS_WITH -> x.startsWith(matcher.value)
                StringMatchCondition.ENDS_WITH -> x.endsWith(matcher.value)
                StringMatchCondition.CONTAINS -> throw IllegalArgumentException(
                    "Field [${x.searchAlias}] must be annotated with @Searchable in order to check if it contains a substring"
                )
            }
            else -> throw IllegalArgumentException(
                "Field [${x.searchAlias}] is not a String and therefore cannot be matched with a StringMatch"
            )
        }
    }
}

private fun <E, T> match(x: MetamodelField<E, T>, matcher: ComparableMatch<T>): Predicate<T> {
    if (x !is NumericField<E, T>) {
        throw IllegalArgumentException("Field [${x.searchAlias}] cannot be compared")
    }
    return when (matcher.condition) {
        ComparableMatchCondition.EQ -> x.eq(matcher.value)
        ComparableMatchCondition.GT -> x.gt(matcher.value)
        ComparableMatchCondition.GTE -> x.ge(matcher.value)
        ComparableMatchCondition.LT -> x.lt(matcher.value)
        ComparableMatchCondition.LTE -> x.le(matcher.value)
    }
}

private fun <E, T> MetamodelField<E, T>.isNull() = eq(null)

private fun <E, T> MetamodelField<E, T>.eq(value: T?) = when (this) {
    is TagField<E, T> -> eq(value)
    is NumericField<E, T> -> eq(value)
    is TextField<E, T> -> eq(value)
    else -> throw IllegalArgumentException("Field [$searchAlias] cannot be checked for equality")
}

private fun <E, T> MetamodelField<E, T>.inValues(values: Collection<T>): Predicate<T> = when (this) {
    is TagField<E, T> -> `in`(*values.map { it.toString() }.toTypedArray()) as Predicate<T>
    // cannot create array of `T` because of type erasure
    is NumericField<E, T> -> com.redis.om.spring.search.stream.predicates.numeric.InPredicate<E, T>(
        searchFieldAccessor, values.toList()
    )
    is TextField<E, T> -> com.redis.om.spring.search.stream.predicates.fulltext.InPredicate<E, T>(
        searchFieldAccessor, values.toList()
    )
    else -> throw IllegalArgumentException("Field [$searchAlias] cannot be checked for equality inside a collection")
}
