package io.komune.registry.infra.redis

import com.redis.om.spring.search.stream.EntityStream
import io.komune.registry.s2.commons.model.S2SourcingEvent
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
import org.springframework.beans.factory.annotation.Autowired
import redis.clients.jedis.exceptions.JedisDataException
import s2.dsl.automate.S2State
import s2.dsl.automate.model.WithS2Id
import s2.dsl.automate.model.WithS2State
import s2.sourcing.dsl.event.EventRepository
import s2.sourcing.dsl.snap.SnapRepository
import s2.sourcing.dsl.view.View
import s2.sourcing.dsl.view.ViewLoader
import s2.spring.automate.sourcing.S2AutomateDeciderSpring
import s2.spring.sourcing.data.S2SourcingSpringDataAdapter
import s2.spring.utils.logger.Logger
import kotlin.reflect.KClass

@OptIn(ExperimentalSerializationApi::class)
abstract class RegistryS2SourcingSpringDataAdapter<ENTITY, STATE, EVENT, ID, EXECUTOR>(
	aggregate: EXECUTOR,
	evolver: View<EVENT, ENTITY>,
	projectSnapRepository: SnapRepository<ENTITY, ID>,
	private val redisEntityType: KClass<ENTITY>
) : S2SourcingSpringDataAdapter<ENTITY, STATE, EVENT, ID, EXECUTOR>(
	aggregate,
	evolver,
	projectSnapRepository
) where
ID: Any,
STATE: S2State,
ENTITY: WithS2State<STATE>,
ENTITY: WithS2Id<ID>,
EVENT: S2SourcingEvent<ID>,
EXECUTOR : S2AutomateDeciderSpring<ENTITY, STATE, EVENT, ID>
{

	@Autowired
	protected lateinit var entityStream: EntityStream

	protected val logger by Logger()

	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		val entityType = redisEntityType.java
		val count = try {
			entityStream.of(entityType).count()
		} catch (e: JedisDataException) {
			logger.error("Error counting ${entityType.name} stream, ${e.message}")
			0L
		}
		if (count == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay ${entityType.name} history")
					executor.replayHistory()
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			explicitNulls = false
			ignoreUnknownKeys = true
			polymorphic(entityType())
		}
	}

	override fun viewLoader(eventStore: EventRepository<EVENT, ID>): ViewLoader<EVENT, ENTITY, ID> {
		return RgViewLoader(eventStore, view)
	}
}
