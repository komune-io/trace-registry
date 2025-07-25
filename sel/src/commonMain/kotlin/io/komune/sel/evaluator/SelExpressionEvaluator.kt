@file:JsExport
package io.komune.sel.evaluator

import io.komune.sel.ast.SelArray
import io.komune.sel.ast.SelNode
import io.komune.sel.ast.SelOperation
import io.komune.sel.ast.SelPrimitive
import kotlin.js.JsExport

class SelExpressionEvaluator {
    private val expressions: MutableMap<String, SelExpression> = SelExpressionNativeDirectory.toMutableMap()

    fun evaluate(node: SelNode, data: Any?, jsonPath: String): Any? {
        return when (node) {
            is SelArray -> evaluateArray(node, data, jsonPath)
            is SelOperation -> evaluateOperation(node, data, jsonPath)
            is SelPrimitive<*> -> node.value
        }
    }

    fun evaluateArray(array: SelArray, data: Any?, jsonPath: String): List<Any?> {
        return array.mapIndexed { i, item ->
            this@SelExpressionEvaluator.evaluate(item, data, "$jsonPath[$i]")
        }
    }

    fun evaluateOperation(operation: SelOperation, data: Any?, jsonPath: String): Any? {
        val handler = expressions[operation.operator]
            ?: throw SelEvaluationException("Unknown operation: '${operation.operator}'", jsonPath)

        return handler.evaluate(this, operation.arguments, data, "$jsonPath.${operation.operator}")
    }

    fun addExpression(expression: SelExpression) {
        expressions[expression.key] = expression
    }
}
