//package io.komune.registry.f2.dcs.domain.model
//
//import cccev.dsl.model.InformationConceptIdentifier
//import cccev.dsl.model.RequirementIdentifier
//import kotlin.js.JsExport
//import kotlinx.serialization.Serializable
//
//@JsExport
//interface DataConditionDTO {
//    val identifier: RequirementIdentifier
//    val type: String
//    val expression: String
//    val dependencies: List<InformationConceptIdentifier>?
//    val error: String?
//}
//
//@Serializable
//data class DataCondition(
//    override val identifier: RequirementIdentifier,
//    override val type: String,
//    override val expression: String,
//    override val dependencies: List<InformationConceptIdentifier>?,
//    override val error: String?
//): DataConditionDTO
