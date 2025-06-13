package io.komune.registry.script.imports.indicators.classic

import com.fasterxml.jackson.databind.ObjectReader
import com.fasterxml.jackson.dataformat.csv.CsvMapper
import com.fasterxml.jackson.dataformat.csv.CsvSchema
import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTOBase
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.script.imports.ImportContext
import io.komune.registry.script.imports.indicators.Indicator
import io.komune.registry.script.imports.indicators.IndicatorParser
import java.io.File

class IndicatorClassicParser(
    private val importContext: ImportContext,
) : IndicatorParser {

    companion object {
        val csvReader: ObjectReader = CsvMapper()
            .readerFor(Map::class.java)
            .with(CsvSchema.emptySchema().withHeader())

        const val COL_IDENTIFIER = "identifier"
        const val COL_VALUE = "value"
        const val COL_UNIT = "unit"
        const val COL_DESCRIPTION = "description"
    }
    
    override fun parse(csvFile: File): Collection<Indicator> {
        val csvLines = csvReader.readValues<Map<String, String>>(csvFile).readAll()

        return csvLines.mapNotNull { line ->
            val colIdentifier = line[COL_IDENTIFIER].orEmpty().trim()
            val colValue = line[COL_VALUE].orEmpty().trim().ifBlank { return@mapNotNull null }
            val colUnit = line[COL_UNIT].orEmpty().trim()
            val colDescription = line[COL_DESCRIPTION].orEmpty().trim()

            val informationConcept = importContext.informationConcepts[colIdentifier]
                ?: return@mapNotNull null

            val unit = informationConcept.unit
                ?: importContext.dataUnits[colUnit]?.let { CompositeDataUnitDTOBase(it, null, null) }
                ?: return@mapNotNull null

            Indicator(
                id = informationConcept.id,
                identifier = informationConcept.identifier,
                unit = CompositeDataUnitModel(
                    leftUnitId = unit.leftUnit.id,
                    rightUnitId = unit.rightUnit?.id,
                    operator = unit.operator
                ),
                isRange = colValue.isRange(),
                value = colValue,
                description = colDescription,
            )
        }
    }

    private fun String.isRange() = matches(Regex("""^\[\d*(\.\d+)*\.\.\d*(\.\d+)*]$"""))
}
