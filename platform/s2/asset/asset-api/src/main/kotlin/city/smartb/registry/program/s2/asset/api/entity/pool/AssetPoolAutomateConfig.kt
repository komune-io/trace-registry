package city.smartb.registry.program.s2.asset.api.entity.pool

import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolEvent
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolId
import city.smartb.registry.program.s2.asset.domain.automate.AssetPoolState
import city.smartb.registry.program.s2.asset.domain.automate.s2AssetPool
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolClosedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHeldEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolUpdatedEvent
import kotlin.reflect.KClass
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import org.slf4j.LoggerFactory
import org.springframework.context.annotation.Configuration
import org.springframework.stereotype.Service
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import s2.spring.sourcing.ssm.S2SourcingSsmAdapter
import ssm.chaincode.dsl.model.Agent
import ssm.chaincode.dsl.model.uri.ChaincodeUri
import ssm.chaincode.dsl.model.uri.from
import ssm.sdk.sign.extention.loadFromFile

@Configuration
class AssetPoolAutomateConfig(
	aggregate: AssetPoolAutomateExecutor,
	evolver: AssetPoolEvolver,
	assetPoolSnapRepository: AssetPoolSnapRepository,
	private val repository: AssetPoolRepository
): S2SourcingSsmAdapter<AssetPoolEntity, AssetPoolState, AssetPoolEvent, AssetPoolId, AssetPoolAutomateExecutor>(
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
	override fun chaincodeUri(): ChaincodeUri {
		return ChaincodeUri.from(
			channelId = "sandbox",
			chaincodeId = "ssm",
		)
	}

	override fun entityType(): KClass<AssetPoolEvent> = AssetPoolEvent::class

	override fun signerAgent(): Agent {
		return Agent.loadFromFile("ssm-admin","user/ssm-admin")
	}
}

@Service
class AssetPoolAutomateExecutor: S2AutomateDeciderSpring<AssetPoolEntity, AssetPoolState, AssetPoolEvent, AssetPoolId>()
