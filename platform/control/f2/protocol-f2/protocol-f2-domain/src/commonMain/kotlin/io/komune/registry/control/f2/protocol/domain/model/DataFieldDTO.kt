package io.komune.registry.control.f2.protocol.domain.model

import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface DataFieldDTO {
    val name: InformationConceptIdentifier
    val label: String?
    val type: String
    val description: String?
    val helperText: String?
    val unit: DataUnitRefDTO
    val required: Boolean
    val options: List<DataFieldOptionDTO>?
    val conditions: List<DataConditionDTO>?
    val properties: String?
}

@Serializable
data class DataField(
    override val name: InformationConceptIdentifier,
    override val label: String?,
    override val type: String,
    override val description: String?,
    override val helperText: String?,
    override val unit: DataUnitRef,
    override val required: Boolean,
    override val options: List<DataFieldOption>?,
    override val conditions: List<DataCondition>?,
    override val properties: String?
): DataFieldDTO
