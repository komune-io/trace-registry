package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormDTO {
    val sections: List<FormSectionDTO>
    val properties: FormPropertiesDTO?
    val initialValues: Map<String, String>?
}

@Serializable
data class Form(
    override val sections: List<FormSection> = emptyList(),
    override val properties: FormProperties? = null,
    override val initialValues: Map<String, String>? = null
) : FormDTO
