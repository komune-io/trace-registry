package cccev.projection.api.entity.requirement

import cccev.commons.utils.parseJsonTo
import cccev.projection.api.entity.concept.InformationConceptEntity
import cccev.projection.api.entity.concept.toInformationConcept
import cccev.s2.requirement.domain.model.Requirement

fun RequirementEntity.toRequirement(): Requirement {
    val children = hasQualifiedRelation[RequirementEntity.HAS_REQUIREMENT].orEmpty()
    val relatedRequirements = hasQualifiedRelation.filterKeys { it != RequirementEntity.HAS_REQUIREMENT }

    return Requirement(
        id = id,
        identifier = identifier,
        kind = kind,
        description = description,
        type = type,
        name = name,
        isDerivedFrom = isDerivedFrom.map { it.id },
        hasRequirement = children.map(RequirementEntity::toRequirement),
        hasConcept = hasConcept.map(InformationConceptEntity::toInformationConcept),
        hasEvidenceTypeList = hasEvidenceTypeList.map { it.id },
        isRequirementOf = emptyList(),
        hasQualifiedRelation = relatedRequirements.mapValues { (_, requirement) -> requirement.map { it.id } },
        state = status,
        enablingCondition = enablingCondition,
        enablingConditionDependencies = enablingConditionDependencies.map(InformationConceptEntity::toInformationConcept),
        required = required,
        validatingCondition = validatingCondition,
        validatingConditionDependencies = validatingConditionDependencies.map(InformationConceptEntity::toInformationConcept),
        order = order,
        properties = properties?.parseJsonTo<Map<String, String>>(),
    )
}
