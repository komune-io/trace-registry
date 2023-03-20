package city.smartb.registry.program.s2.project.api.config

import city.smartb.registry.program.s2.project.api.ProjectEvolver
import city.smartb.registry.program.s2.project.api.entity.ProjectRepository
import city.smartb.registry.program.s2.project.api.entity.ProjectSnapRepository
import city.smartb.registry.program.s2.project.domain.automate.ProjectEvent
import city.smartb.registry.program.s2.project.domain.automate.ProjectState
import city.smartb.registry.program.s2.project.domain.automate.s2Project
import city.smartb.registry.program.s2.project.domain.command.ProjectCreatedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectDeletedEvent
import city.smartb.registry.program.s2.project.domain.command.ProjectUpdatedEvent
import city.smartb.registry.program.s2.project.domain.model.Project
import city.smartb.registry.program.s2.project.domain.model.ProjectId
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule
import kotlinx.serialization.modules.polymorphic
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
class ProjectAutomateConfig(
	aggregate: ProjectAutomateExecutor,
	evolver: ProjectEvolver,
	projectSnapRepository: ProjectSnapRepository,
	private val repository: ProjectRepository
): S2SourcingSsmAdapter<Project, ProjectState, ProjectEvent, ProjectId, ProjectAutomateExecutor>(
	aggregate,
	evolver,
	projectSnapRepository
) {
	override fun afterPropertiesSet() {
		super.afterPropertiesSet()
		if (repository.count() == 0L) {
			runBlocking { executor.replayHistory() }
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
			}
		}
	}
	override fun chaincodeUri(): ChaincodeUri {
		return ChaincodeUri.from(
			channelId = "sandbox",
			chaincodeId = "ssm",
		)
	}

	override fun entityType(): KClass<ProjectEvent> = ProjectEvent::class

	override fun signerAgent(): Agent {
		return Agent.loadFromFile("ssm-admin","user/ssm-admin")
	}
}

@Service
class ProjectAutomateExecutor: S2AutomateDeciderSpring<Project, ProjectState, ProjectEvent, ProjectId>()
