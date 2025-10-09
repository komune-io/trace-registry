package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormSectionDTO {
    val id: String
    val label: String?
    val description: String?
    val fields: List<FormFieldDTO>
    val conditions: List<FormConditionDTO>?
    val display: String?
    val properties: FormSectionPropertiesDTO?
}

@Serializable
data class FormSection(
    override val id: String,
    override val label: String?,
    override val description: String?,
    override val fields: List<FormField>,
    override val conditions: List<FormCondition>?,
    override val display: String?,
    override val properties: FormSectionProperties?
) : FormSectionDTO
