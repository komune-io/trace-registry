package io.komune.registry.s2.asset.api.entity.pool

import io.komune.registry.s2.asset.domain.automate.AssetPoolEvent
import io.komune.registry.s2.asset.domain.automate.AssetPoolId
import io.komune.registry.s2.asset.domain.automate.AssetPoolState
import io.komune.registry.s2.asset.domain.automate.s2AssetPool
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolClosedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHeldEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import kotlin.reflect.KClass
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import s2.spring.sourcing.data.S2SourcingSpringDataAdapter

@Configuration
class AssetPoolAutomateConfig(
    aggregate: AssetPoolAutomateExecutor,
    evolver: AssetPoolEvolver,
    assetPoolSnapRepository: AssetPoolSnapRepository,
    private val repository: AssetPoolRepository
): S2SourcingSpringDataAdapter<AssetPoolEntity, AssetPoolState, AssetPoolEvent, AssetPoolId, AssetPoolAutomateExecutor>(
	aggregate,
	evolver,
	assetPoolSnapRepository
) {
	private val logger = LoggerFactory.getLogger(AssetPoolAutomateConfig::class.java)

	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
//		forceReload()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay AssetPool history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}


	@Suppress("UnusedPrivateMember")
	private fun forceReload() {
		repository.deleteAll()
	}

	override fun automate() = s2AssetPool

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(AssetPoolEvent::class) {
				subclass(AssetPoolCreatedEvent::class, AssetPoolCreatedEvent.serializer())
				subclass(AssetPoolUpdatedEvent::class, AssetPoolUpdatedEvent.serializer())
				subclass(AssetPoolHeldEvent::class, AssetPoolHeldEvent.serializer())
				subclass(AssetPoolResumedEvent::class, AssetPoolResumedEvent.serializer())
				subclass(AssetPoolClosedEvent::class, AssetPoolClosedEvent.serializer())
				subclass(AssetPoolEmittedTransactionEvent::class, AssetPoolEmittedTransactionEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<AssetPoolEvent> = AssetPoolEvent::class

}

@Service
class AssetPoolAutomateExecutor: S2AutomateDeciderSpring<AssetPoolEntity, AssetPoolState, AssetPoolEvent, AssetPoolId>()
