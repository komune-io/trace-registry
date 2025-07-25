package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey
import io.komune.sel.isTruthy

object IfExpression: SelExpression {
    override val key: SelExpressionKey = "if"

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        if (arguments.size < 3) {
            throw SelEvaluationException(
                "Operation '$key' requires at least 3 argument, found: ${arguments.size}.",
                "$jsonPath[${arguments.size}]"
            )
        }
        if (arguments.size % 2 == 0) {
            throw SelEvaluationException(
                "Operation '$key' requires an odd number of arguments, found: ${arguments.size}.",
                "$jsonPath[${arguments.size}]"
            )
        }

        for (i in 0 until arguments.size - 1 step 2) {
            val conditionNode = arguments[i]
            val conditionResult = evaluator.evaluate(conditionNode, data, "$jsonPath[$i]").isTruthy()
            if (conditionResult) {
                return evaluator.evaluate(arguments[i + 1], data, "$jsonPath[${i + 1}]")
            }
        }

        // If no condition matched, return the last argument as the default case
        return evaluator.evaluate(arguments.last(), data, "$jsonPath[${arguments.size - 1}]")
    }
}
