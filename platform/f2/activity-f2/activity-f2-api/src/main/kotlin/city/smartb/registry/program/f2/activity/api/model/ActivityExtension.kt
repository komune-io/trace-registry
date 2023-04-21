package city.smartb.registry.program.f2.activity.api.model

import cccev.f2.requirement.domain.model.RequirementDTO
import cccev.s2.certification.domain.model.Certification
import city.smartb.registry.program.f2.activity.domain.model.Activity

fun Collection<RequirementDTO>.toActivities(certification: Certification?): List<Activity> {
    return distinctBy(RequirementDTO::id)
        .map  { it.toActivity(certification) }
}

fun RequirementDTO.toActivity(certification: Certification?) = Activity(
    identifier = identifier ?: "",
    certificationId = certification?.id,
    name = name,
    description = description,
    type = type,
    hasQualifiedRelation = emptyArray(),
    hasRequirement = hasRequirement.toActivities(certification).toTypedArray(),
    progression = certification?.requirementStats?.get(id)?.completion ?: 0.0
)
