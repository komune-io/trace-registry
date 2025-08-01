//package io.komune.registry.f2.dcs.domain.model
//
//import cccev.dsl.model.InformationConceptIdentifier
//import cccev.dsl.model.RequirementIdentifier
//import kotlin.js.JsExport
//import kotlinx.serialization.Serializable
//
//@JsExport
//interface SectionConditionDTO {
//    val identifier: RequirementIdentifier
//    val type: String
//    val expression: String
//    val dependencies: List<InformationConceptIdentifier>
//    val message: String?
//}
//
//@Serializable
//data class SectionCondition(
//    override val identifier: RequirementIdentifier,
//    override val type: String,
//    override val expression: String,
//    override val dependencies: List<InformationConceptIdentifier>,
//    override val message: String?
//): SectionConditionDTO
