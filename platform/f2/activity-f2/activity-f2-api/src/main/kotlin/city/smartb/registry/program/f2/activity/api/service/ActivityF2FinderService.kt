package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import cccev.f2.request.domain.query.RequestGetQueryDTOBase
import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeQueryDTOBase
import cccev.s2.request.domain.model.Request
import cccev.s2.request.domain.model.RequestId
import city.smartb.registry.program.f2.activity.api.model.toActivities
import city.smartb.registry.program.f2.activity.api.model.toActivity
import city.smartb.registry.program.f2.activity.api.model.toStep
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
    suspend fun get(
        identifier: ActivityIdentifier,
        requestId: RequestId?,
    ): Activity? {
        return RequirementGetByIdentifierQueryDTOBase(identifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
            .item
            ?.toActivity(requestId)
    }

    suspend fun page(
        projectId: String,
        offset: OffsetPagination? = null
    ): ActivityPageResult {
        val project = projectFinderService.get(projectId)
        val requirements = project.activities?.let { identifiers ->
            RequirementListChildrenByTypeQueryDTOBase(
                identifiers = identifiers,
                type = "Activity"
            ).invokeWith(cccevClient.requirementClient.requirementListChildrenByType())
        }?.items

        val activities = requirements?.toActivities(project.request!!.id) ?: emptyList()

        return ActivityPageResult(
            items = activities,
            total = requirements?.size ?: 0
        )
    }

    suspend fun getStep(
        identifier: ActivityStepIdentifier,
        requestId: RequestId,
    ): ActivityStep? {
        return InformationConceptGetByIdentifierQueryDTOBase(identifier)
            .invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier())
            .item
            ?.toStep(requestId)
    }

    private suspend fun getRequest(id: RequestId): Request? {
        return cccevClient.requestClient.requestGet()
            .invoke(RequestGetQueryDTOBase(id))
            .item
    }

    suspend fun pageSteps(
        offset: OffsetPagination? = null,
        requestId: RequestId,
        activityIdentifier: ActivityIdentifier
    ): ActivityStepPageResult {
        val requirement = RequirementGetByIdentifierQueryDTOBase(activityIdentifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())

        val steps = requirement.item?.hasConcept?.toSteps(requestId) ?: emptyList()

        return ActivityStepPageResult(
            items = steps,
            total = steps.size
        )
    }

    private suspend fun Collection<RequirementDTOBase>.toActivities(requestId: RequestId?): List<Activity> {
        val request = requestId?.let { getRequest(it) }
        return toActivities(request)
    }
    private suspend fun RequirementDTOBase.toActivity(requestId: RequestId?): Activity {
        val request = requestId?.let { getRequest(it) }
        return toActivity(request)
    }

    private suspend fun Collection<InformationConceptDTOBase>.toSteps(requestId: RequestId): List<ActivityStep> {
        val values = getRequest(requestId)?.supportedValues
        return map { concept -> concept.toStep(values?.get(concept.id)) }
    }

    private suspend fun InformationConceptDTOBase.toStepInRequest(requestId: RequestId): ActivityStep {
        val value = getRequest(requestId)?.supportedValues?.get(id)
        return toStep(value)
    }
}
