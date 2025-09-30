@file:JsExport
package io.komune.sel.evaluator.expressions

import io.komune.sel.evaluator.SelExpressionKey
import kotlin.js.JsExport
import kotlin.math.log
import kotlin.math.pow

object ArithmeticExpressions: List<ArithmeticExpression> by listOf(
    ArithmeticExpression("+", Double::plus, Long::plus, minArguments = 2, defaultFirstArgument = 0),
    ArithmeticExpression("-", Double::minus, Long::minus, minArguments = 2, defaultFirstArgument = 0),
    ArithmeticExpression("*", Double::times, Long::times, minArguments = 2, defaultFirstArgument = 1),
    ArithmeticExpression("/", Double::div, minArguments = 2, maxArguments = 2),
    ArithmeticExpression("%", Double::rem, minArguments = 2, maxArguments = 2),
    ArithmeticExpression("pow", Double::pow, minArguments = 2, maxArguments = 2),
    ArithmeticExpression("log", { base, x -> log(x, base)}, minArguments = 2, maxArguments = 2, defaultFirstArgument = 10)
)

class ArithmeticExpression(
    override val key: SelExpressionKey,
    private val reducerDouble: (Double, Double) -> Double,
    private val reducerLong: ((Long, Long) -> Long)? = null,
    private val initialValue: Number? = null,
    override val minArguments: Int = 0,
    override val maxArguments: Int = Int.MAX_VALUE,
    override val defaultFirstArgument: Number? = null,
): MathExpression() {

    private val forcedDoubleReducer = { a: Number, b: Number -> reducerDouble(a.toDouble(), b.toDouble()) }
    private val forcedLongReducer = reducerLong?.let {{ a: Number, b: Number -> it(a.toLong(), b.toLong()) }}

    override fun evaluateArguments(arguments: List<Number>): Any? {
        val anyFloat = initialValue == null || initialValue.isFloat() || arguments.any { it is Float || it is Double }

        val reducer = if (anyFloat) {
            forcedDoubleReducer
        } else {
            forcedLongReducer ?: forcedDoubleReducer
        }

        if (initialValue == null) {
            if (arguments.isEmpty()) {
                return null
            }
            return arguments.reduce(reducer)
        }

        return arguments.fold(initialValue, reducer)
    }
}
