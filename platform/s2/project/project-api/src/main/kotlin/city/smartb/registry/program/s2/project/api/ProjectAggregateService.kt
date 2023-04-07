package city.smartb.registry.program.s2.project.api

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.RequirementId
import cccev.f2.requirement.domain.query.RequirementGetByIdentifierQueryDTOBase
import cccev.s2.request.domain.command.RequestCreateCommand
import cccev.s2.request.domain.command.RequestCreatedEventDTO
import cccev.s2.requirement.domain.model.RequirementIdentifier
import city.smartb.registry.program.s2.project.api.config.ProjectAutomateExecutor
import city.smartb.registry.program.s2.project.api.entity.ProjectEntity
import city.smartb.registry.program.s2.project.api.entity.applyCmd
import city.smartb.registry.program.s2.project.domain.ProjectAggregate
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import city.smartb.registry.program.s2.project.domain.command.RequestRef
import f2.dsl.fnc.invokeWith
import java.util.UUID
import kotlinx.coroutines.Deferred
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.flow.flatMapMerge
import kotlinx.coroutines.flow.flow
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.toList
import org.springframework.stereotype.Service

@Service
class ProjectAggregateService(
	private val cccevClient: CCCEVClient,
	private val automate: ProjectAutomateExecutor,
): ProjectAggregate {

	override suspend fun create(cmd: ProjectCreateCommand): ProjectCreatedEvent = automate.init(cmd) {
		ProjectCreatedEvent(
			id = UUID.randomUUID().toString(),
			identifier = cmd.identifier,
			name = cmd.name
		).applyCmd(cmd)
		.applyCCCEVRequest()
	}

	private suspend fun ProjectCreatedEvent.applyCCCEVRequest(): ProjectCreatedEvent {
		val requestCreated = createCCCEVRequest()
		return requestCreated?.id?.let { requestId ->
			copy(request = RequestRef(requestId))
		} ?: this
	}
	private suspend fun ProjectCreatedEvent.createCCCEVRequest(): RequestCreatedEventDTO? {
		return activities?.asFlow()
			?.flatMapMerge { findId(it) }
			?.toList()
			?.takeIf { it.isNotEmpty() }
			?.let { activitiesId ->
				RequestCreateCommand(
					name = name,
					description = description,
					requirements = activitiesId
				).invokeWith(cccevClient.requestClient.requestCreate())
			}
	}

	suspend fun findId(identifier: RequirementIdentifier): Flow<RequirementId> = flow {
		RequirementGetByIdentifierQueryDTOBase(
			identifier = identifier,
		).invokeWith(cccevClient.requirementClient.requirementGetByIdentifier())
			.item?.id?.let { emit(it) }
	}


	override suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent = automate.transition(cmd) {
		ProjectUpdatedEvent(
			id = UUID.randomUUID().toString(),
			status = ProjectState.STAMPED,
			identifier = cmd.identifier,
			name = cmd.name,
		).applyCmd(cmd)
	}

	override suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent = automate.transition(cmd) {
		ProjectDeletedEvent(
			id = it.id,
		)
	}
}
