@file:JsExport
package io.komune.sel.ast

import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.doubleOrNull
import kotlinx.serialization.json.longOrNull
import kotlin.js.JsExport

object SelParser {
    fun parse(json: String): SelNode {
        val root = try {
            Json.parseToJsonElement(json)
        } catch (e: Exception) {
            throw SelParseException("Failed to parse SEL expression", "$", e)
        }

        return parseElement(root)
    }

    private fun parseElement(root: JsonElement, jsonPath: String = "$"): SelNode {
        return when (root) {
            is JsonNull -> SelNull
            is JsonPrimitive -> parsePrimitive(root, jsonPath)
            is JsonArray -> parseArray(root, jsonPath)
            is JsonObject -> parseObject(root, jsonPath)
        }
    }

    private fun parsePrimitive(primitive: JsonPrimitive, jsonPath: String): SelPrimitive<*> {
        return when {
            primitive.isString -> SelString(primitive.content)
            primitive == JsonNull -> SelNull
            primitive.doubleOrNull != null -> SelNumber(primitive.longOrNull ?: primitive.doubleOrNull!!)
            primitive.booleanOrNull != null -> SelBoolean(primitive.booleanOrNull!!)
            else -> throw SelParseException("Unsupported primitive type: ${primitive.content}", jsonPath)
        }
    }

    private fun parseArray(array: JsonArray, jsonPath: String): SelArray {
        val elements = array.mapIndexed { i, element ->
            parseElement(element, "$jsonPath[$i]")
        }
        return SelArray(elements)
    }

    private fun parseObject(obj: JsonObject, jsonPath: String): SelNode {
        if (obj.keys.size != 1) {
            throw SelParseException("Objects must have exactly one key, found ${obj.keys.size}", jsonPath)
        }

        val key = obj.keys.first()
        val arguments = parseElement(obj[key] ?: JsonNull, "$jsonPath.$key")
            .let { node ->
                node as? SelArray
                    ?: SelArray(listOf(node))
            }

        return SelOperation(key, arguments)
    }
}
