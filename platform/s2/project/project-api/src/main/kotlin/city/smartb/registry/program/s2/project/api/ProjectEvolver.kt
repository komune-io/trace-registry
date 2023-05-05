package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.infra.redis.toRedisGeoLocation
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.toEntity
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectAddedAssetPoolEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class ProjectEvolver: View<ProjectEvent, ProjectEntity> {

	override suspend fun evolve(event: ProjectEvent, model: ProjectEntity?): ProjectEntity? = when (event) {
		is ProjectCreatedEvent -> create(event)
		is ProjectUpdatedEvent -> model?.update(event)
		is ProjectAddedAssetPoolEvent -> model?.addAssetPool(event)
		else -> TODO()
	}

	private suspend fun create(event: ProjectCreatedEvent) = ProjectEntity().apply {
		id = event.id
		identifier = event.identifier
		status = ProjectState.STAMPED
		name = event.name
		country = event.country
		indicator = event.indicator
		creditingPeriodStartDate = event.creditingPeriodStartDate
		creditingPeriodEndDate = event.creditingPeriodEndDate
		description = event.description
		dueDate = event.dueDate
		estimatedReduction = event.estimatedReduction
		localization = event.localization
		proponent = event.proponent?.toEntity()
		type = event.type
		referenceYear = event.referenceYear
		registrationDate = event.registrationDate
		vintage = event.vintage
		slug = event.slug
		vvb = event.vvb?.toEntity()
		assessor = event.assessor?.toEntity()
		location = event.location?.toRedisGeoLocation(id)
		activities = event.activities
		request = event.certification
		sdgs = event.sdgs
	}

	private fun ProjectEntity.update(event: ProjectUpdatedEvent) = apply {
		status = event.status
		name = event.name
		country = event.country
		indicator = event.indicator
		creditingPeriodStartDate = event.creditingPeriodStartDate
		creditingPeriodEndDate = event.creditingPeriodEndDate
		description = event.description
		dueDate = event.dueDate
		estimatedReduction = event.estimatedReduction
		localization = event.localization
		proponent = event.proponent?.toEntity()
		type = event.type
		referenceYear = event.referenceYear
		registrationDate = event.registrationDate
		vintage = event.vintage
		slug = event.slug
		vvb = event.vvb?.toEntity()
		assessor = event.assessor?.toEntity()
		location = event.location?.toRedisGeoLocation(id)
	}

	private fun ProjectEntity.addAssetPool(event: ProjectAddedAssetPoolEvent) = apply {
		assetPools += event.poolId
	}
}
