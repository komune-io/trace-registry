package city.smartb.registry.program.f2.pool.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import ch.qos.logback.core.model.processor.PhaseIndicator
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
import f2.dsl.fnc.invokeWith
import org.springframework.stereotype.Service

@Service
class AssetPoolF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val cccevClient: CCCEVClient
) {
    suspend fun create(command: AssetPoolCreateCommandDTOBase): AssetPoolCreatedEvent {
        val indicator = findCoeIndicateur(command.indicator)!!
        val event = AssetPoolCreateCommand(
            indicator = indicator.identifier!!,
            vintage = command.vintage,
            granularity = command.granularity,
            metadata = emptyMap()
//            metadata = mapOf(
//                "project" to project.name,
//                "project_id" to project.id,
//                "certifiedBy" to project.vvb?.name
//            )
        ).let { assetPoolAggregateService.create(it) }


        // TODO Create endpoint ProjectAddAssetPool to do that
//        ProjectAddAssetPoolCommand(
//            id = project.id,
//            poolId = event.id
//        ).let { projectAggregateService.addAssetPool(it) }

        return event
    }
    private suspend fun findCoeIndicateur(indicator: String): InformationConceptDTOBase {
        return InformationConceptGetByIdentifierQueryDTOBase(
            identifier = indicator
        ).invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier())
            .item!!
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
