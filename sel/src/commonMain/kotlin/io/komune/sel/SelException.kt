@file:JsExport
package io.komune.sel

import kotlin.js.JsExport

open class SelException(
    message: String,
    val jsonPath: String,
    cause: Throwable? = null
): Exception("$message (Path: $jsonPath)", cause)
