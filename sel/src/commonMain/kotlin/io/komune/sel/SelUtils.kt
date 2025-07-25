package io.komune.sel

import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonNull
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.JsonPrimitive
import kotlinx.serialization.json.booleanOrNull
import kotlinx.serialization.json.doubleOrNull
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
    is JsonElement -> normalize()
    is String -> toBooleanOrNull()
        ?: toLongOrNull()
        ?: toDoubleOrNull()?.normalizeNumber()
        ?: this
    is Number -> this.normalizeNumber()
    else -> this
}

fun JsonElement.normalize(): Any? = when (this) {
    is JsonNull -> null
    is JsonPrimitive -> content.normalize()
    is JsonArray -> map { it.normalize() }
    is JsonObject -> mapValues { it.value.normalize() }
}

fun Any?.normalizeNumber(): Any? = when (this) {
    is Double -> fixFloatingPrecision().let {
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

fun Double.fixFloatingPrecision(): Double {
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
