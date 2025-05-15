package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormFieldPropertiesDTO {
    val multiline: Boolean?
    val rows: Int?
    val number: Boolean?
    val fileTypesAllowed: List<String>?
    val filters: String?
}

@Serializable
data class FormFieldProperties(
    override val multiline: Boolean?,
    override val rows: Int?,
    override val number: Boolean?,
    override val fileTypesAllowed: List<String>?,
    override val filters: String?
) : FormFieldPropertiesDTO
