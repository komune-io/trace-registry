package io.komune.registry.s2.project.api

import io.komune.registry.infra.redis.toRedisGeoLocation
import io.komune.registry.s2.project.api.entity.ProjectEntity
import io.komune.registry.s2.project.api.entity.toEntity
import io.komune.registry.s2.project.domain.automate.ProjectEvent
import io.komune.registry.s2.project.domain.automate.ProjectState
import io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEvent
import io.komune.registry.s2.project.domain.command.ProjectChangedPrivacyEvent
import io.komune.registry.s2.project.domain.command.ProjectCreatedEvent
import io.komune.registry.s2.project.domain.command.ProjectDeletedEvent
import io.komune.registry.s2.project.domain.command.ProjectUpdatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class ProjectEvolver: View<ProjectEvent, ProjectEntity> {

	override suspend fun evolve(event: ProjectEvent, model: ProjectEntity?): ProjectEntity? = when (event) {
		is ProjectCreatedEvent -> create(event)
		is ProjectUpdatedEvent -> model?.update(event)
		is ProjectAddedAssetPoolEvent -> model?.addAssetPool(event)
		is ProjectChangedPrivacyEvent -> model?.changePrivacy(event)
		is ProjectDeletedEvent -> model?.delete(event)
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
		slug = event.slug
		vvb = event.vvb?.toEntity()
		assessor = event.assessor?.toEntity()
		location = event.location?.toRedisGeoLocation(id)
		activities = event.activities
		certificationId = event.certificationId
		privacy = event.isPrivate ?: true
		createdDate = event.date
		lastModifiedDate = event.date
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
		slug = event.slug
		vvb = event.vvb?.toEntity()
		assessor = event.assessor?.toEntity()
		lastModifiedDate = event.date
		location = event.location?.toRedisGeoLocation(id)
	}

	private fun ProjectEntity.addAssetPool(event: ProjectAddedAssetPoolEvent) = apply {
		assetPools += event.poolId
		lastModifiedDate = event.date
	}

	private fun ProjectEntity.changePrivacy(event: ProjectChangedPrivacyEvent) = apply {
		privacy = event.isPrivate
		lastModifiedDate = event.date
	}

	private fun ProjectEntity.delete(event: ProjectDeletedEvent) = apply {
		status = ProjectState.WITHDRAWN
		lastModifiedDate = event.date
	}

}
