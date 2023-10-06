package city.smartb.registry.program.s2.catalogue.api

import city.smartb.registry.program.s2.catalogue.api.config.CatalogueAutomateExecutor
import city.smartb.registry.s2.catalogue.domain.CatalogueAggregate
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkThemesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedThemesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreateCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueDeleteCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkCataloguesCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueUpdateCommand
import city.smartb.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
import java.util.UUID
import org.springframework.stereotype.Service

@Service
class CatalogueAggregateService(
    private val automate: CatalogueAutomateExecutor,
): CatalogueAggregate {

	override suspend fun create(cmd: CatalogueCreateCommand): CatalogueCreatedEvent = automate.init(cmd) {
		CatalogueCreatedEvent(
			id = UUID.randomUUID().toString(),
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			description = cmd.description,
			title = cmd.title,
			catalogues = cmd.catalogues,
			themes = cmd.themes,
			type = cmd.type,
			img = cmd.img,
			homepage = cmd.homepage,
		)
	}

	override suspend fun linkCatalogues(
		cmd: CatalogueLinkCataloguesCommand
	): CatalogueLinkedCataloguesEvent = automate.transition(cmd) {
		CatalogueLinkedCataloguesEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			catalogues = cmd.catalogues
		)
	}

	override suspend fun linkThemes(cmd: CatalogueLinkThemesCommand): CatalogueLinkedThemesEvent = automate.transition(cmd) {
		CatalogueLinkedThemesEvent(
			id =  cmd.id,
			date = System.currentTimeMillis(),
			themes = cmd.themes
		)
	}

	override suspend fun update(cmd: CatalogueUpdateCommand): CatalogueUpdatedEvent = automate.transition(cmd) {
		CatalogueUpdatedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
			identifier = cmd.identifier,
			description = cmd.description,
			title = cmd.title,
			type = cmd.type,
			homepage = cmd.homepage,
			img = cmd.img,
		)
	}

	override suspend fun delete(cmd: CatalogueDeleteCommand): CatalogueDeletedEvent = automate.transition(cmd) {
		CatalogueDeletedEvent(
			id = it.id,
			date = System.currentTimeMillis(),
		)
	}
}
