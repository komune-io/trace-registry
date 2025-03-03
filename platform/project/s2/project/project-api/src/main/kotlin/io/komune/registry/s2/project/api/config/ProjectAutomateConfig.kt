package io.komune.registry.s2.project.api.config

import io.komune.registry.s2.project.api.ProjectEvolver
import io.komune.registry.s2.project.api.entity.ProjectEntity
import io.komune.registry.s2.project.api.entity.ProjectRepository
import io.komune.registry.s2.project.api.entity.ProjectSnapRepository
import io.komune.registry.s2.project.domain.automate.ProjectEvent
import io.komune.registry.s2.project.domain.automate.ProjectState
import io.komune.registry.s2.project.domain.automate.s2Project
import io.komune.registry.s2.project.domain.command.ProjectAddedAssetPoolEvent
import io.komune.registry.s2.project.domain.command.ProjectChangedPrivacyEvent
import io.komune.registry.s2.project.domain.command.ProjectCreatedEvent
import io.komune.registry.s2.project.domain.command.ProjectDeletedEvent
import io.komune.registry.s2.project.domain.command.ProjectUpdatedEvent
import io.komune.registry.s2.project.domain.model.ProjectId
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
class ProjectAutomateConfig(
    aggregate: ProjectAutomateExecutor,
    evolver: ProjectEvolver,
    projectSnapRepository: ProjectSnapRepository,
    private val repository: ProjectRepository
): S2SourcingSpringDataAdapter<ProjectEntity, ProjectState, ProjectEvent, ProjectId, ProjectAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {

	private val logger = LoggerFactory.getLogger(ProjectAutomateConfig::class.java)
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			try {
				runBlocking {
					logger.info("/////////////////////////")
					logger.info("Replay Project history")
					executor.replayHistory()
					logger.info("/////////////////////////")
				}
			} catch (e: Exception) {
				logger.error("Replay history error", e)
			}
		}
	}

	override fun automate() = s2Project

	override fun json(): Json = Json {
		serializersModule = SerializersModule {
			classDiscriminator = "class"
			polymorphic(ProjectEvent::class) {
				subclass(ProjectCreatedEvent::class, ProjectCreatedEvent.serializer())
				subclass(ProjectUpdatedEvent::class, ProjectUpdatedEvent.serializer())
				subclass(ProjectDeletedEvent::class, ProjectDeletedEvent.serializer())
				subclass(ProjectAddedAssetPoolEvent::class, ProjectAddedAssetPoolEvent.serializer())
				subclass(ProjectChangedPrivacyEvent::class, ProjectChangedPrivacyEvent.serializer())
			}
		}
	}

	override fun entityType(): KClass<ProjectEvent> = ProjectEvent::class

}

@Service
class ProjectAutomateExecutor: S2AutomateDeciderSpring<ProjectEntity, ProjectState, ProjectEvent, ProjectId>()
