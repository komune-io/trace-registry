package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormFieldDTO {
    val name: String
    val label: String?
    val type: String
    val required: Boolean
    val description: String?
    val helperText: String?
    val options: List<FormOptionDTO>?
    val conditions: List<FormConditionDTO>?
    val properties: FormFieldPropertiesDTO?
}

@Serializable
data class FormField(
    override val name: String,
    override val label: String?,
    override val type: String,
    override val required: Boolean = false,
    override val description: String?,
    override val helperText: String?,
    override val options: List<FormOption>?,
    override val conditions: List<FormCondition>?,
    override val properties: FormFieldProperties?
) : FormFieldDTO
