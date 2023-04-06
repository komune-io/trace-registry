package city.smartb.registry.program.f2.activity.domain.command

import city.smartb.registry.program.f2.activity.domain.model.Activity
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityStep
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


typealias ActivityCreateFunction = F2Function<ActivityCreateCommand, ActivityCreatedEvent>


/**
 * @d2 query
 */
@JsExport
@JsName("ActivityCreateCommandDTO")
interface ActivityCreateCommandDTO {
    val identifier: ActivityIdentifier
    val name: String
    val description: String?
    val hasActivity: Array<out ActivityCreateCommandDTO>?
    val hasStep: Array<out ActivityStepCreateCommandDTO>?

}

/**
 * @d2 inherit
 */
@Serializable
data class ActivityCreateCommand(
    override val identifier: ActivityIdentifier,
    override val name: String,
    override val description: String?,
    override val hasActivity: Array<ActivityCreateCommand>?,
    override val hasStep: Array<ActivityStepCreateCommand>?
): ActivityCreateCommandDTO

/**
 * Result of the query to get a page of activities.
 * @d2 event
 */
@JsExport
@JsName("ActivityCreatedEventDTO")
interface ActivityCreatedEventDTO: Event {
    val identifier: ActivityIdentifier
}

/**
 * @d2 inherit
 */
data class ActivityCreatedEvent(
    override val identifier: ActivityIdentifier,
): ActivityCreatedEventDTO
