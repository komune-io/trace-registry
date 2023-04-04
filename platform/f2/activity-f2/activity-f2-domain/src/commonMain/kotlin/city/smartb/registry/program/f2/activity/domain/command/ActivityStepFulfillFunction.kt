package city.smartb.registry.program.f2.activity.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName


typealias ActivityStepFulfillFunction = F2Function<ActivityStepFulfillCommand, ActivityStepFulfilledEvent>

/**
 * @d2 query
 */
@JsExport
@JsName("ActivityStepFulfillCommandDTO")
interface ActivityStepFulfillCommandDTO {
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
data class ActivityStepFulfillCommand(
    override val activityId: String,
    override val offset: Int?,
    override val limit: Int?,
): ActivityStepFulfillCommandDTO

/**
 * Result of the query to get a page of activities.
 * @d2 event
 */
@JsExport
@JsName("ActivityStepFulfilledEventDTO")
interface ActivityStepFulfilledEventDTO: Event

/**
 * @d2 inherit
 */
data class ActivityStepFulfilledEvent(
    val stepId: String,
    val evidenceId: String,
    val supportedValueId: String
): ActivityStepFulfilledEventDTO
