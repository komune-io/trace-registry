package io.komune.registry.s2.catalogue.domain

import io.komune.registry.s2.catalogue.domain.command.CatalogueAddTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueAddedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkDatasetsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedDatasetsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemoveTranslationsCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueRemovedTranslationsEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueSetImageEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkCataloguesCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUnlinkedCataloguesEvent
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import io.komune.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent

interface CatalogueAggregate {
	suspend fun create(cmd: CatalogueCreateCommand): CatalogueCreatedEvent
	suspend fun setImageCommand(cmd: CatalogueSetImageCommand): CatalogueSetImageEvent
	suspend fun addTranslations(cmd: CatalogueAddTranslationsCommand): CatalogueAddedTranslationsEvent
	suspend fun removeTranslations(cmd: CatalogueRemoveTranslationsCommand): CatalogueRemovedTranslationsEvent
	suspend fun linkCatalogues(cmd: CatalogueLinkCataloguesCommand): CatalogueLinkedCataloguesEvent
	suspend fun unlinkCatalogues(cmd: CatalogueUnlinkCataloguesCommand): CatalogueUnlinkedCataloguesEvent
	suspend fun linkDatasets(cmd: CatalogueLinkDatasetsCommand): CatalogueLinkedDatasetsEvent
	suspend fun linkThemes(cmd: CatalogueLinkThemesCommand): CatalogueLinkedThemesEvent
	suspend fun update(cmd: CatalogueUpdateCommand): CatalogueUpdatedEvent
	suspend fun delete(cmd: CatalogueDeleteCommand): CatalogueDeletedEvent
}
