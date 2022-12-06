package city.smartb.registry.program.s2.activity.api.query

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.activity.api.entity.ActivityEntity
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import org.springframework.stereotype.Repository

@Repository
class ActivityPageQueryDB {
    fun execute(
        id: Match<ActivityId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ActivityEntity> = TODO()
}
