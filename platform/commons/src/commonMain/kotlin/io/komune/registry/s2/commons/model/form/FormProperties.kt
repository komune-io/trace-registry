package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormPropertiesDTO {
    val readOnly: Boolean?
}

@Serializable
data class FormProperties(
    override val readOnly: Boolean?,
) : FormPropertiesDTO
