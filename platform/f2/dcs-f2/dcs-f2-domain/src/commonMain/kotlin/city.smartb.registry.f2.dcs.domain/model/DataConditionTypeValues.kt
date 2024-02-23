package city.smartb.registry.f2.dcs.domain.model

import kotlin.js.JsExport

@JsExport
object DataConditionTypeValues {
    fun display() = "display"
    fun validator() = "validator"

    val all = setOf(
        display(),
        validator()
    )
}
