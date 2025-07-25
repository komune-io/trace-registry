package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey
import io.komune.sel.isTruthy

object NotExpressions: List<NotExpression> by listOf(
    NotExpression(false),
    NotExpression(true)
)

class NotExpression(
    private val isDoubleNot: Boolean
): SelExpression {
    override val key: SelExpressionKey = if (isDoubleNot) "!!" else "!"

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        if (arguments.size != 1) {
            throw SelEvaluationException("Operation '$key' requires exactly 1 argument, found ${arguments.size}.", jsonPath)
        }

        val result = evaluator.evaluate(arguments[0], data, "$jsonPath[0]").isTruthy()

        return if (isDoubleNot) result else !result
    }
}
