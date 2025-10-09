package io.komune.registry.s2.commons.model.form

import io.komune.registry.s2.commons.model.tuto.TutorialDTO
import io.komune.registry.s2.commons.model.tuto.TutorialDTOBase
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormDTO {
    val sections: List<FormSectionDTO>
    val properties: FormPropertiesDTO?
    val initialValues: Map<String, String>?
    val tutorial: TutorialDTO?
}

@Serializable
data class Form(
    override val sections: List<FormSection> = emptyList(),
    override val properties: FormProperties? = null,
    override val initialValues: Map<String, String>? = null,
    override val tutorial: TutorialDTOBase? = null,
) : FormDTO
