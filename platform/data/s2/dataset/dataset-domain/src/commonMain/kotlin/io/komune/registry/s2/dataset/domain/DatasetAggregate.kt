package io.komune.registry.s2.dataset.domain

import io.komune.registry.s2.dataset.domain.command.DatasetAddDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetAddedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetCreateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetCreatedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetDeleteCommand
import io.komune.registry.s2.dataset.domain.command.DatasetDeletedEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkDatasetsCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkThemesCommand
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import io.komune.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import io.komune.registry.s2.dataset.domain.command.DatasetRemoveDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetRemovedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageCommand
import io.komune.registry.s2.dataset.domain.command.DatasetSetImageEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdateDistributionCommand
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedDistributionEvent
import io.komune.registry.s2.dataset.domain.command.DatasetUpdatedEvent

interface DatasetAggregate {
	suspend fun create(cmd: DatasetCreateCommand): DatasetCreatedEvent
	suspend fun setImageCommand(cmd: DatasetSetImageCommand): DatasetSetImageEvent
	suspend fun linkDatasets(cmd: DatasetLinkDatasetsCommand): DatasetLinkedDatasetsEvent
	suspend fun linkThemes(cmd: DatasetLinkThemesCommand): DatasetLinkedThemesEvent
	suspend fun update(cmd: DatasetUpdateCommand): DatasetUpdatedEvent
	suspend fun delete(cmd: DatasetDeleteCommand): DatasetDeletedEvent

	suspend fun addDistribution(cmd: DatasetAddDistributionCommand): DatasetAddedDistributionEvent
	suspend fun updateDistribution(cmd: DatasetUpdateDistributionCommand): DatasetUpdatedDistributionEvent
	suspend fun removeDistribution(cmd: DatasetRemoveDistributionCommand): DatasetRemovedDistributionEvent
}
