@file:JsExport
package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelNode
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.isTruthy
import kotlin.js.JsExport

object ArrayFilterExpression: ArrayIterateExpression<Boolean, List<Any?>>() {
    override val key: String = "filter"

    override fun evaluateArray(array: Iterable<Any?>, evalItem: (Int, Any?) -> Boolean): List<Any?> {
        return array.filterIndexed(evalItem)
    }

    override fun evaluateItem(
        evaluator: SelExpressionEvaluator, itemEvalNode: SelNode, iterationData: IterationData, jsonPath: String
    ): Boolean {
        return evaluator.evaluate(itemEvalNode, iterationData, jsonPath).isTruthy()
    }
}
