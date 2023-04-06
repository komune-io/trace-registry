package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.informationRequirement
import city.smartb.registry.program.f2.activity.domain.command.ActivityCreateCommand
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepCreateCommand
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.RequirementType
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.collect
import kotlinx.coroutines.flow.flowOf
import org.springframework.stereotype.Service

@Service
class ActivityF2ExecutorService(
    private val cccevClient: CCCEVClient
) {
    suspend fun createActivity(cmd: ActivityCreateCommand): ActivityIdentifier = coroutineScope {
        buildList {
            add(
                async { createActivity(cmd.identifier, cmd.name, cmd.description, RequirementType.Activity) }
            )
            cmd.hasActivity?.forEach {
                add(
                    async {  createActivity(it) }
                )
            }
            cmd.hasStep?.forEach {
                add(
                    async { createActivity(it) }
                )
            }
        }.awaitAll()
        cmd.identifier
    }
    suspend fun createActivity(cmd: ActivityStepCreateCommand): ActivityIdentifier = coroutineScope {
        createActivity(cmd.identifier, cmd.name, cmd.description, RequirementType.Activity)
    }

    private suspend fun createActivity(
        identifier: ActivityIdentifier,
        name: String,
        description: String?,
        type: RequirementType,
    ): ActivityIdentifier {
        val requirement = informationRequirement {
            this.identifier = identifier
            this.name = name
            this.description =   description
            this.type = type
        }
        cccevClient.createGraph( flowOf(requirement) ).collect()
        return identifier
    }
}
