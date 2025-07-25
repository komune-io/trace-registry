package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey

object EqualityExpressions: List<EqualityExpression> by listOf(
    EqualityExpression("==", true),
    EqualityExpression("!=", false)
)

class EqualityExpression(
    override val key: SelExpressionKey,
    private val expected: Boolean
): SelExpression {

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        if (arguments.size != 2) {
            throw SelEvaluationException("Operation '$key' requires exactly 2 arguments, found ${arguments.size}.", jsonPath)
        }

        val left = evaluator.evaluate(arguments[0], data, "$jsonPath[0]")
        val right = evaluator.evaluate(arguments[1], data, "$jsonPath[1]")

        return (left == right) == expected
    }
}
