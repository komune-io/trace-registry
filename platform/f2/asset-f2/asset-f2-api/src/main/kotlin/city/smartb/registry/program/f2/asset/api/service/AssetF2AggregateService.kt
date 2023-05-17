package city.smartb.registry.program.f2.asset.api.service

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.im.organization.client.OrganizationClient
import city.smartb.im.organization.domain.features.query.OrganizationPageQuery
import city.smartb.im.organization.domain.model.Organization
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.api.commons.exception.NotFoundException
import city.smartb.registry.program.f2.asset.domain.command.AbstractAssetTransactionCommand
import city.smartb.registry.program.s2.asset.api.AssetPoolAggregateService
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmitTransactionCommand
import city.smartb.registry.program.s2.asset.domain.command.pool.AssetPoolEmittedTransactionEvent
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer,
    private val assetPoolAggregateService: AssetPoolAggregateService,
    private val organizationClient: OrganizationClient<Organization>
) {
    suspend fun emitTransaction(command: AbstractAssetTransactionCommand): AssetPoolEmittedTransactionEvent {
        val emitCommand = command.toEmitTransactionCommand()
        assetPoliciesEnforcer.checkTransaction(emitCommand)
        return assetPoolAggregateService.emitTransaction(emitCommand)
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
