@file:JsExport
package io.komune.sel

import io.komune.sel.ast.SelParseException
import io.komune.sel.ast.SelParser
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import kotlin.js.JsExport

class SelExecutor {
    private val evaluator: SelExpressionEvaluator = SelExpressionEvaluator()

    fun addOperation(expression: SelExpression) {
        evaluator.addExpression(expression)
    }

    fun evaluate(expressionJson: String, dataJson: String): Any? {
        val selNode = SelParser.parse(expressionJson)
        val data = try {
            Json.parseToJsonElement(dataJson).normalizeJsonElement()
        } catch (e: Exception) {
            throw SelParseException("Failed to parse data", "$", e)
        }

        return evaluator.evaluate(selNode, data, "$").normalize()
    }

    fun evaluateToJson(expressionJson: String, dataJson: String): String {
        return Json.encodeToString(evaluate(expressionJson, dataJson).normalize().toJsonElement())
    }
}
