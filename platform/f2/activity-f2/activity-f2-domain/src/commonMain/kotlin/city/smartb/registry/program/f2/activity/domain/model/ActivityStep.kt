package city.smartb.registry.program.f2.activity.domain.model

import cccev.dsl.model.InformationConcept
import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface ActivityStepDTO {
    val identifier: ActivityIdentifier
    val name: String?
    val description: String?
    val hasConcept: InformationConcept?
    val value: String?
    val file: String?
    val completed: Boolean
}

@JsExport
@Serializable
class ActivityStep(
    override val identifier: ActivityIdentifier,
    override val name: String?,
    override val description: String?,
    override val hasConcept: InformationConcept?,
    override val value: String?,
    override val file: String?,
    override val completed: Boolean,
): ActivityStepDTO
