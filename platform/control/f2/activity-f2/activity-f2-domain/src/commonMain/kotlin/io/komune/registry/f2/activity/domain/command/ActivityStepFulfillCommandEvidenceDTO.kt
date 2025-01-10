package io.komune.registry.f2.activity.domain.command

import cccev.dsl.model.CertificationId
import f2.dsl.cqrs.Event
import f2.dsl.fnc.F2Function
import io.komune.fs.s2.file.domain.model.FilePath
import io.komune.fs.s2.file.domain.model.FilePathDTO
import io.komune.registry.f2.activity.domain.model.ActivityFile
import io.komune.registry.f2.activity.domain.model.ActivityIdentifier
import io.komune.registry.f2.activity.domain.model.ActivityStepIdentifier
import kotlin.js.JsExport
import kotlin.js.JsName
import kotlinx.serialization.Serializable

/**
 * Fulfill an activity step by providing a value.
 * @d2 function
 * @parent [io.komune.registry.f2.activity.domain.D2ActivityF2Page]
 * @order 110
 */
typealias ActivityStepEvidenceFulfillFunction
        = F2Function<
            Pair<ActivityStepEvidenceFulfillCommandDTOBase, ActivityFile>, ActivityStepEvidenceFulfilledEventDTOBase
        >



/**
 * @d2 command
 * @parent [ActivityStepEvidenceFulfillFunction]
 */
@JsExport
@JsName("ActivityStepEvidenceFulfillCommandDTO")
interface ActivityStepEvidenceFulfillCommandDTO {
    /**
     * Identifier of the certification containing the activities to fulfill.
     */
    val certificationId: CertificationId

    /**
     * Identifier of the activity step to fulfill.
     */
    val identifier: ActivityStepIdentifier
    /**
     * Evidence is private.
     * @example ""
     */
    val url: String?
    /**
     * Evidence is private.
     * @example ""
     */
    val isPublic: Boolean?
}

/**
 * @d2 inherit
 */
@Serializable
data class ActivityStepEvidenceFulfillCommandDTOBase(
    override val certificationId: CertificationId,
    override val identifier: ActivityStepIdentifier,
    override val url: String? = null,
    override val isPublic: Boolean? = false,
): ActivityStepEvidenceFulfillCommandDTO

/**
 * @d2 event
 * @parent [ActivityStepEvidenceFulfillFunction]
 */
@JsExport
@JsName("ActivityStepEvidenceFulfilledEventDTO")
interface ActivityStepEvidenceFulfilledEventDTO: Event {
    /**
     * Identifier of the fulfilled activity step.
     */
    val identifier: ActivityStepIdentifier

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
data class ActivityStepEvidenceFulfilledEventDTOBase(
    override val identifier: ActivityIdentifier,
    override val file: FilePath?
): ActivityStepEvidenceFulfilledEventDTO
