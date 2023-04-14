package city.smartb.registry.program.f2.activity.domain.model

import cccev.dsl.model.Code
import cccev.s2.request.domain.model.RequestId
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

/**
 * @d2 hidden
 * @visual json "145f687e-8791-4595-a0f8-7a0824d39190"
 */
typealias ActivityId = String

/**
 * @d2 hidden
 * @visual json "A666"
 */
typealias ActivityIdentifier = String

/**
 * TODO describe all properties with examples
 * @d2 model
 * @parent [city.smartb.registry.program.f2.activity.domain.D2ActivityF2Page]
 * @order 10
 */
@JsExport
interface ActivityDTO {
    val identifier: ActivityIdentifier
    val requestId: RequestId?
    val name: String?
    val type: String?
    val description: String?
    val hasQualifiedRelation: Array<ActivityIdentifier>

    /**
     * @example [[]]
     */
    val hasRequirement: Array<out ActivityDTO>
    val progression: Double
}

@JsExport
@Serializable
data class Activity(
    override val identifier: ActivityIdentifier,
    override val requestId: RequestId?,
    override val name: String?,
    override val type: String?,
    override val description: String?,
    override val hasQualifiedRelation: Array<ActivityIdentifier>,
    override val hasRequirement: Array<Activity>,
    override val progression: Double,
): ActivityDTO

sealed class RequirementType(val identifier: String): Code {
    object Activity: RequirementType("activity")
    object Step: RequirementType("step")
}
