package city.smartb.registry.program.s2.asset.api.entity.transaction

import city.smartb.registry.program.s2.asset.domain.automate.TransactionEvent
import city.smartb.registry.program.s2.asset.domain.automate.TransactionId
import city.smartb.registry.program.s2.asset.domain.automate.TransactionState
import city.smartb.registry.program.s2.asset.domain.automate.s2Transaction
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
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
import kotlin.reflect.KClass

@Configuration
class TransactionAutomateConfig(
	aggregate: TransactionAutomateExecutor,
	evolver: TransactionEvolver,
	transactionSnapRepository: TransactionSnapRepository,
	private val repository: TransactionRepository
): S2SourcingSsmAdapter<TransactionEntity, TransactionState, TransactionEvent, TransactionId, TransactionAutomateExecutor>(
	aggregate,
	evolver,
	transactionSnapRepository
) {
	private val logger = LoggerFactory.getLogger(TransactionAutomateConfig::class.java)

	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
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

	override fun automate() = s2Transaction

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(TransactionEvent::class) {
				subclass(TransactionEmittedEvent::class, TransactionEmittedEvent.serializer())
			}
		}
	}
	override fun chaincodeUri(): ChaincodeUri {
		return ChaincodeUri.from(
			channelId = "sandbox",
			chaincodeId = "ssm",
		)
	}

	override fun entityType(): KClass<TransactionEvent> = TransactionEvent::class

	override fun signerAgent(): Agent {
		return Agent.loadFromFile("ssm-admin","user/ssm-admin")
	}
}

@Service
class TransactionAutomateExecutor: S2AutomateDeciderSpring<TransactionEntity, TransactionState, TransactionEvent, TransactionId>()
