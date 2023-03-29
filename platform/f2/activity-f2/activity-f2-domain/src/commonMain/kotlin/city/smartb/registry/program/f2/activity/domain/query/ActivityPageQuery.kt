package city.smartb.registry.program.f2.activity.domain.query

import city.smartb.registry.program.f2.activity.domain.model.ActivityDTO
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get page of activity
 *
 * @d2 function
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivitySectionApi]
 * @child [ActivityPageQueryDTO]
 * @child [ActivityPageResultDTO]
 */
typealias ActivityPageFunction = F2Function<ActivityPageQuery, ActivityPageResult>

/**
 * @d2 query
 */
@JsExport
@JsName("ActivityPageQueryDTO")
interface ActivityPageQueryDTO {
    /**
     * id of the project
     */
    val projectId: String
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
data class ActivityPageQuery(
    override val projectId: String,
    override val offset: Int?,
    override val limit: Int?,
): ActivityPageQueryDTO

/**
 * Result of the query to get a page of activities.
 * @d2 event
 */
@JsExport
@JsName("ActivityPageResultDTO")
interface ActivityPageResultDTO: PageDTO<ActivityDTO>

/**
 * @d2 inherit
 */
data class ActivityPageResult(
    override val items: List<ActivityDTO>,
    override val total: Int
): ActivityPageResultDTO
