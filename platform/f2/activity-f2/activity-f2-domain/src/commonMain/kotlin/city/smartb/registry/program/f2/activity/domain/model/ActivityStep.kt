package city.smartb.registry.program.f2.activity.domain.model

import cccev.f2.concept.domain.model.InformationConceptDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface ActivityStepDTO {
    val id: ActivityId
    val identifier: ActivityIdentifier
    val name: String?
    val description: String?
    val hasConcept: InformationConceptDTO?
    val value: String?
    val file: String?
    val completed: Boolean
}

@Serializable
class ActivityStep(
    override val id: ActivityId,
    override val identifier: ActivityIdentifier,
    override val name: String?,
    override val description: String?,
    override val hasConcept: InformationConceptDTOBase?,
    override val value: String?,
    override val file: String?,
    override val completed: Boolean,
): ActivityStepDTO
