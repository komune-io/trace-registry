@file:JsExport
package io.komune.sel.evaluator.expressions

import io.komune.sel.ast.SelArray
import io.komune.sel.ast.SelNull
import io.komune.sel.ast.SelParseException
import io.komune.sel.evaluator.SelEvaluationException
import io.komune.sel.evaluator.SelExpression
import io.komune.sel.evaluator.SelExpressionEvaluator
import io.komune.sel.evaluator.SelExpressionKey
import io.komune.sel.normalize
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonPrimitive
import kotlin.js.JsExport

object VariableExpression: SelExpression {
    override val key: SelExpressionKey = "var"

    override fun evaluate(evaluator: SelExpressionEvaluator, arguments: SelArray, data: Any?, jsonPath: String): Any? {
        val (keyNode, defaultValueNode) = when (arguments.size) {
            0 -> throw SelParseException("Operation '$key' requires at least 1 argument, found: ${arguments.size}.", jsonPath)
            1 -> arguments[0] to null
            2 -> arguments[0] to arguments[1]
            else -> throw SelParseException("Operation '$key' cannot have more than 2 arguments, found: ${arguments.size}.", jsonPath)
        }

        val defaultValue = evaluator.evaluate(defaultValueNode ?: SelNull, data, "$jsonPath[1]")
        if (data == null || data is JsonNull) {
            return defaultValue
        }

        val key = evaluator.evaluate(keyNode, data, "$jsonPath[0]")
        return extractDataAtKey(key, data, defaultValue, jsonPath)
    }

    private fun extractDataAtKey(key: Any?, data: Any, defaultValue: Any?, jsonPath: String): Any? = when (key) {
        null, is SelNull -> data
        is Number -> handleNumberKey(key, data, defaultValue)
        is String -> handleStringKey(key, data, defaultValue, jsonPath)
        is JsonPrimitive -> handleStringKey(key.content, data, defaultValue, jsonPath)
        else -> throw SelEvaluationException("Variable key must be a string, number or null. Found: $key", "$jsonPath[0]")
    }.normalize()

    private fun handleNumberKey(key: Number, data: Any, defaultValue: Any?): Any? = when (data) {
        is Iterable<*> -> data.elementAtOrNull(key.toInt())
        is Array<*> -> data.getOrNull(key.toInt())
        else -> null
    } ?: defaultValue

    private fun handleStringKey(key: String, data: Any, defaultValue: Any?, jsonPath: String): Any? = when {
        key.isBlank() -> data
        key.toIntOrNull() != null -> handleNumberKey(key.toInt(), data, defaultValue)
        '.' !in key -> (data as? Map<*, *>)?.get(key) ?: defaultValue
        else -> {
            var currentData: Any? = data
            key.split('.').forEach { keyPart ->
                currentData = extractDataAtKey(keyPart, currentData!!, defaultValue, "$jsonPath.$keyPart")
                    ?: return defaultValue
            }
            currentData
        }
    }
}
