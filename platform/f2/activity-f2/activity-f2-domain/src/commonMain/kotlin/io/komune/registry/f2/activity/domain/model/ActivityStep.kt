package io.komune.registry.f2.activity.domain.model

import cccev.dsl.model.Evidence
import cccev.dsl.model.EvidenceDTO
import cccev.dsl.model.InformationConcept
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

/**
 * @d2 hidden
 * @visual json "S42"
 */
typealias ActivityStepIdentifier = String

/**
 * TODO describe all properties with examples
 * @d2 model
 * @parent [import io.komune.registry.f2.activity.domain.D2ActivityF2Page]
 * @order 100
 */
@JsExport
interface ActivityStepDTO {
    val id: ActivityId
    val identifier: ActivityStepIdentifier
    val name: String?
    val description: String?
    val hasConcept: InformationConcept?
    val value: String?
    val evidences: List<EvidenceDTO> // TODO
    val completed: Boolean
}

@Serializable
class ActivityStep(
    override val id: ActivityId,
    override val identifier: ActivityStepIdentifier,
    override val name: String?,
    override val description: String?,
    override val hasConcept: InformationConcept?,
    override val value: String?,
    override val evidences: List<Evidence>,
    override val completed: Boolean,
): ActivityStepDTO
