package io.komune.registry.s2.project.domain

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

interface ProjectAggregate {
	suspend fun create(cmd: ProjectCreateCommand): ProjectCreatedEvent
	suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent
	suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent
	suspend fun addAssetPool(command: ProjectAddAssetPoolCommand): ProjectAddedAssetPoolEvent
	suspend fun changePrivacy(command: ProjectChangePrivacyCommand): ProjectChangedPrivacyEvent
}
