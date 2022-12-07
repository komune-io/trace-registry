package city.smartb.registry.program.f2.asset.api.service

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.s2.asset.api.AssetAggregateService
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdateCommand
import city.smartb.registry.program.s2.asset.domain.command.AssetUpdatedEvent
import org.springframework.stereotype.Service

@Service
class AssetF2AggregateService(
    private val assetAggregateService: AssetAggregateService,
    private val assetPoliciesEnforcer: AssetPoliciesEnforcer
) {
    suspend fun create(command: AssetUpdateCommand): AssetUpdatedEvent {
        assetPoliciesEnforcer.checkCreate()
        return assetAggregateService.create(command)
    }

    suspend fun update(command: AssetUpdateCommand): AssetUpdatedEvent {
        assetPoliciesEnforcer.checkUpdate(command.id)
        return assetAggregateService.update(command)
    }

//    suspend fun delete(command: AssetUpdateCommand): AssetUpdatedEvent {
//        return assetAggregateService.delete(command)
//    }

}
