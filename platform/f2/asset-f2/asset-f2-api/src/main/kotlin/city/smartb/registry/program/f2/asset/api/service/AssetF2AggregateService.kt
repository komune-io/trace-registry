package city.smartb.registry.program.f2.asset.api.service

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.toUploadCommand
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetIssuedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsettedEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetRetiredEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferredEventDTOBase
import city.smartb.registry.program.f2.pool.api.service.AssetPoolF2FinderService
import city.smartb.registry.program.infra.im.ImService
import city.smartb.registry.program.infra.pdf.CertificateGenerator
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.api.AssetTransactionAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionAddFileCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendingCertificateGenerateCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmitCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionSubmittedEvent
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
    private val assetTransactionAggregateService: AssetTransactionAggregateService,
    private val fileClient: FileClient,
    private val imService: ImService
) {
    suspend fun issue(command: AssetIssueCommandDTOBase): AssetIssuedEventDTOBase {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        return assetTransactionAggregateService.submitTransaction(emitCommand)
            .let { AssetIssuedEventDTOBase(it.id) }
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetTransferredEventDTOBase {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        return assetTransactionAggregateService.submitTransaction(emitCommand)
            .let { AssetTransferredEventDTOBase(it.id) }
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetOffsettedEventDTOBase {
        val emitCommand = command.toEmitTransactionCommand(verifyTo = false)
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        val createdEvent = assetTransactionAggregateService.submitTransaction(emitCommand)
        val result = CertificateGenerator.fillPendingCertificate(
            transactionId = createdEvent.id,
            date = createdEvent.date,
            issuedTo = command.to,
            quantity = command.quantity,
            indicator = if(command.quantity > 1) "tons" else "ton",
        )

        val path = FilePath(
            objectType = "organization",
            objectId = createdEvent.id,
            directory = "certificate",
            name = "certificate-pending.pdf"
        )
        fileClient.fileUpload(path.toUploadCommand(), result)

        assetTransactionAggregateService.generatePendingCertificateCommand(TransactionPendingCertificateGenerateCommand(
            id = createdEvent.id,
            file = path
        ))

        return createdEvent
            .let { AssetOffsettedEventDTOBase(it.id) }
    }

    suspend fun retire(command: AssetRetireCommandDTOBase): AssetRetiredEventDTOBase {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        return assetTransactionAggregateService.submitTransaction(emitCommand)
            .let { AssetRetiredEventDTOBase(it.id) }
    }

    private suspend fun AbstractAssetTransactionCommand.toEmitTransactionCommand(
        verifyTo: Boolean = true
    ): TransactionSubmitCommand {
        val to = if(verifyTo) {
            to?.let { imService.getOrganizationByName(it).id }
        } else {
            to
        }
        return TransactionSubmitCommand(
            poolId = poolId,
            from = from?.let { imService.getOrganizationByName(it).id },
            to = to,
            by = AuthenticationProvider.getAuthedUser().memberOf!!,
            quantity = quantity,
            type = type
        )
    }
}
