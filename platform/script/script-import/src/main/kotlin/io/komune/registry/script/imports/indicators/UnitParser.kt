package io.komune.registry.script.imports.indicators

import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.DataUnitDTOBase
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator
import io.komune.registry.script.imports.ImportContext

class UnitParser(
    private val importContext: ImportContext
) {
    companion object {
        private val unitsAlternativeParseData = listOf(
            CompositeUnitData(
                leftIdentifier = "year",
                possibleValues = listOf("year(s)", "an(s)", "año(s)", "years", "ans", "años")
            ),
            CompositeUnitData(
                leftIdentifier = "tonco2e",
                rightIdentifier = "year",
                possibleValues = listOf("tCO2e/year", "tCO2e/an", "tCO2e/año")
            ),
            CompositeUnitData(
                leftIdentifier = "eur",
                possibleValues = listOf("€")
            ),
        )
    }

    fun parse(unit: String, description: String): CompositeDataUnitDTOBase? {
        val leftUnit = findUnit(unit)
        return if (leftUnit != null) {
            val rightUnit = findUnit(description)
                ?: unitsAlternativeParseData.findUnit(description)?.leftUnit
            CompositeDataUnitDTOBase(
                leftUnit = leftUnit,
                rightUnit = rightUnit,
                operator = CompositeDataUnitOperator.DIVISION.takeIf { rightUnit != null }
            )
        } else {
            unitsAlternativeParseData.findUnit(unit)?.let {
                val rightUnit = it.rightUnit
                    ?: findUnit(description)
                    ?: unitsAlternativeParseData.findUnit(description)?.leftUnit

                CompositeDataUnitDTOBase(
                    leftUnit = it.leftUnit,
                    rightUnit = rightUnit,
                    operator = CompositeDataUnitOperator.DIVISION.takeIf { rightUnit != null }
                )
            }
        }
    }

    private fun findUnit(unit: String): DataUnitDTOBase? {
        val dataUnits = importContext.dataUnits.values
        val unitStr = unit.trimUnit()

        return dataUnits.find { (it.name.values + it.abbreviation.values).toRegex().containsMatchIn(unitStr) }
    }

    private fun List<CompositeUnitData>.findUnit(unit: String): CompositeDataUnitDTOBase? = find {
        it.possibleValues.toRegex().containsMatchIn(unit.trimUnit())
    }?.let { compositeUnit ->
        CompositeDataUnitDTOBase(
            leftUnit = importContext.dataUnits[compositeUnit.leftIdentifier]!!,
            rightUnit = compositeUnit.rightIdentifier?.let { importContext.dataUnits[it]!! },
            operator = CompositeDataUnitOperator.DIVISION.takeIf { compositeUnit.rightIdentifier != null }
        )
    }

    private fun String.trimUnit() = trimStart().removePrefix("/").trim()

    private data class CompositeUnitData(
        val leftIdentifier: String,
        val rightIdentifier: String? = null,
        val possibleValues: List<String>
    )
}
