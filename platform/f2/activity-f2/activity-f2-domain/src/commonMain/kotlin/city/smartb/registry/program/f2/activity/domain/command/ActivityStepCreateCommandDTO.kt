package city.smartb.registry.program.f2.activity.domain.command

import cccev.dsl.model.InformationConcept
import city.smartb.registry.program.f2.activity.domain.model.ActivityStepIdentifier
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Create an activity step.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.activity.domain.D2ActivityF2Page]
 * @order 100
 */
typealias ActivityStepCreateFunction = F2Function<ActivityStepCreateCommandDTOBase, ActivityStepCreatedEventDTOBase>

/**
 * @d2 command
 * @parent [ActivityStepCreateFunction]
 */
@JsExport
@JsName("ActivityStepCreateCommandDTO")
interface ActivityStepCreateCommandDTO {
    /**
     * Custom identifier of the new activity step.
     */
    val identifier: ActivityStepIdentifier

    /**
     * @ref [city.smartb.registry.program.f2.activity.domain.model.ActivityStepDTO.name]
     */
    val name: String

    /**
     * @ref [city.smartb.registry.program.f2.activity.domain.model.ActivityStepDTO.description]
     */
    val description: String?

    /**
     * @ref [city.smartb.registry.program.f2.activity.domain.model.ActivityStepDTO.hasConcept]
     */
    val hasConcept: InformationConcept?
}

/**
 * @d2 inherit
 */
@Serializable
data class ActivityStepCreateCommandDTOBase(
    override val identifier: ActivityStepIdentifier,
    override val name: String,
    override val description: String?,
    override val hasConcept: InformationConcept?
): ActivityStepCreateCommandDTO

/**
 * @d2 event
 * @parent [ActivityStepCreateFunction]
 */
@JsExport
@JsName("ActivityStepCreatedEventDTO")
interface ActivityStepCreatedEventDTO: Event {
    /**
     * Identifier of the created activity step.
     */
    val identifier: ActivityStepIdentifier
}

/**
 * @d2 inherit
 */
data class ActivityStepCreatedEventDTOBase(
    override val identifier: ActivityStepIdentifier
): ActivityStepCreatedEventDTO
