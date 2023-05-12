package city.smartb.registry.program.f2.asset.api.service

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetWithdrawCommandDTOBase
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService
) {
    suspend fun issue(command: AssetIssueCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())
    }

    suspend fun withdraw(command: AssetWithdrawCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())
    }

    private suspend fun AbstractAssetTransactionCommand.toEmitTransactionCommand() = AssetPoolEmitTransactionCommand(
        id = poolId,
        from = from,
        to = to,
        by = AuthenticationProvider.getAuthedUser().id,
        quantity = quantity,
        type = type
    )
}
