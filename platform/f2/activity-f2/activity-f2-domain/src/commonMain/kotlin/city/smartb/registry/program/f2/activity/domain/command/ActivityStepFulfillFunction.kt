package city.smartb.registry.program.f2.activity.domain.command

import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.s2.file.domain.model.FilePathDTO
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
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
    val requestId: String
    val identifier: ActivityIdentifier
    val value: String?
}

/**
 * @d2 inherit
 */
data class ActivityStepFulfillCommand(
    override val requestId: String,
    override val identifier: ActivityIdentifier,
    override val value: String?,
): ActivityStepFulfillCommandDTO

/**
 * Result of the query to get a page of activities.
 * @d2 event
 */
@JsExport
@JsName("ActivityStepFulfilledEventDTO")
interface ActivityStepFulfilledEventDTO: Event {
    val identifier: ActivityIdentifier
    val value: String?
    val file: FilePathDTO?
}

/**
 * @d2 inherit
 */
data class ActivityStepFulfilledEvent(
    override val identifier: ActivityIdentifier,
    override val value: String?,
    override val file: FilePath?
): ActivityStepFulfilledEventDTO
