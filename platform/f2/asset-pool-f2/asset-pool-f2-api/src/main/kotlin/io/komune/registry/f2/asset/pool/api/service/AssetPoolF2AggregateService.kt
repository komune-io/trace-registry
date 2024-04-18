package io.komune.registry.f2.asset.pool.api.service

import cccev.dsl.client.CCCEVClient
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.f2.concept.domain.query.InformationConceptGetByIdentifierQueryDTOBase
import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.f2.asset.pool.domain.command.AbstractAssetTransactionCommand
import io.komune.registry.f2.asset.pool.domain.command.AssetIssueCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetOffsetCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolCloseCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolCreateCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolHoldCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetPoolResumeCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetRetireCommandDTOBase
import io.komune.registry.f2.asset.pool.domain.command.AssetTransferCommandDTOBase
import io.komune.registry.infra.im.ImService
import io.komune.registry.s2.asset.api.AssetPoolAggregateService
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCloseCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolClosedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreateCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolCreatedEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHeldEvent
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolHoldCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumeCommand
import io.komune.registry.s2.asset.domain.command.pool.AssetPoolResumedEvent
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
        return emitTransaction(command)
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return emitTransaction(command)
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return emitTransaction(command, verifyTo = false)
    }

    suspend fun retire(command: AssetRetireCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return emitTransaction(command)
    }

    private suspend fun emitTransaction(
        command: AbstractAssetTransactionCommand,
        verifyTo: Boolean = true
    ): AssetPoolEmittedTransactionEvent {
        val emitTransactionCommand = command.toAssetPoolEmitTransactionCommand(verifyTo)
        assetPoolPoliciesEnforcer.checkEmitTransaction(emitTransactionCommand)
        return assetPoolAggregateService.emitTransaction(emitTransactionCommand)
    }

    private suspend fun AbstractAssetTransactionCommand.toAssetPoolEmitTransactionCommand(
        verifyTo: Boolean = true
    ): AssetPoolEmitTransactionCommand {
        val to = if (verifyTo) {
            to?.let { imService.getOrganizationByName(it).id }
        } else {
            to
        }
        val memberOf = AuthenticationProvider.getAuthedUser()?.memberOf
            ?: throw IllegalStateException(
                "Authed user[${AuthenticationProvider.getAuthedUser()?.id}] must must have memberOf propoerty"
            )

        return AssetPoolEmitTransactionCommand(
            id = id,
            from = from?.let { imService.getOrganizationByName(it).id },
            to = to,
            by = memberOf,
            quantity = quantity,
            type = type,
        )
    }

}
