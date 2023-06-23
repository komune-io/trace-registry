package city.smartb.registry.program.f2.asset.api.service

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.toUploadCommand
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.utils.OrganizationFsPath
import city.smartb.registry.program.infra.im.ImService
import city.smartb.registry.program.infra.pdf.CertificateGenerator
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.api.AssetPoolFinderService
import city.smartb.registry.program.s2.order.api.OrderAggregateService
import city.smartb.registry.program.s2.order.domain.command.OrderPendCommand
import city.smartb.registry.program.s2.order.domain.command.OrderPlaceCommand
import city.smartb.registry.program.s2.order.domain.command.OrderPlacedEvent
import city.smartb.registry.program.s2.order.domain.command.OrderSubmitCommand
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val assetPoolFinderService: AssetPoolFinderService,
    private val fileClient: FileClient,
    private val imService: ImService,
    private val orderAggregateService: OrderAggregateService
) {
    suspend fun issue(command: AssetIssueCommandDTOBase): OrderPlacedEvent {
        return placeOrder(command)
    }

    suspend fun transfer(command: AssetTransferCommandDTOBase): OrderPlacedEvent {
        return placeOrder(command)
    }

    suspend fun offset(command: AssetOffsetCommandDTOBase): OrderPlacedEvent {
        return placeOrder(command, verifyTo = false) { orderCommand, orderEvent ->
            val result = CertificateGenerator.fillPendingCertificate(
                orderId = orderEvent.id,
                date = orderEvent.date,
                issuedTo = orderCommand.to!!,
                quantity = orderCommand.quantity,
                indicator = if (orderCommand.quantity > 1) "tons" else "ton",
            )

            val path = FilePath(
                objectType = OrganizationFsPath.OBJECT_TYPE,
                objectId = orderCommand.to!!,
                directory = OrganizationFsPath.DIR_CERTIFICATE,
                name = "certificate-${orderEvent.id}-pending.pdf"
            )
            fileClient.fileUpload(path.toUploadCommand(), result)
            path
        }
    }

    suspend fun retire(command: AssetRetireCommandDTOBase): OrderPlacedEvent {
        return placeOrder(command)
    }

//    suspend fun cancelTransaction(command: AssetCancelTransactionCommandDTOBase): AssetCanceledTransactionEventDTOBase {
//        return assetPoolAggregateService.cancelTransaction(command)
//            .let { AssetCanceledTransactionEventDTOBase(it.id) }
//    }

//    suspend fun validateTransaction(command: AssetValidateTransactionCommandDTOBase): AssetValidatedTransactionEventDTOBase {
//        val transaction = assetPoolFinderService.getTransaction(command.id)
//        val file = takeIf { transaction.type == TransactionType.OFFSET }?.let {
//            val content = CertificateGenerator.fillPendingCertificate(
//                orderId = transaction.id,
//                date = transaction.date,
//                issuedTo = transaction.to!!,
//                quantity = transaction.quantity,
//                indicator = if (transaction.quantity > 1) "tons" else "ton",
//            )
//            val path = FilePath(
//                objectType = OrganizationFsPath.OBJECT_TYPE,
//                objectId = transaction.to!!,
//                directory = OrganizationFsPath.DIR_CERTIFICATE,
//                name = "certificate-${transaction.id}.pdf"
//            )
//            fileClient.fileUpload(path.toUploadCommand(), content)
//            path
//        }
//
//        TransactionValidateCommand(
//            id = transaction.id,
//            file = file
//        ).let { assetPoolAggregateService.validateTransaction(it) }
//
//        return AssetValidatedTransactionEventDTOBase(command.id)
//    }

    private suspend fun placeOrder(
        command: AbstractAssetTransactionCommand,
        verifyTo: Boolean = true,
        generatePendingCertificate: suspend (
            command: OrderPlaceCommand,
            event: OrderPlacedEvent
        ) -> FilePath? = { _, _ -> null }
    ): OrderPlacedEvent {
        val orderCommand = command.toOrderPlaceCommand(verifyTo)
        assetPoliciesEnforcer.checkOrderPlace(orderCommand)
        val orderEvent = orderAggregateService.place(orderCommand)

        if (!command.draft) {
            orderAggregateService.submit(OrderSubmitCommand(
                id = orderEvent.id
            ))

            orderAggregateService.pend(OrderPendCommand(
                id = orderEvent.id,
                certificate = generatePendingCertificate(orderCommand, orderEvent)
            ))
        }
        return orderEvent
    }

    private suspend fun AbstractAssetTransactionCommand.toOrderPlaceCommand(
        verifyTo: Boolean = true
    ): OrderPlaceCommand {
        val to = if (verifyTo) {
            to?.let { imService.getOrganizationByName(it).id }
        } else {
            to
        }
        return OrderPlaceCommand(
            poolId = poolId,
            from = from?.let { imService.getOrganizationByName(it).id },
            to = to,
            by = AuthenticationProvider.getAuthedUser().memberOf!!,
            quantity = quantity,
            type = type
        )
    }
}
