package city.smartb.registry.program.api.commons.model

sealed interface Match<T> {
    val negative: Boolean

    fun <R> map(transform: (value: T) -> R): Match<R>
    operator fun not(): Match<T>

    infix fun and(match: Match<T>): Match<T> = AndMatch(
        matches = listOf(this, match)
    )

    infix fun or(match: Match<T>): Match<T> = OrMatch(
        matches = listOf(this, match)
    )
}

data class AndMatch<T>(
    val matches: List<Match<T>>,
    override val negative: Boolean = false
): Match<T> {
    override fun <R> map(transform: (value: T) -> R) = AndMatch(
        matches = matches.map { it.map(transform) },
        negative = negative
    )

    override fun not(): Match<T> = copy(
        negative = !negative
    )

    override fun and(match: Match<T>) = copy(
        matches = matches + match
    )
}

data class OrMatch<T>(
    val matches: List<Match<T>>,
    override val negative: Boolean = false
): Match<T> {
    override fun <R> map(transform: (value: T) -> R) = OrMatch(
        matches = matches.map { it.map(transform) },
        negative = negative
    )

    override fun not(): Match<T> = copy(
        negative = !negative
    )

    override fun or(match: Match<T>) = copy(
        matches = matches + match
    )
}

data class ExactMatch<T>(
    val value: T,
    override val negative: Boolean = false
): Match<T> {
    override fun <R> map(transform: (value: T) -> R): Match<R> = ExactMatch(
        value = transform(value),
        negative = negative
    )

    override fun not() = copy(negative = !negative)
}

data class CollectionMatch<T>(
    val values: Collection<T>,
    override val negative: Boolean = false
): Match<T> {
    override fun <R> map(transform: (value: T) -> R): Match<R> = CollectionMatch(
        values = values.map(transform),
        negative = negative
    )

    override fun not() = copy(negative = !negative)
}

data class StringMatch(
    val value: String,
    val condition: StringMatchCondition,
    val caseSensitive: Boolean = false,
    override val negative: Boolean = false
): Match<String> {
    override fun toString() = when (condition) {
        StringMatchCondition.EXACT -> pattern()
        StringMatchCondition.STARTS_WITH -> pattern(suffix = "%")
        StringMatchCondition.ENDS_WITH -> pattern(prefix = "%")
        StringMatchCondition.CONTAINS -> pattern(prefix = "%", suffix = "%")
    }

    private fun pattern(prefix: String = "", suffix: String = "") = "$prefix${value.trim()}$suffix"

    override fun <R> map(transform: (value: String) -> R): Match<R> {
        val newValue = transform(value)

        return if (newValue is String) {
            @Suppress("UNCHECKED_CAST")
            copy(value = newValue) as Match<R>
        } else {
            ExactMatch(
                value = newValue,
                negative = negative
            )
        }
    }

    override fun not() = copy(negative = !negative)
}

enum class StringMatchCondition {
    EXACT, STARTS_WITH, ENDS_WITH, CONTAINS
}

fun <T> collectionMatchOf(vararg values: T) = CollectionMatch(
    values = values.toSet()
)

fun <T> andMatchOf(vararg matches: Match<T>) = AndMatch(
    matches = matches.toList()
)

fun <T> orMatchOf(vararg matches: Match<T>) = OrMatch(
    matches = matches.toList()
)

fun nullableExactMatchOf(value: String) = ExactMatch(
    value = value.takeUnless { it.equals("null", true) }
)
