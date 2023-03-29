package city.smartb.registry.program.f2.activity.domain.query

import city.smartb.registry.program.f2.activity.domain.model.ActivityStepDTO
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get page of activity
 *
 * @d2 function
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivitySectionApi]
 * @child [ActivityStepPageQueryDTO]
 * @child [ActivityStepPageResultDTO]
 */
typealias ActivityStepPageFunction = F2Function<ActivityStepPageQuery, ActivityStepPageResult>

/**
 * @d2 query
 */
@JsExport
@JsName("ActivityStepPageQueryDTO")
interface ActivityStepPageQueryDTO {
    /**
     * Name of the activity
     */
    val activityId: String?
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
data class ActivityStepPageQuery(
    override val activityId: String,
    override val offset: Int?,
    override val limit: Int?,
): ActivityStepPageQueryDTO

/**
 * Result of the query to get a page of activities.
 * @d2 event
 */
@JsExport
@JsName("ActivityStepPageResultDTO")
interface ActivityStepPageResultDTO: PageDTO<ActivityStepDTO>

/**
 * @d2 inherit
 */
data class ActivityStepPageResult(
    override val items: List<ActivityStepDTO>,
    override val total: Int
): ActivityStepPageResultDTO
