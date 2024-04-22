package io.komune.registry.s2.project.api

import cccev.core.certification.command.CertificationCreateCommand
import cccev.core.certification.command.CertificationCreatedEvent
import cccev.dsl.client.CCCEVClient
import io.komune.registry.s2.project.api.config.ProjectAutomateExecutor
import io.komune.registry.s2.project.api.entity.applyCmd
import io.komune.registry.s2.project.domain.ProjectAggregate
import io.komune.registry.s2.project.domain.automate.ProjectState
import io.komune.registry.s2.project.domain.command.ProjectAbstractMsg
import io.komune.registry.s2.project.domain.command.ProjectAddAssetPoolCommand
import io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEvent
import io.komune.registry.s2.project.domain.command.ProjectChangePrivacyCommand
import io.komune.registry.s2.project.domain.command.ProjectChangedPrivacyEvent
import io.komune.registry.s2.project.domain.command.ProjectCreateCommand
import io.komune.registry.s2.project.domain.command.ProjectCreatedEvent
import io.komune.registry.s2.project.domain.command.ProjectDeleteCommand
import io.komune.registry.s2.project.domain.command.ProjectDeletedEvent
import io.komune.registry.s2.project.domain.command.ProjectUpdateCommand
import io.komune.registry.s2.project.domain.command.ProjectUpdatedEvent
import f2.dsl.fnc.invokeWith
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class ProjectAggregateService(
    private val automate: ProjectAutomateExecutor,
    private val cccevClient: CCCEVClient,
): ProjectAggregate {

	override suspend fun create(cmd: ProjectCreateCommand): ProjectCreatedEvent = automate.init(cmd) {
		cmd.checkType()
		ProjectCreatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			name = cmd.name,
			indicator = cmd.indicator,
			isPrivate = cmd.isPrivate
		).applyCmd(cmd)
			.applyCCCEVCertification()
	}

	private fun ProjectAbstractMsg.checkType() {
		check(type != null && type!! > 0 && type!! <= 25) { "Project type is required" }
	}

	private suspend fun ProjectCreatedEvent.applyCCCEVCertification(): ProjectCreatedEvent {
		val requestCreated = createCCCEVCertification()
		return requestCreated?.let { event ->
			copy(certificationId = event.id)
		} ?: this
	}

	private suspend fun ProjectCreatedEvent.createCCCEVCertification(): CertificationCreatedEvent? {
		return activities?.let { activityIdentifiers ->
			CertificationCreateCommand(
				id = identifier ?: id,
				requirementIdentifiers = activityIdentifiers
			).invokeWith(cccevClient.certificationClient.certificationCreate())
		}
	}

	override suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent = automate.transition(cmd) {
		cmd.checkType()
		ProjectUpdatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			status = ProjectState.STAMPED,
			identifier = cmd.identifier,
			name = cmd.name,
			indicator = cmd.indicator
		).applyCmd(cmd)
	}

	override suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent = automate.transition(cmd) {
		ProjectDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}

	override suspend fun addAssetPool(command: ProjectAddAssetPoolCommand) = automate.transition(command) {
		ProjectAddedAssetPoolEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			poolId = command.poolId
		)
	}

	override suspend fun changePrivacy(command: ProjectChangePrivacyCommand) = automate.transition(command) {
		ProjectChangedPrivacyEvent(
			id = command.id,
			date = System.currentTimeMillis(),
			isPrivate = command.isPrivate
		)
	}
}
