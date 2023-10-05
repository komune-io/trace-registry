package city.smartb.registry.program.s2.catalogue.api.config

import city.smartb.registry.program.s2.catalogue.api.CatalogueEvolver
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueEntity
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueRepository
import city.smartb.registry.program.s2.catalogue.api.entity.CatalogueSnapRepository
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueId
import city.smartb.registry.s2.catalogue.domain.automate.CatalogueState
import city.smartb.registry.s2.catalogue.domain.automate.s2Catalogue
import city.smartb.registry.s2.catalogue.domain.command.CatalogueAddedThemesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueLinkedCataloguesEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueCreatedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueDeletedEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueEvent
import city.smartb.registry.s2.catalogue.domain.command.CatalogueUpdatedEvent
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
class CatalogueAutomateConfig(
	aggregate: CatalogueAutomateExecutor,
	evolver: CatalogueEvolver,
	projectSnapRepository: CatalogueSnapRepository,
	private val repository: CatalogueRepository
): S2SourcingSsmAdapter<CatalogueEntity, CatalogueState, CatalogueEvent, CatalogueId, CatalogueAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {

	private val logger = LoggerFactory.getLogger(CatalogueAutomateConfig::class.java)
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Catalogue history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun automate() = s2Catalogue

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(CatalogueEvent::class) {
				subclass(CatalogueCreatedEvent::class, CatalogueCreatedEvent.serializer())
				subclass(CatalogueDeletedEvent::class, CatalogueDeletedEvent.serializer())
				subclass(CatalogueUpdatedEvent::class, CatalogueUpdatedEvent.serializer())
				subclass(CatalogueLinkedCataloguesEvent::class, CatalogueLinkedCataloguesEvent.serializer())
				subclass(CatalogueAddedThemesEvent::class, CatalogueAddedThemesEvent.serializer())
			}
		}
	}
	override fun chaincodeUri(): ChaincodeUri {
		return ChaincodeUri.from(
			channelId = "sandbox",
			chaincodeId = "ssm",
		)
	}

	override fun entityType(): KClass<CatalogueEvent> = CatalogueEvent::class

	override fun signerAgent(): Agent {
		return Agent.loadFromFile("ssm-admin","user/ssm-admin")
	}
}

@Service
class CatalogueAutomateExecutor: S2AutomateDeciderSpring<CatalogueEntity, CatalogueState, CatalogueEvent, CatalogueId>()
