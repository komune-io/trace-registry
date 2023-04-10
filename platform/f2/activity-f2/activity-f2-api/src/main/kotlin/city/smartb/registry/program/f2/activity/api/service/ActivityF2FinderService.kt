package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.requirement.domain.model.RequirementDTO
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeResultDTOBase
import city.smartb.registry.program.f2.activity.domain.model.Activity
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageResult
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageResult
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import f2.dsl.cqrs.page.OffsetPagination
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
            ).invokeWith(cccevClient.requirementClient.requirementListChildrenByType())
        }

        val activities = requirements?.items?.mapActivities() ?: emptyList()

        return ActivityPageResult(
            items = activities,
            total = requirements?.items?.size ?: 0
        )
    }
    suspend fun activityGet(
        activityIdentifier: ActivityIdentifier
    ): Activity? {
        return RequirementGetByIdentifierQueryDTOBase(activityIdentifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier()).item?.mapActivity()
    }
    suspend fun stepGet(
        activityIdentifier: ActivityIdentifier
    ): ActivityStep? {
        return RequirementGetByIdentifierQueryDTOBase(activityIdentifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier()).item?.mapStep()
    }

    fun List<RequirementDTO>.mapActivities(): List<Activity> = mapNotNull  { it.mapActivity() }
    fun RequirementDTO.mapActivity(visited: MutableSet<RequirementDTO> = mutableSetOf()): Activity? {
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
            hasRequirement = hasRequirement.mapActivities().toTypedArray(),
            progression = (0..100).random().toDouble(),
        )
    }
    fun RequirementDTO.mapStep(): ActivityStep {
        return ActivityStep(
            id = id,
            identifier = identifier!!,
            name = name,
            description = description,
            value = null,
            file = null,
            completed = listOf(false, true).random(),
            hasConcept = hasConcept.firstOrNull() as InformationConceptDTOBase
        )
    }

    suspend fun stepPage(
        offset: OffsetPagination? = null,
        activityId: String
    ): ActivityStepPageResult {
        val requirements = RequirementListChildrenByTypeQueryDTOBase(
            identifiers = listOf(activityId),
            type = "Steps"
        ).invokeWith(cccevClient.requirementClient.requirementListChildrenByType())
        val steps = requirements.items?.firstOrNull()?.hasRequirement?.map {
            it.mapStep()
        } ?: emptyList()
        return ActivityStepPageResult(
            items = steps,
            total = steps.size
        )
    }

}
