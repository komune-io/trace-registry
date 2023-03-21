package city.smartb.registry.program.s2.activity.domain

import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.s2.activity.domain.model.Activity
import city.smartb.registry.program.s2.activity.domain.model.ActivityId

interface ActivityFinder {
    suspend fun getOrNull(id: ActivityId): Activity?
    suspend fun get(id: ActivityId): Activity
    suspend fun page(
        id: Match<ActivityId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<Activity>
}
