package city.smartb.registry.program.f2.pool.api.service

import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCloseCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolHoldCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolResumeCommandDTOBase
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreateCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHoldCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHeldEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumeCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolClosedEvent
import city.smartb.registry.program.s2.project.api.ProjectAggregateService
import city.smartb.registry.program.s2.project.api.ProjectFinderService
import city.smartb.registry.program.s2.project.domain.command.ProjectAddAssetPoolCommand
import org.springframework.stereotype.Service

@Service
class AssetPoolF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val projectAggregateService: ProjectAggregateService,
    private val projectFinderService: ProjectFinderService
) {
    suspend fun create(command: AssetPoolCreateCommandDTOBase): AssetPoolCreatedEvent {
        val project = projectFinderService.get(command.projectId)

        val event = AssetPoolCreateCommand(
            indicator = project.indicator,
            vintage = command.vintage,
            granularity = command.granularity,
            metadata = mapOf(
                "project" to project.name,
                "project_id" to project.id,
                "certifiedBy" to project.vvb?.name
            )
        ).let { assetPoolAggregateService.create(it) }

        ProjectAddAssetPoolCommand(
            id = project.id,
            poolId = event.id
        ).let { projectAggregateService.addAssetPool(it) }

        return event
    }

    suspend fun hold(command: AssetPoolHoldCommandDTOBase): AssetPoolHeldEvent {
        return assetPoolAggregateService.hold(AssetPoolHoldCommand(command.id))
    }

    suspend fun resume(command: AssetPoolResumeCommandDTOBase): AssetPoolResumedEvent {
        return assetPoolAggregateService.resume(AssetPoolResumeCommand(command.id))
    }

    suspend fun close(command: AssetPoolCloseCommandDTOBase): AssetPoolClosedEvent {
        return assetPoolAggregateService.close(AssetPoolCloseCommand(command.id))
    }
}
