package city.smartb.registry.program.f2.pool.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.pool.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.pool.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCloseCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolCreateCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolHoldCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetPoolResumeCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetRetireCommandDTOBase
import city.smartb.registry.program.f2.pool.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.infra.im.ImService
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCloseCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolClosedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreateCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHeldEvent
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolHoldCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumeCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolResumedEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.AssetTransactionEmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionEmittedEvent
import f2.dsl.fnc.invokeWith
import org.springframework.stereotype.Service

@Service
class AssetPoolF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val cccevClient: CCCEVClient,
    private val imService: ImService,
    private val assetPoolPoliciesEnforcer: AssetPoolPoliciesEnforcer,
) {
    suspend fun create(command: AssetPoolCreateCommandDTOBase): AssetPoolCreatedEvent {
        val indicator = findCoeIndicateur(command.indicator)
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

    suspend fun issue(command: AssetIssueCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return placeOrder(command)
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return placeOrder(command)
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return placeOrder(command, verifyTo = false)
    }

    suspend fun retire(command: AssetRetireCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return placeOrder(command)
    }


//    emitTransaction(command: AssetTransactionEmitCommand)
    private suspend fun placeOrder(
        command: AbstractAssetTransactionCommand,
        verifyTo: Boolean = true,
        generatePendingCertificate: suspend (
            command: AssetTransactionEmitCommand,
            event: TransactionEmittedEvent,
        ) -> FilePath? = { _, _ -> null }
    ): AssetPoolEmittedTransactionEvent {
        val orderCommand = command.toOrderPlaceCommand(verifyTo)
        assetPoolPoliciesEnforcer.checkOrderPlace(orderCommand)
        return assetPoolAggregateService.emitTransaction(orderCommand)
    }

    private suspend fun AbstractAssetTransactionCommand.toOrderPlaceCommand(
        verifyTo: Boolean = true
    ): AssetPoolEmitTransactionCommand {
        val to = if (verifyTo) {
            to?.let { imService.getOrganizationByName(it).id }
        } else {
            to
        }
        return AssetPoolEmitTransactionCommand(
            id = id,
            from = from?.let { imService.getOrganizationByName(it).id },
            to = to,
            by = AuthenticationProvider.getAuthedUser().memberOf!!,
            quantity = quantity,
            type = type,
        )
    }

}
