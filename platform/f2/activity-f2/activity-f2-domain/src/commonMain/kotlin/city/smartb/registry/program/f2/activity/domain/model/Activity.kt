package city.smartb.registry.program.f2.activity.domain.model

import cccev.dsl.model.Code
import cccev.dsl.model.InformationConcept
import cccev.f2.concept.domain.model.InformationConceptDTO
import cccev.f2.concept.domain.model.InformationConceptDTOBase

import kotlin.js.JsExport
import kotlinx.serialization.Serializable


/**
 * [{
 * 		"identifier": "P0",
 * 		"name": "P0 - LOI",
 * 		"hasQualifiedRelation": ["P1"]
 * 	},
 * 	{
 * 		"identifier": "P1",
 * 		"name": "P1 - Eligibility",
 * 		"hasRequirement": ["R1", "R2"]
 * 	},
 * 	{
 * 		"identifier": "R1",
 * 		"name": "Survey of eligibility",
 * 		"hasQualifiedRelation": ["R1"]
 * 	},
 * 	{
 * 		"identifier": "R2",
 * 		"name": "Identification"
 * 	}, {
 * 		"identifier": "P2",
 * 		"hasRequirement": ["R1"]
 * 	}]
 */
typealias ActivityId = String
typealias ActivityIdentifier = String
@JsExport
interface ActivityDTO {
    val identifier: ActivityIdentifier
    val name: String?
    val type: String?
    val description: String?
    val hasQualifiedRelation: Array<ActivityIdentifier>
    val hasRequirement: Array<out ActivityDTO>
    val progression: Double
}

@JsExport
@Serializable
data class Activity(
    override val identifier: ActivityIdentifier,
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
