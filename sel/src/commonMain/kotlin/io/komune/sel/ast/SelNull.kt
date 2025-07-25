@file:JsExport
package io.komune.sel.ast

import kotlin.js.JsExport

object SelNull: SelPrimitive<Any?> {
    override val value: Any? = null
}
