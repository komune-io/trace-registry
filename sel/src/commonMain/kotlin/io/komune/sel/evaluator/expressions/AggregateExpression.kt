package io.komune.sel.evaluator.expressions

import io.komune.sel.evaluator.SelExpressionKey

object AggregateExpressions: List<AggregateExpression> by listOf(
    AggregateExpression("avg", Iterable<Double>::average, minArguments = 1),
    AggregateExpression("min", Iterable<Double>::min, minArguments = 1),
    AggregateExpression("max", Iterable<Double>::max, minArguments = 1),
)

class AggregateExpression(
    override val key: SelExpressionKey,
    private val aggregate: (Iterable<Double>) -> Number,
    override val minArguments: Int = 0,
    override val maxArguments: Int = Int.MAX_VALUE,
): MathExpression() {

    override fun evaluateArguments(arguments: List<Number>): Any? {
        return aggregate(arguments.map { it.toDouble() })
    }
}
