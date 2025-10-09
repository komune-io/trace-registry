package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormSectionPropertiesDTO {
    val disableGridTemplate: Boolean?
    val icon: String?
}

@Serializable
data class FormSectionProperties(
    override val disableGridTemplate: Boolean?,
    override val icon: String?,
) : FormSectionPropertiesDTO
