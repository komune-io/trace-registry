package io.komune.registry.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.client.model.unflatten
import cccev.dsl.model.Certification
import cccev.dsl.model.CertificationId
import cccev.dsl.model.InformationConcept
import cccev.dsl.model.InformationConceptDTO
import cccev.dsl.model.Requirement
import cccev.dsl.model.RequirementId
import cccev.f2.concept.query.InformationConceptGetByIdentifierQuery
import cccev.f2.requirement.query.RequirementGetByIdentifierQuery
import cccev.f2.requirement.query.RequirementGetQuery
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.invokeWith
import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.f2.activity.api.model.toActivities
import io.komune.registry.f2.activity.api.model.toActivity
import io.komune.registry.f2.activity.api.model.toStep
import io.komune.registry.f2.activity.domain.model.Activity
import io.komune.registry.f2.activity.domain.model.ActivityIdentifier
import io.komune.registry.f2.activity.domain.model.ActivityStep
import io.komune.registry.f2.activity.domain.model.ActivityStepIdentifier
import io.komune.registry.f2.activity.domain.query.ActivityPageResult
import io.komune.registry.f2.activity.domain.query.ActivityStepPageResult
import io.komune.registry.infra.fs.FsService
import io.komune.registry.s2.project.api.ProjectFinderService
import org.springframework.stereotype.Service

@Service
class ActivityF2FinderService(
    private val certificateService: CertificateService,
    private val cccevClient: CCCEVClient,
    private val projectFinderService: ProjectFinderService,
    private val fsService: FsService,
) {

    suspend fun get(
        identifier: ActivityIdentifier,
        certificationId: CertificationId?,
    ): Activity? {
        return RequirementGetByIdentifierQuery(identifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
            .unflatten()
            .toActivity(certificationId)
    }

    suspend fun page(
        projectId: String,
        offset: OffsetPagination? = null
    ): ActivityPageResult {
        val cache = Cache()

        val project = projectFinderService.get(projectId)

        val requirements = project.activities?.map { identifier ->
            RequirementGetByIdentifierQuery(
                identifier = identifier
            ).invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
                .unflatten()
        }
            ?.onEach { requirement ->
                cache.requirements.register(requirement.id, requirement)
                requirement.hasRequirement?.forEach {
                    cache.requirements.register(it.id, it)
                }
            }

        val activities = requirements?.toActivities(
            certificationId = project.certificationId,
            cache = cache
        ) ?: emptyList()

        return ActivityPageResult(
            items = activities,
            total = requirements?.size ?: 0
        )
    }

    suspend fun getStep(
        identifier: ActivityStepIdentifier,
        certification: Certification?,
    ): ActivityStep? {
        return InformationConceptGetByIdentifierQuery(identifier)
            .invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier())
            .unflatten()
            .toStep(certification, fsService)
    }


    suspend fun pageSteps(
        offset: OffsetPagination? = null,
        certificationId: CertificationId,
        activityIdentifier: ActivityIdentifier
    ): ActivityStepPageResult {
        val requirement = RequirementGetByIdentifierQuery(activityIdentifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
        val steps = requirement.unflatten()
            .hasConcept
            ?.toSteps(certificationId)
            .orEmpty()

        return ActivityStepPageResult(
            items = steps,
            total = steps.size
        )
    }

    private suspend fun Collection<Requirement>.toActivities(
        certificationId: CertificationId?,
        cache: Cache = Cache()
    ): List<Activity> {
        val certification = certificationId?.let { certificateService.getOrNull(it) }
        return toActivities(
            certification = certification,
            getRequirement = cache.requirements::get
        )
    }
    private suspend fun Requirement.toActivity(
        certificationId: CertificationId?,
        cache: Cache = Cache()
    ): Activity {
        val certification = certificationId?.let { certificateService.getOrNull(it) }
        return toActivity(
            certification = certification,
            getRequirement = cache.requirements::get
        )
    }

    private suspend fun List<InformationConceptDTO>.toSteps(
        certificationId: CertificationId
    ): List<ActivityStep> {
        val certification = certificateService.get(certificationId)
        return map { concept ->
            concept.toStep(certification, fsService)
        }.sortedBy { it.identifier }
    }


    private inner class Cache {
        val requirements = SimpleCache<RequirementId, Requirement> { requirementId ->
            RequirementGetQuery(requirementId)
                .invokeWith(cccevClient.requirementClient.requirementGet())
                .unflatten()
        }
    }
}
