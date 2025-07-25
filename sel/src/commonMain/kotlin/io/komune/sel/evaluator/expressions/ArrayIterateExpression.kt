@file:JsExport
package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.ast.SelNode
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import kotlin.js.JsExport

abstract class ArrayIterateExpression<ItemTransformationResult, ArrayEvaluationResult>: SelExpression {
    protected abstract fun evaluateArray(array: Iterable<Any?>, evalItem: (Int, Any?) -> ItemTransformationResult): ArrayEvaluationResult

    protected open fun evaluateItem(
        evaluator: SelExpressionEvaluator, itemEvalNode: SelNode, iterationData: IterationData, jsonPath: String
    ): ItemTransformationResult {
        return evaluator.evaluate(itemEvalNode, iterationData, jsonPath) as ItemTransformationResult
    }

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        if (arguments.size != 2) {
            throw SelEvaluationException("Operation '$key' requires exactly 2 arguments, found ${arguments.size}.", jsonPath)
        }

        val array = evaluator.evaluate(arguments[0], data, "$jsonPath[0]").let {
            when (it) {
                null -> emptyList()
                is Iterable<*> -> it
                is Array<*> -> it.asList()
                else -> throw SelEvaluationException(
                    "First argument for operation '$key' must be a valid array. Found: $it",
                    "$jsonPath[0]"
                )
            }
        }

        val conditionNode = arguments[1]
        return evaluateArray(array) { i, item ->
            val parentIterationData = data as? IterationData
            val iterationData = IterationData(
                data = parentIterationData?.data ?: data,
                array = array,
                item = item,
                index = i,
                parent = parentIterationData
            )
            evaluateItem(evaluator, conditionNode, iterationData, "$jsonPath[1]")
        }
    }

    class IterationData(
        val data: Any?,
        val array: Iterable<Any?>,
        val item: Any?,
        val index: Int,
        val parent: IterationData?
    ): Map<String, Any?> by mapOf(
        "data" to data,
        "array" to array,
        "item" to item,
        "index" to index,
        "parent" to parent
    )
}
