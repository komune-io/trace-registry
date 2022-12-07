package city.smartb.registry.program.f2.activity.api.service

import f2.dsl.cqrs.page.OffsetPagination
import city.smartb.registry.program.f2.activity.domain.query.ActivityPageResult
import city.smartb.registry.program.s2.activity.api.ActivityFinderService
import city.smartb.registry.program.s2.activity.domain.model.Activity
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import org.springframework.stereotype.Service

@Service
class ActivityF2FinderService(
    private val activityFinderService: ActivityFinderService,
) {
    suspend fun getOrNull(id: ActivityId): Activity? {
        return activityFinderService.getOrNull(id)
    }

    suspend fun get(id: ActivityId): Activity {
        return activityFinderService.get(id)
    }

    suspend fun page(
        offset: OffsetPagination? = null
    ): ActivityPageResult {
        return activityFinderService.page(
            offset = offset
        ).let { page ->
            ActivityPageResult(
                items = page.items,
                total = page.total
            )
        }
    }

}
