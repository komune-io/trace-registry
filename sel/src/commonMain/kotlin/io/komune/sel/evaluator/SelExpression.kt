@file:JsExport
package io.komune.sel.evaluator

import io.komune.sel.ast.SelArray
import kotlin.js.JsExport

typealias SelExpressionKey = String

interface SelExpression {
    val key: SelExpressionKey
    fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any?
}
