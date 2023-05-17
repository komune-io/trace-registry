package city.smartb.registry.program.f2.asset.api.service

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.toUploadCommand
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.asset.domain.command.*
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.infra.pdf.CertificateGenerator
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddFileCommand
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val fileClient: FileClient,
    private val assetPoolF2FinderService: AssetPoolF2FinderService
) {
    suspend fun issue(command: AssetIssueCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetPoolEmittedTransactionEvent {
        val createdEvent = assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())

        val result = CertificateGenerator.fill(
            transactionId = createdEvent.transactionId,
            date = createdEvent.date,
            issuedTo = command.to,
            quantity = command.quantity,
            indicator = assetPoolF2FinderService.get(createdEvent.id).indicator.unit!!.name
        )

        val path = FilePath(
            objectType = "organization",
            objectId = command.to,
            directory = "certificate",
            name = "certificate-${System.currentTimeMillis()}.pdf"
        )
        fileClient.fileUpload(path.toUploadCommand(), result)

        assetPoolAggregateService.addFileTransaction(TransactionAddFileCommand(
            id=createdEvent.transactionId,
            file = path
        ))

        return createdEvent
    }

    suspend fun retire(command: AssetRetireCommandDTOBase): AssetPoolEmittedTransactionEvent {
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
