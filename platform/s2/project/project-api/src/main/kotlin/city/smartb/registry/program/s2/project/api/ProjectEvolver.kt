package city.smartb.registry.program.s2.project.api

import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import city.smartb.registry.program.s2.project.domain.model.Project
import kotlinx.datetime.Clock
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class ProjectEvolver: View<ProjectEvent, Project> {

	override suspend fun evolve(event: ProjectEvent, model: Project?): Project? = when (event) {
		is ProjectCreatedEvent -> create(event)
		is ProjectUpdatedEvent -> model?.update(event)
		else -> model
	}

	private suspend fun create(event: ProjectCreatedEvent) = Project(
		id = event.id,
		status = ProjectState.STAMPED,
		name = event.name,
		country = event.country,
		creditingPeriodStartDate = event.creditingPeriodStartDate,
		creditingPeriodEndDate = event.creditingPeriodEndDate,
		description = event.description,
		dueDate = event.dueDate,
		estimatedReduction = event.estimatedReduction,
		localization = event.localization,
		proponentAccount = event.proponentAccount,
		proponent = event.proponent,
		type = event.type,
		referenceYear = event.referenceYear,
		registrationDate = event.registrationDate,
		vintage = event.vintage,
		slug = event.slug,
		vvb = event.vvb,
		assessor = event.assessor,
		location = event.location,
		creationDate = Clock.System.now().epochSeconds,
		lastModificationDate = Clock.System.now().epochSeconds,
		activities = event.activities,
	)
	private fun Project.update(event: ProjectUpdatedEvent) = copy(
		status = event.status,
		name = event.name,
		country = event.country,
		creditingPeriodStartDate = event.creditingPeriodStartDate,
		creditingPeriodEndDate = event.creditingPeriodEndDate,
		description = event.description,
		dueDate = event.dueDate,
		estimatedReduction = event.estimatedReduction,
		localization = event.localization,
		proponentAccount = event.proponentAccount,
		proponent = event.proponent,
		type = event.type,
		referenceYear = event.referenceYear,
		registrationDate = event.registrationDate,
		vintage = event.vintage,
		slug = event.slug,
		vvb = event.vvb,
		assessor = event.assessor,
		location = event.location,
		creationDate = Clock.System.now().epochSeconds,
		lastModificationDate = Clock.System.now().epochSeconds,
	)

}
