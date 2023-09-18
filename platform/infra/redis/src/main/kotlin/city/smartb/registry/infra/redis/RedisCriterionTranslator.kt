package city.smartb.registry.infra.redis

import city.smartb.registry.s2.commons.model.AndCriterion
import city.smartb.registry.s2.commons.model.Criterion
import city.smartb.registry.s2.commons.model.CriterionField
import city.smartb.registry.s2.commons.model.FieldCriterion
import city.smartb.registry.s2.commons.model.OrCriterion
import com.redis.om.spring.metamodel.MetamodelField
import com.redis.om.spring.search.stream.SearchStream
import java.util.function.Predicate
import java.util.function.Predicate.not

fun <E> SearchStream<E>.criterion(criterion: Criterion?, getField: (CriterionField<*>) -> MetamodelField<E, *>): SearchStream<E> {
    return computeCriterion(criterion, getField)
        ?.let(::filter)
        ?: this
}

private fun <E> computeCriterion(criterion: Criterion?, getField: (CriterionField<*>) -> MetamodelField<E, *>): Predicate<*>? {
    return when {
        criterion == null -> null
        criterion.negative -> not(computeCriterion(criterion.not(), getField))
        else -> when (criterion) {
            is FieldCriterion<*> -> fieldCriterion(criterion, getField)
            is AndCriterion -> andCriterion(criterion, getField)
            is OrCriterion -> orCriterion(criterion, getField)
        }
    }
}

private fun <E, T> fieldCriterion(criterion: FieldCriterion<T>, getField: (CriterionField<*>) -> MetamodelField<E, *>): Predicate<*>? {
    return match(getField(criterion.field) as MetamodelField<E, T>, criterion.match)
}

private fun <E> andCriterion(criterion: AndCriterion, getField: (CriterionField<*>) -> MetamodelField<E, *>): Predicate<*> {
    return criterion.criteria.mapNotNull { computeCriterion(it, getField) }
        .reduce { acc, current -> acc.and(current as Predicate<in Any?>) }
}

private fun <E> orCriterion(criterion: OrCriterion, getField: (CriterionField<*>) -> MetamodelField<E, *>): Predicate<*> {
    return criterion.criteria.mapNotNull { computeCriterion(it, getField) }
        .reduce { acc, current -> acc.or(current as Predicate<in Any?>) }
}
