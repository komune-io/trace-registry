package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeResultDTOBase
import city.smartb.registry.program.f2.activity.domain.model.Activity
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep
import f2.dsl.cqrs.page.OffsetPagination
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageResult
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageResult
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import f2.dsl.fnc.invokeWith
import org.springframework.stereotype.Service

@Service
class ActivityF2FinderService(
    private val cccevClient: CCCEVClient,
    private val projectFinderService: ProjectFinderService
) {
    suspend fun activityPage(
        offset: OffsetPagination? = null,
        projectId: String
    ): ActivityPageResult {
        val requirements: RequirementListChildrenByTypeResultDTOBase? = projectFinderService.get(projectId).activities?.let { identifiers ->
            RequirementListChildrenByTypeQueryDTOBase(
                identifiers = identifiers,
                type = "Activities"
            ).invokeWith(cccevClient.requirement.requirementListChildrenByType())
        }

        val activities = requirements?.items?.mapNotNull { requirement ->
            requirement.mapActivities()
        } ?: emptyList()

        return ActivityPageResult(
            items = activities,
            total = requirements?.items?.size ?: 0
        )
    }

    fun RequirementDTOBase.mapActivities(visited: MutableSet<RequirementDTOBase> = mutableSetOf()): Activity? {
        if (visited.contains(this)) {
            return null
        }
        visited.add(this)
        return Activity(
            identifier = identifier!!,
            name = name,
            description = description,
            type = type,
            hasQualifiedRelation = emptyArray(),
            hasRequirement = hasRequirement.mapNotNull { it.mapActivities() }.toTypedArray(),
        )
    }

    suspend fun stepPage(
        offset: OffsetPagination? = null,
        activityId: String
    ): ActivityStepPageResult {
        val requirements = RequirementListChildrenByTypeQueryDTOBase(
            identifiers = listOf(activityId),
            type = "Steps"
        ).invokeWith(cccevClient.requirement.requirementListChildrenByType())
        val steps = requirements.items?.firstOrNull()?.hasRequirement?.map {
            ActivityStep(
                identifier = it.identifier!!,
                name = it.name,
                description = it.description,
                value = null,
                file = null
            )
        } ?: emptyList()
        return ActivityStepPageResult(
            items = steps,
            total = steps.size
        )
    }

}
