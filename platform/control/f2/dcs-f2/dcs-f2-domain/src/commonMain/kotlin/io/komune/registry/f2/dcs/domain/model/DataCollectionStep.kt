//package io.komune.registry.f2.dcs.domain.model
//
//import cccev.dsl.model.RequirementIdentifier
//import kotlin.js.JsExport
//import kotlinx.serialization.Serializable
//
//@JsExport
//interface DataCollectionStepDTO {
//    val identifier: RequirementIdentifier
//    val label: String
//    val description: String?
//    val sections: List<DataSectionDTO>
//    val properties: Map<String, String>?
//}
//
//@Serializable
//data class DataCollectionStep(
//    override val identifier: RequirementIdentifier,
//    override val label: String,
//    override val description: String?,
//    override val sections: List<DataSection>,
//    override val properties: Map<String, String>?
//): DataCollectionStepDTO
