package io.komune.sel.evaluator.expressions

import io.komune.sel.evaluator.SelExpressionKey

object NumericComparisonExpressions : List<NumericComparisonExpression> by listOf(
    NumericComparisonExpression("<") { a, b -> a < b },
    NumericComparisonExpression("<=") { a, b -> a <= b },
    NumericComparisonExpression(">") { a, b -> a > b },
    NumericComparisonExpression(">=") { a, b -> a >= b }
)

class NumericComparisonExpression(
    override val key: SelExpressionKey,
    private val compare: (Double, Double) -> Boolean,
): MathExpression() {
    override val minArguments: Int = 2
    override val maxArguments: Int = Int.MAX_VALUE

    override fun evaluateArguments(arguments: List<Number>): Any? {
        arguments.forEachIndexed { i, arg ->
            if (i == arguments.size - 1) {
                return true // Last argument, no next to compare
            }

            val nextArg = arguments[i + 1]
            if (!compare(arg.toDouble(), nextArg.toDouble())) {
                return false
            }
        }

        return true
    }
}
