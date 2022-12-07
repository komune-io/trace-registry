package city.smartb.registry.program.f2.activity.api.service

import city.smartb.i2.spring.boot.auth.AuthenticationProvider
import city.smartb.registry.program.api.commons.auth.getAuthedUser
import city.smartb.registry.program.s2.activity.api.ActivityAggregateService
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdateCommand
import city.smartb.registry.program.s2.activity.domain.command.ActivityUpdatedEvent
import org.springframework.stereotype.Service

@Service
class ActivityF2AggregateService(
    private val activityAggregateService: ActivityAggregateService,
    private val activityPoliciesEnforcer: ActivityPoliciesEnforcer
) {
    suspend fun create(command: ActivityUpdateCommand): ActivityUpdatedEvent {
        val beneficiaryId = AuthenticationProvider.getAuthedUser().memberOf!!
        activityPoliciesEnforcer.checkCreate()
        return activityAggregateService.create(command)
    }

    suspend fun updateDetails(command: ActivityUpdateCommand): ActivityUpdatedEvent {
        activityPoliciesEnforcer.checkUpdate(command.id)
        return activityAggregateService.modify(command)
    }

//    suspend fun delete(command: ActivityUpdateCommand): ActivityUpdatedEvent {
//        return activityAggregateService.delete(command)
//    }

}
