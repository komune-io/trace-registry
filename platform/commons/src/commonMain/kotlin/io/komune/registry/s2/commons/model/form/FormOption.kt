package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormOptionDTO {
    val key: String
    val label: String?
    val color: String?
}

@Serializable
data class FormOption(
    override val key: String,
    override val label: String?,
    override val color: String?
) : FormOptionDTO
