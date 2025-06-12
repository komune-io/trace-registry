package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormSectionDTO {
    val id: String
    val label: String?
    val fields: List<FormFieldDTO>
    val conditions: List<FormConditionDTO>?
    val properties: Map<String, Any>?
}

@Serializable
data class FormSection(
    override val id: String,
    override val label: String?,
    override val fields: List<FormField>,
    override val conditions: List<FormCondition>?,
    override val properties: Map<String, String>?
) : FormSectionDTO
