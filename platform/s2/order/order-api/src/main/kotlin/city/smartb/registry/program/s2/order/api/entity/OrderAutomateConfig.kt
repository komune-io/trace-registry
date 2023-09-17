package city.smartb.registry.program.s2.order.api.entity

import city.smartb.registry.program.s2.order.domain.OrderEvent
import city.smartb.registry.program.s2.order.domain.OrderId
import city.smartb.registry.program.s2.order.domain.OrderState
import city.smartb.registry.program.s2.order.domain.command.OrderCanceledEvent
import city.smartb.registry.program.s2.order.domain.command.OrderCompletedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderDeletedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderPendedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderPlacedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderSubmittedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderUpdatedEvent
import city.smartb.registry.program.s2.order.domain.s2Order
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
class OrderAutomateConfig(
	aggregate: OrderAutomateExecutor,
	evolver: OrderEvolver,
	orderSnapRepository: OrderSnapRepository,
	private val repository: OrderRepository
): S2SourcingSsmAdapter<OrderEntity, OrderState, OrderEvent, OrderId, OrderAutomateExecutor>(
	aggregate,
	evolver,
	orderSnapRepository
) {
	private val logger = LoggerFactory.getLogger(OrderAutomateConfig::class.java)

	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
//		forceReload()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Order history")
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

	override fun automate() = s2Order

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(OrderEvent::class) {
				subclass(OrderPlacedEvent::class, OrderPlacedEvent.serializer())
				subclass(OrderSubmittedEvent::class, OrderSubmittedEvent.serializer())
				subclass(OrderPendedEvent::class, OrderPendedEvent.serializer())
				subclass(OrderUpdatedEvent::class, OrderUpdatedEvent.serializer())
				subclass(OrderCompletedEvent::class, OrderCompletedEvent.serializer())
				subclass(OrderCanceledEvent::class, OrderCanceledEvent.serializer())
				subclass(OrderDeletedEvent::class, OrderDeletedEvent.serializer())
			}
		}
	}
	override fun chaincodeUri(): ChaincodeUri {
		return ChaincodeUri.from(
			channelId = "sandbox",
			chaincodeId = "ssm",
		)
	}

	override fun entityType(): KClass<OrderEvent> = OrderEvent::class

	override fun signerAgent(): Agent {
		return Agent.loadFromFile("ssm-admin","user/ssm-admin")
	}
}

@Service
class OrderAutomateExecutor: S2AutomateDeciderSpring<OrderEntity, OrderState, OrderEvent, OrderId>()
