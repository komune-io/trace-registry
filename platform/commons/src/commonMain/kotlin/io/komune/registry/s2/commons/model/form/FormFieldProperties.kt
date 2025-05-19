package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormFieldPropertiesDTO {
    val multiline: Boolean?
    val rows: Int?
    val textFieldType: TextFieldType?
    val fileTypesAllowed: List<String>?
    val filters: String?
}

@Serializable
data class FormFieldProperties(
    override val multiline: Boolean?,
    override val rows: Int?,
    override val textFieldType: TextFieldType?,
    override val fileTypesAllowed: List<String>?,
    override val filters: String?
) : FormFieldPropertiesDTO
