package city.smartb.registry.f2.dcs.domain.model

import kotlin.js.JsExport

@JsExport
object DataFieldTypeValues {
    fun textField() = "textField"
    fun select() = "select"
    fun autoComplete() = "autoComplete"
    fun checkBox() = "checkBox"
    fun datePicker() = "datePicker"
    fun radioChoices() = "radioChoices"
    fun multiChoices() = "multiChoices"
    fun dropPicture() = "dropPicture"
    fun documentHandler() = "documentHandler"
    fun map() = "map"

    val all = setOf(
        textField(),
        select(),
        autoComplete(),
        checkBox(),
        datePicker(),
        radioChoices(),
        multiChoices(),
        dropPicture(),
        documentHandler(),
        map(),
    )
}
