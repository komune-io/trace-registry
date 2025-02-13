package io.komune.registry.s2.asset.api.entity.transaction

import io.komune.registry.s2.asset.domain.automate.AssetTransactionEvent
import io.komune.registry.s2.asset.domain.automate.AssetTransactionId
import io.komune.registry.s2.asset.domain.automate.AssetTransactionState
import io.komune.registry.s2.asset.domain.automate.s2AssetTransaction
import io.komune.registry.s2.asset.domain.command.transaction.TransactionEmittedEvent
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
class AssetTransactionAutomateConfig(
    aggregate: TransactionAutomateExecutor,
    evolver: AssetTransactionEvolver,
    assetTransactionSnapRepository: AssetTransactionSnapRepository,
    private val repository: AssetTransactionRepository
): S2SourcingSpringDataAdapter<
		AssetTransactionEntity,
		AssetTransactionState,
		AssetTransactionEvent,
		AssetTransactionId,
		TransactionAutomateExecutor>(aggregate, evolver, assetTransactionSnapRepository) {
	private val logger = LoggerFactory.getLogger(AssetTransactionAutomateConfig::class.java)

	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		forceReload()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Transaction history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	private fun forceReload() {
		repository.deleteAll()
	}

	override fun automate() = s2AssetTransaction

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(AssetTransactionEvent::class) {
				subclass(TransactionEmittedEvent::class, TransactionEmittedEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<AssetTransactionEvent> = AssetTransactionEvent::class

}

@Service
class TransactionAutomateExecutor: S2AutomateDeciderSpring<
		AssetTransactionEntity, AssetTransactionState, AssetTransactionEvent, AssetTransactionId
	>()
