@file:JsExport
package io.komune.sel.ast

import kotlin.js.JsExport

sealed interface SelPrimitive<T>: SelNode {
    val value: T
}

data class SelString(override val value: String): SelPrimitive<String>

data class SelNumber(override val value: Number): SelPrimitive<Number>

data class SelBoolean(
    override val value: Boolean
): SelPrimitive<Boolean> {
    companion object {
        val TRUE = SelBoolean(true)
        val FALSE = SelBoolean(false)
    }
}
