package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormFieldPropertiesDTO {
    val caption: String?
    val chipLimit: Int?
    val fileTypesAllowed: List<String>?
    val filters: String?
    val fullRow: Boolean?
    val multiline: Boolean?
    val multiple: Boolean?
    val options: List<FormOptionDTO>?
    val rows: Int?
    val textFieldType: TextFieldType?
}

@Serializable
data class FormFieldProperties(
    override val caption: String?,
    override val chipLimit: Int?,
    override val fileTypesAllowed: List<String>?,
    override val filters: String?,
    override val fullRow: Boolean?,
    override val multiline: Boolean?,
    override val multiple: Boolean?,
    override val options: List<FormOption>?,
    override val rows: Int?,
    override val textFieldType: TextFieldType?,
) : FormFieldPropertiesDTO
