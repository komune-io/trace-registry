package city.smartb.registry.program.f2.activity.domain.command

import cccev.s2.certification.domain.model.CertificationIdentifier
import city.smartb.fs.s2.file.domain.model.FilePath
import city.smartb.fs.s2.file.domain.model.FilePathDTO
import city.smartb.registry.program.f2.activity.domain.model.ActivityIdentifier
import city.smartb.registry.program.f2.activity.domain.model.ActivityStepIdentifier
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import kotlinx.serialization.Serializable
import kotlin.js.JsExport
import kotlin.js.JsName

/**
 * Fulfill an activity step by providing a value.
 * @d2 function
 * @parent [city.smartb.registry.program.f2.activity.domain.D2ActivityF2Page]
 * @order 110
 */
typealias ActivityStepFulfillFunction = F2Function<ActivityStepFulfillCommandDTOBase, ActivityStepFulfilledEventDTOBase>

/**
 * @d2 command
 * @parent [ActivityStepFulfillFunction]
 */
@JsExport
@JsName("ActivityStepFulfillCommandDTO")
interface ActivityStepFulfillCommandDTO {
    /**
     * Identifier of the certification containing the activities to fulfill.
     */
    val certificationIdentifier: CertificationIdentifier

    /**
     * Identifier of the activity step to fulfill.
     */
    val identifier: ActivityStepIdentifier

    /**
     * Value provided for the activity step.
     * @example "blblbl"
     */
    val value: String?
}

/**
 * @d2 inherit
 */
@Serializable
data class ActivityStepFulfillCommandDTOBase(
    override val certificationIdentifier: CertificationIdentifier,
    override val identifier: ActivityStepIdentifier,
    override val value: String?,
): ActivityStepFulfillCommandDTO

/**
 * @d2 event
 * @parent [ActivityStepFulfillFunction]
 */
@JsExport
@JsName("ActivityStepFulfilledEventDTO")
interface ActivityStepFulfilledEventDTO: Event {
    /**
     * Identifier of the fulfilled activity step.
     */
    val identifier: ActivityStepIdentifier

    /**
     * Value provided for the activity step.
     * @example [ActivityStepFulfillCommandDTO.value]
     */
    val value: String?

    /**
     * Path to the file provided as evidence to support the given value.
     * @example null
     */
    val file: FilePathDTO?
}

/**
 * @d2 inherit
 */
@Serializable
data class ActivityStepFulfilledEventDTOBase(
    override val identifier: ActivityIdentifier,
    override val value: String?,
    override val file: FilePath?
): ActivityStepFulfilledEventDTO
