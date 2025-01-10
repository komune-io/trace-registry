package io.komune.registry.f2.activity.api.model

import cccev.dsl.model.Certification
import cccev.dsl.model.Requirement
import cccev.dsl.model.RequirementId
import io.komune.registry.f2.activity.domain.model.Activity

suspend fun Collection<Requirement>.toActivities(
    certification: Certification?,
    getRequirement: suspend (RequirementId) -> Requirement
): List<Activity> {
    return distinctBy(Requirement::identifier)
        .map  { it.toActivity(certification, getRequirement) }
        .sortedBy { it.identifier }
}

suspend fun Requirement.toActivity(
    certification: Certification?,
    getRequirement: suspend (RequirementId) -> Requirement
) = Activity(
    identifier = identifier,
    certificationId = certification?.id,
    name = name,
    description = description,
    type = type,
//    hasQualifiedRelation = hasQualifiedRelation.values.flatten().mapNotNull { getRequirement(it).identifier },
    hasQualifiedRelation = emptyList(),
    hasRequirement = hasRequirement?.toActivities(certification, getRequirement) ?: emptyList(),
    progression = 0.0 //certification?.requirementStats?.get(id)?.completion ?: 0.0 // TODO
)
