@file:JsExport
package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey
import io.komune.sel.isTruthy
import kotlin.js.JsExport

object LogicExpressions : List<LogicExpression> by listOf(
    LogicExpression(true),
    LogicExpression(false)
)

class LogicExpression(
    private val isAnd: Boolean
): SelExpression {

    override val key: SelExpressionKey = if (isAnd) "and" else "or"

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        if (arguments.size < 1) {
            throw SelEvaluationException("Operation '$key' requires at least 1 arguments, found ${arguments.size}.", jsonPath)
        }

        return if (isAnd) {
            arguments.withIndex().all { (i, arg) -> evaluator.evaluate(arg, data, "$jsonPath[$i]").isTruthy() }
        } else {
            arguments.withIndex().any { (i, arg) -> evaluator.evaluate(arg, data, "$jsonPath[$i]").isTruthy() }
        }

    }
}
