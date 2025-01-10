package io.komune.registry.f2.asset.pool.api.service

import cccev.f2.concept.model.InformationConceptFlat
import cccev.f2.concept.query.InformationConceptGetByIdentifierQuery
import f2.dsl.fnc.invokeWith
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
import org.springframework.stereotype.Service

@Service
class AssetPoolF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService,
//    private val cccevClient: CCCEVClient,
    private val imService: ImService,
    private val assetPoolPoliciesEnforcer: AssetPoolPoliciesEnforcer,
) {
    suspend fun create(command: AssetPoolCreateCommandDTOBase): AssetPoolCreatedEvent {
//        val indicator = findCoeIndicateur(command.indicator)
        val event = AssetPoolCreateCommand(
            indicator = command.indicator,
            vintage = command.vintage,
            granularity = command.granularity,
            metadata = emptyMap()
        ).let { assetPoolAggregateService.create(it) }

        return event
    }

//    private suspend fun findCoeIndicateur(identifier: String): InformationConceptFlat {
//        return InformationConceptGetByIdentifierQuery(
//            identifier = identifier
//        ).invokeWith(cccevClient.informationConceptClient.conceptGetByIdentifier())
//            .item!!
//    }

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
