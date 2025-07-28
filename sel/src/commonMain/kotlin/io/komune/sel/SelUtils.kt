@file:JsExport
package io.komune.sel

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.doubleOrNull
import kotlin.js.JsExport
import kotlin.math.abs
import kotlin.math.round

fun Any?.isTruthy(): Boolean = when (this) {
    null -> false
    is Boolean -> this
    is Double -> !isNaN()
    is Float -> !isNaN()
    is JsonNull -> false
    is JsonPrimitive -> (booleanOrNull ?: doubleOrNull ?: content).isTruthy()
    else -> true
}

fun Any?.normalize(): Any? = when (this) {
    null -> null
    is JsonElement -> normalizeJsonElement()
    is String -> toBooleanOrNull()
        ?: toLongOrNull()
        ?: toDoubleOrNull()?.normalizeNumber()
        ?: this
    is Number -> this.normalizeNumber()
    is Iterable<*> -> map { it.normalize() }
    is Array<*> -> map { it.normalize() }
    is Map<*, *> -> mapValues { it.value.normalize() }
    else -> this
}

fun JsonElement.normalizeJsonElement(): Any? = when (this) {
    is JsonNull -> null
    is JsonPrimitive -> content.normalize()
    is JsonArray -> map { it.normalizeJsonElement() }
    is JsonObject -> mapValues { it.value.normalizeJsonElement() }
}

fun Any?.normalizeNumber(): Any? = when (this) {
    is Double -> fixDoubleFloatingPrecision().let {
        if (isFinite() && it == it.toLong().toDouble()) {
            it.toLong()
        } else {
            it
        }
    }
    is Float -> fixFloatingPrecision().let {
        if (isFinite() && it == it.toLong().toFloat()) {
            it.toLong()
        } else {
            it
        }
    }
    else -> this
}

fun Double.fixDoubleFloatingPrecision(): Double {
    return if (this.isNaN() || this.isInfinite()) {
        this
    } else {
        val rounded = round(this * 1e9) / 1e9
        if (abs(rounded - this) < 1e-9) rounded else this
    }
}

fun Float.fixFloatingPrecision(): Float {
    return if (this.isNaN() || this.isInfinite()) {
        this
    } else {
        val rounded = round(this * 1e9f) / 1e9f
        if (abs(rounded - this) < 1e-9f) rounded else this
    }
}

fun String.toBooleanOrNull(): Boolean? = when {
    equals("true", ignoreCase = true) -> true
    equals("false", ignoreCase = true) -> false
    else -> null
}

fun Any?.toJsonElement(): JsonElement = when (this) {
    null -> JsonNull
    is String -> JsonPrimitive(this)
    is Number -> JsonPrimitive(this)
    is Boolean -> JsonPrimitive(this)
    is JsonElement -> this
    is Iterable<*> -> JsonArray(map { it.toJsonElement() })
    is Array<*> -> JsonArray(map { it.toJsonElement() })
    is Map<*, *> -> JsonObject(entries.associate { (key, value) -> key.toString() to value.toJsonElement() })
    else -> throw IllegalArgumentException("Unsupported type for JSON conversion: ${this::class.simpleName}")
}
