@file:JsExport
package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey
import kotlin.js.JsExport

object InExpression: SelExpression {
    override val key: SelExpressionKey = "in"

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        if (arguments.size != 2) {
            throw SelEvaluationException(
                "Operation '$key' requires exactly 2 arguments, found: ${arguments.size}.",
                jsonPath
            )
        }

        val itemNode = evaluator.evaluate(arguments[0], data, jsonPath)
        val containerNode = evaluator.evaluate(arguments[1], data, jsonPath)

        return when (containerNode) {
            is Iterable<*> -> itemNode in containerNode
            is Array<*> -> itemNode in containerNode
            is String -> itemNode.toString() in containerNode
            else -> throw SelEvaluationException(
                "Second argument for operation '$key' must be a valid iterable or string. Found: $containerNode",
                "$jsonPath[1]"
            )
        }
    }


}
