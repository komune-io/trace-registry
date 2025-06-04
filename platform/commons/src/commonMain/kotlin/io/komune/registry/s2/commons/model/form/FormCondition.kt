package io.komune.registry.s2.commons.model.form

import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface FormConditionDTO {
    val type: FormConditionType
    val expression: String
    val error: String?
    val message: String?
}

@Serializable
data class FormCondition(
    override val type: FormConditionType,
    override val expression: String,
    override val error: String?,
    override val message: String?
) : FormConditionDTO

@Suppress("EnumEntryName", "EnumNaming")
@JsExport
enum class FormConditionType {
    display,
    enable,
    validator,
    info,
    error,
    warning
}
