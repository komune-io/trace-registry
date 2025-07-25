@file:JsExport
package io.komune.sel.evaluator

import io.komune.sel.SelException
import io.komune.sel.evaluator.expressions.AggregateExpressions
import io.komune.sel.evaluator.expressions.ArithmeticExpressions
import io.komune.sel.evaluator.expressions.ArrayBooleanExpressions
import io.komune.sel.evaluator.expressions.ArrayFilterExpression
import io.komune.sel.evaluator.expressions.ArrayMapExpression
import io.komune.sel.evaluator.expressions.ConcatExpression
import io.komune.sel.evaluator.expressions.EqualityExpressions
import io.komune.sel.evaluator.expressions.IfExpression
import io.komune.sel.evaluator.expressions.InExpression
import io.komune.sel.evaluator.expressions.LogicExpressions
import io.komune.sel.evaluator.expressions.NotExpressions
import io.komune.sel.evaluator.expressions.NumericComparisonExpressions
import io.komune.sel.evaluator.expressions.VariableExpression
import kotlin.js.JsExport
import kotlin.js.JsName

private val nativeExpressions = mutableMapOf<String, SelExpression>()

object SelExpressionNativeDirectory: Map<SelExpressionKey, SelExpression> by nativeExpressions {
    fun register(expression: SelExpression) {
        if (nativeExpressions.containsKey(expression.key)) {
            throw SelException(
                "Expression with key '${expression.key}' is already registered.",
                expression.key
            )
        }
        nativeExpressions[expression.key] = expression
    }

    @JsName("registerAll")
    fun register(expressions: Iterable<SelExpression>) {
        expressions.forEach { register(it) }
    }

    init {
        register(AggregateExpressions)
        register(ArithmeticExpressions)
        register(NumericComparisonExpressions)
        register(ArrayBooleanExpressions)
        register(ArrayFilterExpression)
        register(ArrayMapExpression)
        register(ConcatExpression)
        register(EqualityExpressions)
        register(IfExpression)
        register(InExpression)
        register(LogicExpressions)
        register(NotExpressions)
        register(VariableExpression)
    }
}
