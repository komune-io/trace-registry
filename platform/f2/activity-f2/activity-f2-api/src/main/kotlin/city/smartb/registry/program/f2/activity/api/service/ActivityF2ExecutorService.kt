package city.smartb.registry.program.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.informationRequirement
import cccev.s2.request.domain.command.RequestCreateCommand
import city.smartb.registry.program.f2.activity.domain.command.ActivityCreateCommandDTOBase
import city.smartb.registry.program.f2.activity.domain.command.ActivityStepCreateCommandDTOBase
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.RequirementType
import f2.dsl.fnc.invokeWith
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.coroutineScope
import kotlinx.coroutines.flow.flowOf
import kotlinx.coroutines.flow.toList
import org.springframework.stereotype.Service

@Service
class ActivityF2ExecutorService(
    private val cccevClient: CCCEVClient
) {
    suspend fun createActivity(cmd: ActivityCreateCommandDTOBase): ActivityIdentifier = coroutineScope {
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
    suspend fun createActivity(cmd: ActivityStepCreateCommandDTOBase): ActivityIdentifier = coroutineScope {
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
            this.description = description
            this.type = type
        }
        val result = cccevClient.createGraph( flowOf(requirement) ).toList().first()

        RequestCreateCommand(
            name = name,
            description = null,
            requirements = listOf(result.id)
        ).invokeWith(cccevClient.requestClient.requestCreate())

        return identifier
    }
}
