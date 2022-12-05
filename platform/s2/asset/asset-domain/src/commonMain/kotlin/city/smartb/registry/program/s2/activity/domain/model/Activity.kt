package city.smartb.registry.program.s2.activity.domain.model

import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.s2.activity.domain.automate.ActivityId
import city.smartb.registry.program.s2.activity.domain.automate.ActivityState
import i2.keycloak.f2.user.domain.model.UserId

data class Activity(
    val id: ActivityId,
    val friendlyId: String,
    val beneficiaryId: OrganizationId,
    val supervisorId: UserId,
    val name: String,
    val status: ActivityState,
)
