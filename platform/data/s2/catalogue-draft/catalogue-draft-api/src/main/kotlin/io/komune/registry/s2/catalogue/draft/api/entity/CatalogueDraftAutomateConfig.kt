package io.komune.registry.s2.catalogue.draft.api.entity

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftEvolver
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftEvent
import io.komune.registry.s2.catalogue.draft.domain.s2CatalogueDraft
import io.komune.registry.s2.commons.model.CatalogueDraftId
import kotlin.reflect.KClass
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring

@Order(20)
@Configuration
class CatalogueDraftAutomateConfig(
	aggregate: CatalogueDraftAutomateExecutor,
	evolver: CatalogueDraftEvolver,
	projectSnapRepository: CatalogueDraftSnapRepository
): RegistryS2SourcingSpringDataAdapter<
        CatalogueDraftEntity, CatalogueDraftState, CatalogueDraftEvent, CatalogueDraftId, CatalogueDraftAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository,
	CatalogueDraftEntity::class
) {
	override fun automate() = s2CatalogueDraft
	override fun entityType(): KClass<CatalogueDraftEvent> = CatalogueDraftEvent::class
}

@Service
class CatalogueDraftAutomateExecutor
	: S2AutomateDeciderSpring<CatalogueDraftEntity, CatalogueDraftState, CatalogueDraftEvent, CatalogueDraftId>()
