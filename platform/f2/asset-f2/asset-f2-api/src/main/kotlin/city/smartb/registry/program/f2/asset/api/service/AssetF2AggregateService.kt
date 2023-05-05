package city.smartb.registry.program.f2.asset.api.service

import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetWithdrawCommandDTOBase
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService
) {
    suspend fun issue(command: AssetIssueCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(AssetPoolEmitTransactionCommand(
            id = command.poolId,
            from = null,
            to = command.receiver,
            quantity = command.quantity,
            type = TransactionType.ISSUE
        ))
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(AssetPoolEmitTransactionCommand(
            id = command.poolId,
            from = command.sender,
            to = command.receiver,
            quantity = command.quantity,
            type = TransactionType.TRANSFER
        ))
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(AssetPoolEmitTransactionCommand(
            id = command.poolId,
            from = command.owner,
            to = null,
            quantity = command.quantity,
            type = TransactionType.OFFSET
        ))
    }

    suspend fun withdraw(command: AssetWithdrawCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(AssetPoolEmitTransactionCommand(
            id = command.poolId,
            from = command.owner,
            to = null,
            quantity = command.quantity,
            type = TransactionType.WITHDRAW
        ))
    }
}
