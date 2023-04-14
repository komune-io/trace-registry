package city.smartb.registry.program.f2.activity.api.model

import cccev.f2.requirement.domain.model.RequirementDTO
import cccev.s2.request.domain.model.Request
import city.smartb.registry.program.f2.activity.domain.model.Activity

fun Collection<RequirementDTO>.toActivities(request: Request?): List<Activity> {
    return distinctBy(RequirementDTO::id)
        .map  { it.toActivity(request) }
}

fun RequirementDTO.toActivity(request: Request?) = Activity(
    identifier = identifier ?: "",
    requestId = request?.id,
    name = name,
    description = description,
    type = type,
    hasQualifiedRelation = emptyArray(),
    hasRequirement = hasRequirement.toActivities(request).toTypedArray(),
    progression = request?.requirementStats?.get(id)?.completion ?: 0.0
)
