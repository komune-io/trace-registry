package io.komune.registry.s2.license.api.entity

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.license.api.LicenseEvolver
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseState
import io.komune.registry.s2.license.domain.command.LicenseEvent
import io.komune.registry.s2.license.domain.s2License
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import kotlin.reflect.KClass

@Configuration
class LicenseAutomateConfig(
    aggregate: LicenseAutomateExecutor,
    evolver: LicenseEvolver,
    projectSnapRepository: LicenseSnapRepository,
): RegistryS2SourcingSpringDataAdapter<LicenseEntity, LicenseState, LicenseEvent, LicenseId, LicenseAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository,
	LicenseEntity::class,
) {
	override fun automate() = s2License
	override fun entityType(): KClass<LicenseEvent> = LicenseEvent::class
}

@Service
class LicenseAutomateExecutor: S2AutomateDeciderSpring<LicenseEntity, LicenseState, LicenseEvent, LicenseId>()
