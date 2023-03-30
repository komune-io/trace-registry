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

        val activities = requirements?.items?.flatten()?.map { requirement ->
            Activity(
                identifier = requirement.identifier!!,
                name = requirement.name,
                description = requirement.description,
                type = requirement.type,
                hasQualifiedRelation = emptyArray(),
                hasRequirement = requirement.hasRequirement.mapNotNull { it.identifier }.toTypedArray(),
            )
        } ?: emptyList()

        return ActivityPageResult(
            items = activities,
            total = requirements?.items?.size ?: 0
        )
    }

    fun List<RequirementDTOBase>.flatten(visited: MutableSet<RequirementDTOBase> = mutableSetOf()): List<RequirementDTOBase> {
        return flatMap { it.flatten(visited) }
    }

    fun RequirementDTOBase.flatten(visited: MutableSet<RequirementDTOBase> = mutableSetOf()): List<RequirementDTOBase> {
        if (visited.contains(this)) {
            return emptyList()
        }
        visited.add(this)
        return listOf(this) + hasRequirement.flatMap { it.flatten(visited) }
    }
    fun RequirementDTOBase.flatten(): List<RequirementDTOBase> {
        val flattened = mutableListOf(this)
        hasRequirement.forEach { flattened.addAll(it.flatten()) }
//        hasQualifiedRelation.forEach { flattened.addAll(it.flatten()) }
        return flattened
    }

    suspend fun stepPage(
        offset: OffsetPagination? = null,
        activityId: String
    ): ActivityStepPageResult {
        val requirements = RequirementListChildrenByTypeQueryDTOBase(
            identifiers = listOf(activityId),
            type = "Steps"
        ).invokeWith(cccevClient.requirement.requirementListChildrenByType())
        val steps = requirements.items?.map {
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
