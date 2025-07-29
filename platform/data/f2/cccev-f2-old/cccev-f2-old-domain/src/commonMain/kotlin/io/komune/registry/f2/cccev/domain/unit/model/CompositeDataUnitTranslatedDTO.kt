package io.komune.registry.f2.cccev.domain.unit.model

import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator
import kotlinx.serialization.Serializable
import kotlin.js.JsExport

@JsExport
interface CompositeDataUnitTranslatedDTO {
    val leftUnit: DataUnitTranslatedDTO
    val rightUnit: DataUnitTranslatedDTO?
    val operator: CompositeDataUnitOperator?
}

@Serializable
data class CompositeDataUnitTranslatedDTOBase(
    override val leftUnit: DataUnitTranslatedDTOBase,
    override val rightUnit: DataUnitTranslatedDTOBase?,
    override val operator: CompositeDataUnitOperator?
) : CompositeDataUnitTranslatedDTO {

    fun toAbbreviationString(): String = buildString {
        append(leftUnit.abbreviation)
        operator?.let {
            append(" ")
            append(it.symbol)
        }
        rightUnit?.let {
            append(" ")
            append(it.abbreviation)
        }
    }

    fun toNameString(): String = buildString {
        append(leftUnit.name)
        operator?.let {
            append(" ")
            append(it.symbol)
        }
        rightUnit?.let {
            append(" ")
            append(it.name)
        }
    }
}
