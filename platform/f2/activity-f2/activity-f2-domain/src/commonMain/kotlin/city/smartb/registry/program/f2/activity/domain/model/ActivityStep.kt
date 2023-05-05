package city.smartb.registry.program.f2.activity.domain.model

import cccev.dsl.model.Evidence
import cccev.dsl.model.EvidenceDTO
import cccev.f2.concept.domain.model.InformationConceptDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 hidden
 * @visual json "S42"
 */
typealias ActivityStepIdentifier = String

/**
 * TODO describe all properties with examples
 * @d2 model
 * @parent [city.smartb.registry.program.f2.activity.domain.D2ActivityF2Page]
 * @order 100
 */
@JsExport
interface ActivityStepDTO {
    val id: ActivityId
    val identifier: ActivityStepIdentifier
    val name: String?
    val description: String?
    val hasConcept: InformationConceptDTO?
    val value: String?
    val files: List<EvidenceDTO>?
    val completed: Boolean
}

@Serializable
class ActivityStep(
    override val id: ActivityId,
    override val identifier: ActivityStepIdentifier,
    override val name: String?,
    override val description: String?,
    override val hasConcept: InformationConceptDTOBase?,
    override val value: String?,
    override val files: List<Evidence>?,
    override val completed: Boolean,
): ActivityStepDTO
