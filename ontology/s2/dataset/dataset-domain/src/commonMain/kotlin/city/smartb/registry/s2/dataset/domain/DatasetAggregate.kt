package city.smartb.registry.s2.dataset.domain

import city.smartb.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetCreateCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetCreatedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetDeleteCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetDeletedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetSetImageCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetSetImageEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetUpdateCommand
import city.smartb.registry.s2.dataset.domain.command.DatasetUpdatedEvent

interface DatasetAggregate {
	suspend fun create(cmd: DatasetCreateCommand): DatasetCreatedEvent
	suspend fun setImageCommand(cmd: DatasetSetImageCommand): DatasetSetImageEvent
	suspend fun linkDatasets(cmd: DatasetLinkDatasetsCommand): DatasetLinkedDatasetsEvent
	suspend fun linkThemes(cmd: DatasetLinkThemesCommand): DatasetLinkedThemesEvent
	suspend fun update(cmd: DatasetUpdateCommand): DatasetUpdatedEvent
	suspend fun delete(cmd: DatasetDeleteCommand): DatasetDeletedEvent
}
