package city.smartb.registry.program.s2.activity.api.query

import city.smartb.registry.program.api.commons.extention.toPage
import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.activity.api.entity.ActivityEntity
import city.smartb.registry.program.s2.activity.api.entity.ActivityRepository
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import f2.dsl.cqrs.page.Page
import org.springframework.stereotype.Repository

@Repository
class ActivityPageQueryDB(
    val repository: ActivityRepository
) {
    suspend fun execute(
        id: Match<ActivityId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ActivityEntity> {
        val page = offset.toPage()
        val items = repository.findAll(page)
        return Page(
            total = items.totalElements.toInt(),
            items =  items.toList()
        )
    }
}

