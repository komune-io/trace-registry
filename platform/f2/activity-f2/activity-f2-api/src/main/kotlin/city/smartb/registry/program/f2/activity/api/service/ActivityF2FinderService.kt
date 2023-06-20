package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import cccev.f2.requirement.domain.model.RequirementDTOBase
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementGetQueryDTOBase
import cccev.f2.requirement.domain.query.RequirementListChildrenByTypeQueryDTOBase
import cccev.s2.certification.domain.model.Certification
import cccev.s2.certification.domain.model.CertificationIdentifier
import cccev.s2.requirement.domain.RequirementId
import city.smartb.registry.program.api.commons.model.SimpleCache
import city.smartb.registry.program.f2.activity.api.model.toActivities
import city.smartb.registry.program.f2.activity.api.model.toActivity
import city.smartb.registry.program.f2.activity.api.model.toStep
import city.smartb.registry.program.f2.activity.domain.model.Activity
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep
import city.smartb.registry.program.f2.activity.domain.model.ActivityStepIdentifier
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageResult
import city.smartb.registry.program.f2.activity.domain.query.ActivityStepPageResult
import city.smartb.registry.program.infra.fs.FsService
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.fnc.invokeWith
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
        certificationIdentifier: CertificationIdentifier?,
    ): Activity? {
        return RequirementGetByIdentifierQueryDTOBase(identifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
            .item
            ?.toActivity(certificationIdentifier)
    }

    suspend fun page(
        projectId: String,
        offset: OffsetPagination? = null
    ): ActivityPageResult {
        val cache = Cache()

        val project = projectFinderService.get(projectId)
        val requirements = project.activities?.let { identifiers ->
            RequirementListChildrenByTypeQueryDTOBase(
                identifiers = identifiers,
                type = "Activity"
            ).invokeWith(cccevClient.requirementClient.requirementListChildrenByType())
        }?.items
            ?.onEach { requirement ->
                cache.requirements.register(requirement.id, requirement)
                requirement.hasRequirement.forEach {
                    cache.requirements.register(it.id, it)
                }
            }

        val activities = requirements?.toActivities(
            certificationIdentifier = project.certification?.identifier,
            cache = cache
        ) ?: emptyList()

        return ActivityPageResult(
            items = activities,
            total = requirements?.size ?: 0
        )
    }

    suspend fun getStep(
        identifier: ActivityStepIdentifier,
        certification: Certification,
    ): ActivityStep? {
        return InformationConceptGetByIdentifierQueryDTOBase(identifier)
            .invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier())
            .item
            ?.toStep(certification, fsService)
    }


    suspend fun pageSteps(
        offset: OffsetPagination? = null,
        certificationIdentifier: CertificationIdentifier,
        activityIdentifier: ActivityIdentifier
    ): ActivityStepPageResult {
        val requirement = RequirementGetByIdentifierQueryDTOBase(activityIdentifier)
            .invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
        val steps = requirement.item
            ?.hasConcept
            ?.toSteps(certificationIdentifier)
            .orEmpty()

        return ActivityStepPageResult(
            items = steps,
            total = steps.size
        )
    }

    private suspend fun Collection<RequirementDTOBase>.toActivities(
        certificationIdentifier: CertificationIdentifier?,
        cache: Cache = Cache()
    ): List<Activity> {
        val certification = certificateService.getOrNull(certificationIdentifier)
        return toActivities(
            certification = certification,
            getRequirement = cache.requirements::get
        )
    }
    private suspend fun RequirementDTOBase.toActivity(
        certificationIdentifier: CertificationIdentifier?,
        cache: Cache = Cache()
    ): Activity {
        val certification = certificateService.getOrNull(certificationIdentifier)
        return toActivity(
            certification = certification,
            getRequirement = cache.requirements::get
        )
    }

    private suspend fun Collection<InformationConceptDTOBase>.toSteps(
        certificationIdentifier: CertificationIdentifier
    ): List<ActivityStep> {
        val certification = certificateService.getOrNull(certificationIdentifier)
        return map { concept ->

            concept.toStep(certification, fsService)
        }.sortedBy { it.identifier }
    }


    private inner class Cache {
        val requirements = SimpleCache<RequirementId, RequirementDTOBase> { requirementId ->
            RequirementGetQueryDTOBase(requirementId)
                .invokeWith(cccevClient.requirementClient.requirementGet())
                .item!!
        }
    }
}
