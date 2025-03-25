package io.komune.registry.f2.dataset.domain

import kotlin.js.JsExport

@JsExport
object SupportedValueUtils {
    fun buildRangeValue(min: Double?, max: Double?): String {
        return "${min ?: ""}..${max ?: ""}"
    }

    fun parseRangeValue(value: String): Array<Double?> {
        return value.split("..").map {
            it.trim().ifEmpty { null }?.toDoubleOrNull()
        }.toTypedArray()
    }
}
