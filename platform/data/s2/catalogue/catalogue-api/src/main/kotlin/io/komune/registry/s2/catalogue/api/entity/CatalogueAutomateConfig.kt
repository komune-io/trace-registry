package io.komune.registry.s2.catalogue.api.entity

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.catalogue.api.CatalogueEvolver
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.automate.s2Catalogue
import io.komune.registry.s2.catalogue.domain.command.CatalogueEvent
import io.komune.registry.s2.commons.model.CatalogueId
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import kotlin.reflect.KClass

@Order(30)
@Configuration
class CatalogueAutomateConfig(
	aggregate: CatalogueAutomateExecutor,
	evolver: CatalogueEvolver,
	projectSnapRepository: CatalogueSnapRepository
): RegistryS2SourcingSpringDataAdapter<CatalogueEntity, CatalogueState, CatalogueEvent, CatalogueId, CatalogueAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository,
	CatalogueEntity::class
) {
	override fun automate() = s2Catalogue
	override fun entityType(): KClass<CatalogueEvent> = CatalogueEvent::class
}

@Service
class CatalogueAutomateExecutor: S2AutomateDeciderSpring<CatalogueEntity, CatalogueState, CatalogueEvent, CatalogueId>()
