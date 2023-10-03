package city.smartb.registry.program.s2.catalogue.api

import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueEntity
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueEvent
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import org.springframework.stereotype.Service
import s2.sourcing.dsl.view.View

@Service
class CatalogueEvolver: View<CatalogueEvent, CatalogueEntity> {

	override suspend fun evolve(event: CatalogueEvent, model: CatalogueEntity?): CatalogueEntity? = when (event) {
		is CatalogueCreatedEvent -> create(event)
		else -> TODO()
	}

	private suspend fun create(event: CatalogueCreatedEvent) = CatalogueEntity().apply {
		id = event.id
		identifier = event.identifier
		status = CatalogueState.ACTIVE
	}

}
