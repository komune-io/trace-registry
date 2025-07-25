package io.komune.sel

import io.komune.sel.ast.SelParseException
import io.komune.sel.ast.SelParser
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import kotlinx.serialization.json.Json

class SelExecutor {
    private val evaluator: SelExpressionEvaluator = SelExpressionEvaluator()

    fun addOperation(expression: SelExpression) {
        evaluator.addExpression(expression)
    }

    fun evaluate(expressionJson: String, dataJson: String): Any? {
        val selNode = SelParser.parse(expressionJson)
        val data = try {
            Json.parseToJsonElement(dataJson).normalize()
        } catch (e: Exception) {
            throw SelParseException("Failed to parse data", "$", e)
        }

        return evaluator.evaluate(selNode, data, "$")
    }
}
