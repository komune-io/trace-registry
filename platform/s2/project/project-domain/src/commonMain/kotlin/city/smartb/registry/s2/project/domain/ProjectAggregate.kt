package city.smartb.registry.s2.project.domain

import city.smartb.registry.s2.project.domain.command.ProjectAddAssetPoolCommand
import city.smartb.registry.s2.project.domain.command.ProjectAddedAssetPoolEvent
import city.smartb.registry.s2.project.domain.command.ProjectChangePrivacyCommand
import city.smartb.registry.s2.project.domain.command.ProjectChangedPrivacyEvent
import city.smartb.registry.s2.project.domain.command.ProjectCreateCommand
import city.smartb.registry.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.s2.project.domain.command.ProjectDeleteCommand
import city.smartb.registry.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.s2.project.domain.command.ProjectUpdateCommand
import city.smartb.registry.s2.project.domain.command.ProjectUpdatedEvent

interface ProjectAggregate {
	suspend fun create(cmd: ProjectCreateCommand): ProjectCreatedEvent
	suspend fun update(cmd: ProjectUpdateCommand): ProjectUpdatedEvent
	suspend fun delete(cmd: ProjectDeleteCommand): ProjectDeletedEvent
	suspend fun addAssetPool(command: ProjectAddAssetPoolCommand): ProjectAddedAssetPoolEvent
	suspend fun changePrivacy(command: ProjectChangePrivacyCommand): ProjectChangedPrivacyEvent
}
