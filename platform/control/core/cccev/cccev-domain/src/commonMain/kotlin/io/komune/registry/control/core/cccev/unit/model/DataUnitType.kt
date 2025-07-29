package io.komune.registry.control.core.cccev.unit.model

import io.komune.registry.control.core.cccev.unit.D2DataUnitPage
import kotlin.js.JsExport

/**
 * Type of a data. <br/>
 * Can be either of: BOOLEAN, DATE, NUMBER, STRING
 * @d2 model
 * @parent [D2DataUnitPage]
 * @order 20
 */
@JsExport
enum class DataUnitType {
    BOOLEAN, NUMBER, STRING
}
