package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import cccev.f2.request.domain.query.RequestGetQueryDTOBase
import cccev.f2.requirement.domain.model.RequirementDTO
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeResultDTOBase
import cccev.s2.concept.domain.InformationConceptId
import cccev.s2.request.domain.model.RequestId
import city.smartb.registry.program.f2.activity.domain.model.Activity
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep
import city.smartb.registry.program.f2.activity.domain.model.ActivityStepIdentifier
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageResult
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageResult
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.invoke
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
        val project = projectFinderService.get(projectId)
        val requirements: RequirementListChildrenByTypeResultDTOBase? = project.activities?.let { identifiers ->
            RequirementListChildrenByTypeQueryDTOBase(
                identifiers = identifiers,
                type = "Activity"
            ).invokeWith(cccevClient.requirementClient.requirementListChildrenByType())
        }

        val activities = requirements?.items?.mapActivities(project.request!!.id) ?: emptyList()

        return ActivityPageResult(
            items = activities,
            total = requirements?.items?.size ?: 0
        )
    }
    suspend fun activityGet(
        activityIdentifier: ActivityIdentifier,
        requestId: RequestId?,
    ): Activity? {
        return RequirementGetByIdentifierQueryDTOBase(activityIdentifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier()).item?.mapActivity(requestId = requestId)
    }
    suspend fun stepGet(
        activityStepIdentifier: ActivityStepIdentifier,
        requestId: RequestId,
    ): ActivityStep? {
        val value = getSupportedValues(requestId)[activityStepIdentifier]

        return InformationConceptGetByIdentifierQueryDTOBase(activityStepIdentifier)
            .invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier()).item?.mapStep(value)
    }

    private suspend fun getSupportedValues(
        requestId: RequestId,
    ): Map<InformationConceptId, String?> {
        val request = cccevClient.requestClient.requestGet().invoke(RequestGetQueryDTOBase(requestId))
        return request.item?.supportedValues ?: emptyMap()
    }

    fun List<RequirementDTO>.mapActivities(requestId: RequestId?): List<Activity> = mapNotNull  { it.mapActivity(requestId = requestId) }
    fun RequirementDTO.mapActivity(visited: MutableSet<RequirementDTO> = mutableSetOf(), requestId: RequestId?): Activity? {
        if (visited.contains(this)) {
            return null
        }
        visited.add(this)
        return Activity(
            identifier = identifier ?: "",
            requestId = requestId,
            name = name,
            description = description,
            type = type,
            hasQualifiedRelation = emptyArray(),
            hasRequirement = hasRequirement.mapActivities(requestId).toTypedArray(),
            progression = (0..100).random().toDouble(),
        )
    }
    fun InformationConceptDTOBase.mapStep(value: String?): ActivityStep {
        return ActivityStep(
            id = id,
            identifier = identifier ?: "",
            name = name,
            description = description,
            value = value,
            file = null,
            completed = listOf(false, true).random(),
            hasConcept = this
        )
    }

    suspend fun stepPage(
        offset: OffsetPagination? = null,
        requestId: RequestId,
        activityIdentifier: ActivityIdentifier
    ): ActivityStepPageResult {
        val requirement = RequirementGetByIdentifierQueryDTOBase(activityIdentifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())

        val values = getSupportedValues(requestId)

        val steps = requirement.item?.hasConcept?.map {
            it.mapStep(values[it.id])
        } ?: emptyList()

        return ActivityStepPageResult(
            items = steps,
            total = steps.size
        )
    }

}
