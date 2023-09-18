package city.smartb.registry.f2.activity.domain.query

import cccev.s2.certification.domain.model.CertificationIdentifier
import city.smartb.registry.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.f2.activity.domain.model.ActivityStepDTO
import f2.dsl.cqrs.page.PageDTO
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Get page of activity
 * @d2 function
 * @parent [city.smartb.registry.f2.activity.domain.D2ActivityF2Page]
 * @order 100
 */
typealias ActivityStepPageFunction = F2Function<ActivityStepPageQuery, ActivityStepPageResult>

/**
 * @d2 query
 * @parent [ActivityStepPageFunction]
 */
@JsExport
@JsName("ActivityStepPageQueryDTO")
interface ActivityStepPageQueryDTO {
    /**
     * Name of the activity
     */
    val activityIdentifier: String
    /**
     * Name of the activity
     */
    val certificationIdentifier: String
    val offset: Int?
    val limit: Int?
}

/**
 * @d2 inherit
 */
data class ActivityStepPageQuery(
    override val activityIdentifier: ActivityIdentifier,
    override val certificationIdentifier: CertificationIdentifier,
    override val offset: Int?,
    override val limit: Int?,
): ActivityStepPageQueryDTO

/**
 * @d2 event
 * @parent [ActivityStepPageFunction]
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
