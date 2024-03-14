package cccev.f2.unit.domain.model

import cccev.core.unit.model.DataUnitType
import kotlin.js.JsExport
import kotlin.js.JsName

@JsExport
@JsName("DataUnitTypeValues")
object DataUnitTypeValues {
    fun boolean() = DataUnitType.BOOLEAN.name
    fun date() = DataUnitType.DATE.name
    fun number() = DataUnitType.NUMBER.name
    fun string() = DataUnitType.STRING.name
}
