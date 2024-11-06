package io.komune.registry.f2.activity.domain.command

import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.registry.f2.activity.domain.model.ActivityIdentifier
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Create an activity.
 * @d2 function
 * @parent [import io.komune.registry.f2.activity.domain.D2ActivityF2Page]
 * @order 10
 */
typealias ActivityCreateFunction = F2Function<ActivityCreateCommandDTOBase, ActivityCreatedEventDTOBase>

/**
 * @d2 command
 * @parent [ActivityCreateFunction]
 */
@JsExport
@JsName("ActivityCreateCommandDTO")
interface ActivityCreateCommandDTO {
    /**
     * Custom identifier of the new activity.
     */
    val identifier: ActivityIdentifier

    /**
     * @ref [import io.komune.registry.f2.activity.domain.model.ActivityDTO.name]
     */
    val name: String

    /**
     * @ref [import io.komune.registry.f2.activity.domain.model.ActivityDTO.description]
     */
    val description: String?

    /**
     * Sub-activities of the activity.
     * @example [[]]
     */
    val hasActivity: Array<out ActivityCreateCommandDTO>?

    /**
     * Steps to fulfill in order for the activity to be completed.
     */
    val hasStep: Array<out ActivityStepCreateCommandDTO>?
}

/**
 * @d2 inherit
 */
@Serializable
data class ActivityCreateCommandDTOBase(
    override val identifier: ActivityIdentifier,
    override val name: String,
    override val description: String?,
    override val hasActivity: Array<ActivityCreateCommandDTOBase>?,
    override val hasStep: Array<ActivityStepCreateCommandDTOBase>?
): ActivityCreateCommandDTO

/**
 * @d2 event
 * @parent [ActivityCreateFunction]
 */
@JsExport
@JsName("ActivityCreatedEventDTO")
interface ActivityCreatedEventDTO: Event {
    /**
     * Identifier of the created activity.
     */
    val identifier: ActivityIdentifier
}

/**
 * @d2 inherit
 */
data class ActivityCreatedEventDTOBase(
    override val identifier: ActivityIdentifier,
): ActivityCreatedEventDTO
