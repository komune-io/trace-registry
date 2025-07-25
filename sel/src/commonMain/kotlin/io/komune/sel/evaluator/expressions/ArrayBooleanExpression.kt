@file:JsExport
package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelNode
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey
import io.komune.sel.isTruthy
import kotlin.js.JsExport

object ArrayBooleanExpressions: List<ArrayBooleanExpression> by listOf(
    object: ArrayBooleanExpression("all") {
        override fun <T> eval(array: Iterable<T>, checkItem: (T) -> Boolean) = array.all(checkItem)
    },
    object: ArrayBooleanExpression("any") {
        override fun <T> eval(array: Iterable<T>, checkItem: (T) -> Boolean) = array.any(checkItem)
    },
    object: ArrayBooleanExpression("none") {
        override fun <T> eval(array: Iterable<T>, checkItem: (T) -> Boolean) = array.none(checkItem)
    }
)

abstract class ArrayBooleanExpression(
    override val key: SelExpressionKey
): ArrayIterateExpression<Boolean, Boolean>() {

    abstract fun <T> eval(array: Iterable<T>, checkItem: (item: T) -> Boolean): Boolean

    override fun evaluateArray(array: Iterable<Any?>, evalItem: (Int, Any?) -> Boolean): Boolean {
        return eval(array.withIndex()) { (i, item) -> evalItem(i, item) }
    }

    override fun evaluateItem(
        evaluator: SelExpressionEvaluator, itemEvalNode: SelNode, iterationData: IterationData, jsonPath: String
    ): Boolean {
        return evaluator.evaluate(itemEvalNode, iterationData, jsonPath).isTruthy()
    }
}
