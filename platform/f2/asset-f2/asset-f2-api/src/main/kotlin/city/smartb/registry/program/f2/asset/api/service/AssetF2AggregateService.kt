package city.smartb.registry.program.f2.asset.api.service

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.toUploadCommand
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.asset.domain.command.AssetCancelTransactionCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetCanceledTransactionEventDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetValidateTransactionCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetValidatedTransactionEventDTOBase
import city.smartb.registry.program.f2.asset.domain.utils.OrganizationFsPath
import city.smartb.registry.program.infra.im.ImService
import city.smartb.registry.program.infra.pdf.CertificateGenerator
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionPendCommand
import city.smartb.registry.program.s2.asset.domain.command.transaction.TransactionValidateCommand
import city.smartb.registry.program.s2.asset.domain.model.TransactionType
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val assetPoolFinderService: AssetPoolFinderService,
    private val fileClient: FileClient,
    private val imService: ImService
) {
    suspend fun issue(command: AssetIssueCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return emitTransaction(command)
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return emitTransaction(command)
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return emitTransaction(command, verifyTo = false) { emitCommand, emittedEvent ->
            val result = CertificateGenerator.fillPendingCertificate(
                transactionId = emittedEvent.transactionId,
                date = emittedEvent.date,
                issuedTo = emitCommand.to!!,
                quantity = emitCommand.quantity,
                indicator = if (emitCommand.quantity > 1) "tons" else "ton",
            )

            val path = FilePath(
                objectType = OrganizationFsPath.OBJECT_TYPE,
                objectId = emitCommand.to!!,
                directory = OrganizationFsPath.DIR_CERTIFICATE,
                name = "certificate-${emittedEvent.transactionId}-pending.pdf"
            )
            fileClient.fileUpload(path.toUploadCommand(), result)
            path
        }
    }

    suspend fun retire(command: AssetRetireCommandDTOBase): AssetPoolEmittedTransactionEvent {
        return emitTransaction(command)
    }

    suspend fun cancelTransaction(command: AssetCancelTransactionCommandDTOBase): AssetCanceledTransactionEventDTOBase {
        return assetPoolAggregateService.cancelTransaction(command)
            .let { AssetCanceledTransactionEventDTOBase(it.id) }
    }

    suspend fun validateTransaction(command: AssetValidateTransactionCommandDTOBase): AssetValidatedTransactionEventDTOBase {
        val transaction = assetPoolFinderService.getTransaction(command.id)
        val file = takeIf { transaction.type == TransactionType.OFFSET }?.let {
            val content = CertificateGenerator.fillPendingCertificate(
                transactionId = transaction.id,
                date = transaction.date,
                issuedTo = transaction.to!!,
                quantity = transaction.quantity,
                indicator = if (transaction.quantity > 1) "tons" else "ton",
            )
            val path = FilePath(
                objectType = OrganizationFsPath.OBJECT_TYPE,
                objectId = transaction.to!!,
                directory = OrganizationFsPath.DIR_CERTIFICATE,
                name = "certificate-${transaction.id}.pdf"
            )
            fileClient.fileUpload(path.toUploadCommand(), content)
            path
        }

        TransactionValidateCommand(
            id = transaction.id,
            file = file
        ).let { assetPoolAggregateService.validateTransaction(it) }

        return AssetValidatedTransactionEventDTOBase(command.id)
    }

    private suspend fun emitTransaction(
        command: AbstractAssetTransactionCommand,
        verifyTo: Boolean = true,
        generatePendingCertificate: suspend (
            command: AssetPoolEmitTransactionCommand,
            event: AssetPoolEmittedTransactionEvent
        ) -> FilePath? = { _, _ -> null }
    ): AssetPoolEmittedTransactionEvent {
        val emitCommand = command.toEmitTransactionCommand(verifyTo)
        assetPoliciesEnforcer.checkEmitTransaction(emitCommand)
        val emittedEvent = assetPoolAggregateService.submitTransaction(emitCommand)

        val pendingCertificate = generatePendingCertificate(emitCommand, emittedEvent)
        assetPoolAggregateService.pendTransaction(TransactionPendCommand(
            id = emittedEvent.transactionId,
            file = pendingCertificate
        ))
        return emittedEvent
    }

    private suspend fun AbstractAssetTransactionCommand.toEmitTransactionCommand(
        verifyTo: Boolean = true
    ): AssetPoolEmitTransactionCommand {
        val to = if (verifyTo) {
            to?.let { imService.getOrganizationByName(it).id }
        } else {
            to
        }
        return AssetPoolEmitTransactionCommand(
            id = poolId,
            from = from?.let { imService.getOrganizationByName(it).id },
            to = to,
            by = AuthenticationProvider.getAuthedUser().memberOf!!,
            quantity = quantity,
            type = type
        )
    }
}
