package cccev.projection.api.entity.concept

import cccev.projection.api.entity.unit.toDataUnit
import cccev.s2.concept.domain.model.InformationConcept

fun InformationConceptEntity.toInformationConcept() = InformationConcept(
    id = id,
    identifier = identifier,
    name = name,
    unit = hasUnit?.toDataUnit(),
    description = description,
    expressionOfExpectedValue = expressionOfExpectedValue,
    dependsOn = dependsOn?.map { it.id }
)
