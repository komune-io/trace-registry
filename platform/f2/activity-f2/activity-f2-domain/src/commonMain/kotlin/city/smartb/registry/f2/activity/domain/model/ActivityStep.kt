package city.smartb.registry.f2.activity.domain.model

import cccev.f2.concept.domain.model.InformationConceptDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import cccev.s2.certification.domain.model.Evidence
import cccev.s2.certification.domain.model.EvidenceDTO
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
 * @parent [city.smartb.registry.f2.activity.domain.D2ActivityF2Page]
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
    val evidences: List<EvidenceDTO>
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
    override val evidences: List<Evidence>,
    override val completed: Boolean,
): ActivityStepDTO
