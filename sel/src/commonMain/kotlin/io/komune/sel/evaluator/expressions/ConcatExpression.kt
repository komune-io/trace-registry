package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey

object ConcatExpression: SelExpression {
    override val key: SelExpressionKey = "concat"

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        if (arguments.isEmpty()) {
            return null
        }

        val evaluatedArguments = evaluator.evaluateArray(arguments, data, jsonPath)

        return evaluatedArguments.joinToString(separator = "") { it.stringify() }
    }

    private fun Any?.stringify(): String {
        return when (this) {
            is Number -> toString().removeSuffix(".0")
            is Iterable<*> -> joinToString(separator = ",", prefix = "[", postfix = "]") { it.stringify() }
            is Array<*> -> joinToString(separator = ",", prefix = "[", postfix = "]") { it.stringify() }
            else -> toString()
        }
    }
}
