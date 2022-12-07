package city.smartb.registry.program.f2.activity.domain.query

import city.smartb.registry.program.s2.activity.domain.model.Activity
import city.smartb.registry.program.s2.activity.domain.model.ActivityDTO
import f2.dsl.fnc.F2Function
import city.smartb.registry.program.s2.activity.domain.model.ActivityId
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get Activity By id
 * @d2 function
 * @parent [city.smartb.registry.program.s2.activity.domain.D2ActivitySectionApi]
 * @child [ActivityGetQuery]
 * @child [ActivityGetResult]
 */
typealias ActivityGetFunction = F2Function<ActivityGetQuery, ActivityGetResult>

/**
 * @d2 query
 * @parent [ActivityGetFunction]
 */
@JsExport
@JsName("ActivityGetQueryDTO")
interface ActivityGetQueryDTO {
    val id: ActivityId
}

/**
 * @d2 event
 * @parent [ActivityGetFunction]
 */
@JsExport
@JsName("ActivityGetResultDTO")
interface ActivityGetResultDTO {
    val item: ActivityDTO?
}

/**
 * @d2 inherit
 */
data class ActivityGetQuery(
    override val id: ActivityId
): ActivityGetQueryDTO

/**
 * @d2 inherit
 */
data class ActivityGetResult(
    override val item: Activity?
): ActivityGetResultDTO
