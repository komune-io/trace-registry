@file:Suppress("FunctionOnlyReturningConstant")
package io.komune.registry.api.commons.exception

import kotlin.js.JsExport

@JsExport
object ExceptionCodes {
    // asset
    fun negativeTransaction() = 1000
    fun notEnoughAssets() = 1001
    fun granularityTooSmall() = 1002
}
