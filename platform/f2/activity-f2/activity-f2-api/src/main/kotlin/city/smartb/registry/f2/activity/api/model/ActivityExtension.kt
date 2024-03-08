package city.smartb.registry.f2.activity.api.model

import cccev.core.certification.entity.Certification
import cccev.f2.requirement.domain.model.RequirementDTO
import cccev.f2.requirement.domain.model.RequirementDTOBase
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
    certificationId = certification?.id,
    name = name,
    description = description,
    type = type,
    hasQualifiedRelation = hasQualifiedRelation.values.flatten().mapNotNull { getRequirement(it).identifier },
    hasRequirement = hasRequirement.toActivities(certification, getRequirement),
    progression = 0.0 //certification?.requirementStats?.get(id)?.completion ?: 0.0 // TODO
)
