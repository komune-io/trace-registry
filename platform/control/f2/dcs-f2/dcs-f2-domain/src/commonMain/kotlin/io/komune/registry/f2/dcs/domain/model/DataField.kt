//package io.komune.registry.f2.dcs.domain.model
//
//import cccev.dsl.model.InformationConceptIdentifier
//import kotlin.js.JsExport
//import kotlinx.serialization.Serializable
//
//@JsExport
//interface DataFieldDTO {
//    val name: InformationConceptIdentifier
//    val label: String
//    val type: String
//    val dataType: String
//    val required: Boolean
//    val options: List<DataFieldOptionDTO>?
//    val conditions: List<DataConditionDTO>?
//    val properties: Map<String, String>?
//}
//
//@Serializable
//data class DataField(
//    override val name: InformationConceptIdentifier,
//    override val label: String,
//    override val type: String,
//    override val dataType: String,
//    override val required: Boolean,
//    override val options: List<DataFieldOption>?,
//    override val conditions: List<DataCondition>?,
//    override val properties: Map<String, String>?
//): DataFieldDTO
