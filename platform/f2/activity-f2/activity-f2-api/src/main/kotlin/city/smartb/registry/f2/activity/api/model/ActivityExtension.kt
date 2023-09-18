package city.smartb.registry.f2.activity.api.model

import cccev.f2.requirement.domain.model.RequirementDTO
import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.s2.certification.domain.model.Certification
import cccev.s2.requirement.domain.RequirementId
import city.smartb.registry.f2.activity.domain.model.Activity

suspend fun Collection<RequirementDTO>.toActivities(
    certification: Certification?,
    getRequirement: suspend (RequirementId) -> RequirementDTOBase
): List<Activity> {
    return distinctBy(RequirementDTO::id)
        .map  { it.toActivity(certification, getRequirement) }
        .sortedBy { it.identifier }
}

suspend fun RequirementDTO.toActivity(
    certification: Certification?,
    getRequirement: suspend (RequirementId) -> RequirementDTOBase
) = Activity(
    identifier = identifier ?: "",
    certification = certification?.toRef(),
    name = name,
    description = description,
    type = type,
    hasQualifiedRelation = hasQualifiedRelation.values.flatten().mapNotNull { getRequirement(it).identifier },
    hasRequirement = hasRequirement.toActivities(certification, getRequirement),
    progression = certification?.requirementStats?.get(id)?.completion ?: 0.0
)
