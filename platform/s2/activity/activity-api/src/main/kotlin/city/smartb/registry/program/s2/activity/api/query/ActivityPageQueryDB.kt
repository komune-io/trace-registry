package city.smartb.registry.program.s2.activity.api.query

import f2.dsl.cqrs.page.OffsetPagination
import f2.dsl.cqrs.page.PageDTO
import city.smartb.registry.program.api.commons.model.Match
import city.smartb.registry.program.s2.activity.api.entity.ActivityEntity
import city.smartb.registry.program.s2.activity.api.entity.ActivityRepository
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import f2.dsl.cqrs.page.Page
import org.springframework.data.domain.PageRequest
import org.springframework.stereotype.Repository

@Repository
class ActivityPageQueryDB(
    val activityRepository: ActivityRepository

) {
    suspend fun execute(
        id: Match<ActivityId>? = null,
        offset: OffsetPagination? = null
    ): PageDTO<ActivityEntity> {
        val page = offset?.toPage() ?: PageRequest.of(0, 10000)
        val items = activityRepository.findAll(page)
        return Page(
            total = items.totalElements.toInt(),
            items =  items.toList()
        )

    }
}

fun OffsetPagination.toPage(): PageRequest {
    val size = limit - offset
    val page = (if(size > 0 ) limit / size else 1) - 1

    return PageRequest.of(page, size);
}
