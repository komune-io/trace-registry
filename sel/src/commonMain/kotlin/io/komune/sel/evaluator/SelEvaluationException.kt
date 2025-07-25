@file:JsExport
package io.komune.sel.evaluator

import io.komune.sel.SelException
import kotlin.js.JsExport

class SelEvaluationException(
    message: String,
    jsonPath: String,
    cause: Throwable? = null
): SelException(message, jsonPath, cause)
