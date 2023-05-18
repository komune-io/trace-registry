package city.smartb.registry.program.f2.asset.api.service

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.toUploadCommand
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.im.organization.domain.model.Organization
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.infra.im.ImService
import city.smartb.registry.program.infra.pdf.CertificateGenerator
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddFileCommand
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val fileClient: FileClient,
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
    private val imService: ImService
) {
    suspend fun issue(command: AssetIssueCommandDTOBase): AssetPoolEmittedTransactionEvent {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        return assetPoolAggregateService.emitTransaction(emitCommand)
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetPoolEmittedTransactionEvent {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        return assetPoolAggregateService.emitTransaction(emitCommand)
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetPoolEmittedTransactionEvent {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        val createdEvent = assetPoolAggregateService.emitTransaction(emitCommand)

        val result = CertificateGenerator.fill(
            transactionId = createdEvent.transactionId,
            date = createdEvent.date,
            issuedTo = command.to,
            quantity = command.quantity,
            indicator = assetPoolF2FinderService.get(createdEvent.id).indicator.unit!!.name
        )

        val path = FilePath(
            objectType = "organization",
            objectId = createdEvent.transactionId,
            directory = "certificate",
            name = "certificate-${System.currentTimeMillis()}.pdf"
        )
        fileClient.fileUpload(path.toUploadCommand(), result)

        assetPoolAggregateService.addFileTransaction(TransactionAddFileCommand(
            id = createdEvent.transactionId,
            file = path
        ))

        return createdEvent
    }

    suspend fun retire(command: AssetRetireCommandDTOBase): AssetPoolEmittedTransactionEvent {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        return assetPoolAggregateService.emitTransaction(emitCommand)
    }

    private suspend fun AbstractAssetTransactionCommand.toEmitTransactionCommand() = AssetPoolEmitTransactionCommand(
        id = poolId,
        from = from?.let { imService.getOrganizationByName(it).id },
        to = to?.let { imService.getOrganizationByName(it).id },
        by = AuthenticationProvider.getAuthedUser().memberOf!!,
        quantity = quantity,
        type = type
    )


}
