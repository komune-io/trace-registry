package io.komune.registry.f2.activity.api.service

import cccev.dsl.client.CCCEVClient
import cccev.dsl.model.informationRequirement
import io.komune.registry.f2.activity.domain.command.ActivityCreateCommandDTOBase
import io.komune.registry.f2.activity.domain.command.ActivityStepCreateCommandDTOBase
import io.komune.registry.f2.activity.domain.model.ActivityIdentifier
import io.komune.registry.f2.activity.domain.model.RequirementType
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
            this.type = type.identifier
        }
        cccevClient.graphClient.save(flowOf(requirement) ).toList().first()

        return identifier
    }
}
