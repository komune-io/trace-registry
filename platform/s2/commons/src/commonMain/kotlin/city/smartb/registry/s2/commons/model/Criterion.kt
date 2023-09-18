package city.smartb.registry.s2.commons.model

import f2.dsl.cqrs.filter.Match

sealed interface Criterion {
    val negative: Boolean

    operator fun not(): Criterion

    infix fun and(criterion: Criterion): Criterion = AndCriterion(
        criteria = listOf(this, criterion)
    )

    infix fun or(criterion: Criterion): Criterion = OrCriterion(
        criteria = listOf(this, criterion)
    )
}

data class FieldCriterion<T>(
    val field: CriterionField<T>,
    val match: Match<T>,
    override val negative: Boolean = false
): Criterion {
    override fun not(): Criterion = copy(
        negative = !negative
    )
}

interface CriterionField<out T>

data class AndCriterion(
    val criteria: List<Criterion>,
    override val negative: Boolean = false
): Criterion {
    override fun not(): Criterion = copy(
        negative = !negative
    )

    override fun and(criterion: Criterion) = copy(
        criteria = criteria + criterion
    )
}

data class OrCriterion(
    val criteria: List<Criterion>,
    override val negative: Boolean = false
): Criterion {
    override fun not(): Criterion = copy(
        negative = !negative
    )

    override fun or(criterion: Criterion) = copy(
        criteria = criteria + criterion
    )
}

fun andCriterionOf(vararg criteria: Criterion) = AndCriterion(
    criteria = criteria.toList()
)

fun orCriterionOf(vararg criteria: Criterion) = OrCriterion(
    criteria = criteria.toList()
)
