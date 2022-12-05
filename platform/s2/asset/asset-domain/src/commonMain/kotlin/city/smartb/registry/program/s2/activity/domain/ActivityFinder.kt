package city.smartb.registry.program.s2.activity.domain

import city.smartb.im.organization.domain.model.OrganizationId
import city.smartb.registry.program.api.commons.model.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.s2.activity.domain.automate.ActivityId
import city.smartb.registry.program.s2.activity.domain.model.Activity
import i2.keycloak.f2.user.domain.model.UserId

interface ActivityFinder {
    suspend fun getOrNull(id: ActivityId): Activity?
    suspend fun get(id: ActivityId): Activity
    suspend fun page(
        id: Match<ActivityId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<Activity>
}
