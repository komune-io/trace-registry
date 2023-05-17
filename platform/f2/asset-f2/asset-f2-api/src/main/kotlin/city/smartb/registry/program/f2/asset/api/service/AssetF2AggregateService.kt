package city.smartb.registry.program.f2.asset.api.service

import city.smartb.fs.s2.file.client.FileClient
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.spring.utils.toUploadCommand
import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.im.organization.client.OrganizationClient
import city.smartb.im.organization.domain.model.Organization
import city.smartb.im.organization.domain.features.query.OrganizationPageQuery
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.f2.asset.domain.command.AssetIssueCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetTransferCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetRetireCommandDTOBase
import city.smartb.registry.program.f2.asset.domain.command.AssetOffsetCommandDTOBase
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
    private val assetPoolF2FinderService: AssetPoolF2FinderService,
    private val organizationClient: OrganizationClient<Organization>
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
        return assetPoolAggregateService.emitTransaction(command.toEmitTransactionCommand())
    }

    private suspend fun AbstractAssetTransactionCommand.toEmitTransactionCommand() = AssetPoolEmitTransactionCommand(
        id = poolId,
        from = from?.let { getOrganizationByName(it).id },
        to = to?.let { getOrganizationByName(it).id },
        by = AuthenticationProvider.getAuthedUser().memberOf!!,
        quantity = quantity,
        type = type
    )

    private suspend fun getOrganizationByName(name: String): Organization {
        return OrganizationPageQuery(
            search = name,
            role = null,
            attributes = null,
            page = 0,
            size = Integer.MAX_VALUE
        ).let { organizationClient.organizationPage<Organization>(listOf(it)).first() }
            .items
            .firstOrNull { it.name == name }
            ?: throw NotFoundException("Organization with name", name)
    }
}
