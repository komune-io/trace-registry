package city.smartb.registry.program.s2.dataset.api.config

import city.smartb.registry.program.s2.dataset.api.DatasetEvolver
import city.smartb.registry.program.s2.dataset.api.entity.DatasetEntity
import city.smartb.registry.program.s2.dataset.api.entity.DatasetRepository
import city.smartb.registry.program.s2.dataset.api.entity.DatasetSnapRepository
import city.smartb.registry.s2.dataset.domain.automate.DatasetId
import city.smartb.registry.s2.dataset.domain.automate.DatasetState
import city.smartb.registry.s2.dataset.domain.automate.s2Dataset
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedThemesEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetLinkedDatasetsEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetCreatedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetDeletedEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetSetImageEvent
import city.smartb.registry.s2.dataset.domain.command.DatasetUpdatedEvent
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
class DatasetAutomateConfig(
	aggregate: DatasetAutomateExecutor,
	evolver: DatasetEvolver,
	projectSnapRepository: DatasetSnapRepository,
	private val repository: DatasetRepository
): S2SourcingSsmAdapter<DatasetEntity, DatasetState, DatasetEvent, DatasetId, DatasetAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {

	private val logger = LoggerFactory.getLogger(DatasetAutomateConfig::class.java)
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Dataset history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun automate() = s2Dataset

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(DatasetEvent::class) {
				subclass(DatasetCreatedEvent::class, DatasetCreatedEvent.serializer())
				subclass(DatasetDeletedEvent::class, DatasetDeletedEvent.serializer())
				subclass(DatasetUpdatedEvent::class, DatasetUpdatedEvent.serializer())
				subclass(DatasetLinkedDatasetsEvent::class, DatasetLinkedDatasetsEvent.serializer())
				subclass(DatasetLinkedThemesEvent::class, DatasetLinkedThemesEvent.serializer())
				subclass(DatasetSetImageEvent::class, DatasetSetImageEvent.serializer())
			}
		}
	}
	override fun chaincodeUri(): ChaincodeUri {
		return ChaincodeUri.from(
			channelId = "sandbox",
			chaincodeId = "ssm",
		)
	}

	override fun entityType(): KClass<DatasetEvent> = DatasetEvent::class

	override fun signerAgent(): Agent {
		return Agent.loadFromFile("ssm-admin","user/ssm-admin")
	}
}

@Service
class DatasetAutomateExecutor: S2AutomateDeciderSpring<DatasetEntity, DatasetState, DatasetEvent, DatasetId>()
