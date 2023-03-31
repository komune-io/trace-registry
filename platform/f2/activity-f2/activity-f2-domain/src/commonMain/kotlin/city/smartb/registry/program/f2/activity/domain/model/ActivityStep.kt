package city.smartb.registry.program.f2.activity.domain.model

import kotlin.js.JsExport
import kotlinx.serialization.Serializable

@JsExport
interface ActivityStepDTO {
    val identifier: RequirementIdentifier
    val name: String?
    val description: String?
    val value: String?
    val file: String?
    val completed: Boolean
}

@JsExport
@Serializable
class ActivityStep(
    override val identifier: RequirementIdentifier,
    override val name: String?,
    override val description: String?,
    override val value: String?,
    override val file: String?,
    override val completed: Boolean,
): ActivityStepDTO
