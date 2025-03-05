package io.komune.registry.s2.license.api.entity

import io.komune.registry.infra.redis.RegistryS2SourcingSpringDataAdapter
import io.komune.registry.s2.license.api.LicenseEvolver
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseState
import io.komune.registry.s2.license.domain.command.LicenseCreatedEvent
import io.komune.registry.s2.license.domain.command.LicenseEvent
import io.komune.registry.s2.license.domain.command.LicenseUpdatedEvent
import io.komune.registry.s2.license.domain.s2License
import kotlin.reflect.KClass
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring

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

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(LicenseEvent::class) {
				subclass(LicenseCreatedEvent::class, LicenseCreatedEvent.serializer())
				subclass(LicenseUpdatedEvent::class, LicenseUpdatedEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<LicenseEvent> = LicenseEvent::class

}

@Service
class LicenseAutomateExecutor: S2AutomateDeciderSpring<LicenseEntity, LicenseState, LicenseEvent, LicenseId>()
