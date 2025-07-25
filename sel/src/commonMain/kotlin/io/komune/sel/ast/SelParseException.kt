@file:JsExport
package io.komune.sel.ast

import io.komune.sel.SelException
import kotlin.js.JsExport

class SelParseException(
    message: String,
    jsonPath: String,
    cause: Throwable? = null
): SelException(message, jsonPath, cause)
