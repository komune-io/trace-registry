package city.smartb.registry.program.f2.activity.domain.command

import cccev.dsl.model.InformationConcept
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable


typealias ActivityStepCreateFunction = F2Function<ActivityStepCreateCommand, ActivityStepCreatedEvent>


/**
 * @d2 query
 */
@JsExport
@JsName("ActivityStepCreateCommandDTO")
interface ActivityStepCreateCommandDTO {
    val identifier: ActivityIdentifier
    val name: String
    val description: String?
    val hasConcept: InformationConcept?
}

/**
 * @d2 inherit
 */
@Serializable
data class ActivityStepCreateCommand(
    override val identifier: ActivityIdentifier,
    override val name: String,
    override val description: String?,
    override val hasConcept: InformationConcept?
): ActivityStepCreateCommandDTO

/**
 * Result of the query to get a page of activities.
 * @d2 event
 */
@JsExport
@JsName("ActivityStepCreatedEventDTO")
interface ActivityStepCreatedEventDTO: Event

/**
 * @d2 inherit
 */
data class ActivityStepCreatedEvent(
    val identifier: ActivityIdentifier
): ActivityStepCreatedEventDTO
