package io.komune.registry.script.imports.indicators.m100

import com.fasterxml.jackson.databind.ObjectReader
import com.fasterxml.jackson.dataformat.csv.CsvMapper
import com.fasterxml.jackson.dataformat.csv.CsvSchema
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTOBase
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.script.imports.ImportContext
import io.komune.registry.script.imports.indicators.Indicator
import io.komune.registry.script.imports.indicators.IndicatorParser
import io.komune.registry.script.imports.toRegex
import java.io.File

class Indicator100mParser(
    private val importContext: ImportContext,
) : IndicatorParser {
    private val unitParser = Unit100mParser(importContext)

    companion object {
        val csvReader: ObjectReader = CsvMapper()
            .readerFor(Map::class.java)
            .with(CsvSchema.emptySchema().withHeader())

        const val COL_TYPE = "type"
        const val COL_NAME = "name"
        const val COL_VALUE = "value"
        const val COL_UNIT = "unit"
        const val COL_DESCRIPTION = "description"

        val indicatorTypeMap = mapOf(
            "COST" to "indicator-cost",
            "BENEFIT" to "indicator-gain",
        )

        private val infoConceptsAlternativeParseData = listOf(
            IndicatorAlternativeParseData(
                identifier = "financial-gain",
                theme = "indicator-gain",
                possibleValues = listOf("Profit")
            ),
            IndicatorAlternativeParseData(
                identifier = "roi",
                theme = "indicator-gain",
                possibleValues = listOf(
                    "Temps de Retour sur Investissement", "Tiempo de Retorno sobre la Inversión", "Return On Investment"
                )
            ),
            IndicatorAlternativeParseData(
                identifier = "difficulties",
                theme = "indicator-cost",
                possibleValues = listOf("", "Difficulté")
            ),
            IndicatorAlternativeParseData(
                identifier = "positive-effects",
                theme = "indicator-gain",
                possibleValues = listOf("")
            ),
            IndicatorAlternativeParseData(
                identifier = "co2-avoided",
                theme = "indicator-gain",
                possibleValues = listOf("Emissions GES évitées", "Avoided GHG emissions", "Emisiones de Gas de Efecto Invernadero")
            ),
            IndicatorAlternativeParseData(
                identifier = "rule-of-thumb",
                theme = "indicator-cost",
                possibleValues = listOf("Quick evaluation")
            )
        )
    }
    
    override fun parse(csvFile: File): Collection<Indicator> {
        val csvLines = csvReader.readValues<Map<String, String>>(csvFile).readAll()

        return csvLines.mapNotNull { line ->
            val colType = line[COL_TYPE].orEmpty().trim()
            val colName = line[COL_NAME].orEmpty().trim()
            val colValue = line[COL_VALUE].orEmpty().trim()
            val colUnit = line[COL_UNIT].orEmpty().trim()
            val colDescription = line[COL_DESCRIPTION].orEmpty().trim()

            if ("$colValue$colDescription".isBlank() || colValue.toDoubleOrNull() == 0.0) {
                return@mapNotNull null
            }

            val themeIdentifier = indicatorTypeMap[colType]
                ?: return@mapNotNull null

            val informationConcept = findInformationConcept(colName, themeIdentifier)
                ?: return@mapNotNull null

            val unit = informationConcept.unit
                ?: unitParser.parse(colUnit)
                ?: importContext.dataUnits["xsdstring"]?.let { CompositeDataUnitDTOBase(it, null, null) }
                ?: return@mapNotNull null

            val isRange = colValue.isRange()
            val isString = unit.leftUnit.type == DataUnitType.STRING
            Indicator(
                id = informationConcept.id,
                identifier = informationConcept.identifier,
                unit = CompositeDataUnitModel(
                    leftUnitId = unit.leftUnit.id,
                    rightUnitId = unit.rightUnit?.id,
                    operator = unit.operator
                ),
                isRange = isRange,
                value = when {
                    isRange -> colValue.removeSurrounding("[", "]")
                    isString -> "$colValue\n$colDescription".trim().removePrefix("*").trimStart()
                    else -> colValue
                },
                description = colDescription.takeUnless { isString },
            )
        }
    }

    private fun findInformationConcept(name: String, themeIdentifier: ConceptIdentifier): InformationConceptDTOBase? {
        val nameTrimmed = name.trimName()
        return importContext.informationConcepts.values.find { informationConcept ->
            themeIdentifier in informationConcept.themes.map { it.identifier }
                    && nameTrimmed.matchesValues(informationConcept.name.values)
        } ?: infoConceptsAlternativeParseData.find {
            it.theme == themeIdentifier && nameTrimmed.matchesValues(it.possibleValues)
        }?.let { data -> importContext.informationConcepts[data.identifier] }
    }

    private fun String.matchesValues(values: Collection<String>): Boolean {
        return matches(values.toRegex())
    }

    private fun String.trimName() = trimEnd().removeSuffix(":").trim()

    private fun String.isRange() = matches(Regex("""^\[\d*(\.\d+)*\.\.\d*(\.\d+)*]$"""))

    private data class IndicatorAlternativeParseData(
        val identifier: InformationConceptIdentifier,
        val theme: ConceptIdentifier,
        val possibleValues: List<String>
    )
}
