package io.komune.registry.script.imports.indicators

import cccev.dsl.client.DataClient
import com.fasterxml.jackson.databind.ObjectReader
import com.fasterxml.jackson.dataformat.csv.CsvMapper
import com.fasterxml.jackson.dataformat.csv.CsvSchema
import f2.dsl.fnc.invokeWith
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.f2.cccev.domain.unit.model.CompositeDataUnitDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddEmptyDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.commons.model.InformationConceptId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.script.imports.ImportContext
import io.komune.registry.script.imports.ImportRepository
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.async
import kotlinx.coroutines.awaitAll
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.withContext
import java.io.File

class IndicatorInitializer(
    private val dataClient: DataClient,
    private val importContext: ImportContext,
    private val importRepository: ImportRepository,
) {
    private val unitParser = UnitParser(importContext)

    companion object {
        val mapper: ObjectReader = CsvMapper()
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
                possibleValues = listOf("")
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
            )
        )
    }

    suspend fun initialize(catalogue: CatalogueDTOBase, language: Language, baseDirectory: File): Unit = withContext(Dispatchers.IO) {
        val pathMatcher = baseDirectory.toPath().fileSystem.getPathMatcher("glob:${baseDirectory.path}/*.csv")

        val csvFiles = baseDirectory.walk()
            .filter { it.isFile }
            .map { file ->
                async(Dispatchers.IO) {
                    if (pathMatcher.matches(file.toPath())) file else null
                }
            }
            .toList()
            .awaitAll()
            .filterNotNull()

        if (csvFiles.isEmpty()) {
            return@withContext
        }

        val parentDataset = importRepository.getOrCreateDataset(
            identifier = importRepository.getDatasetIdentifier(catalogue, language, "indicators"),
            parentId = null,
            catalogue = catalogue,
            language = language,
            type = "indicators"
        )

        csvFiles.mapAsync { initializeIndicators(parentDataset, language, it) }
    }

    private suspend fun initializeIndicators(parentDataset: DatasetDTOBase, language: Language, csvFile: File) {
        val identifier = "${parentDataset.identifier}-indicator-${csvFile.nameWithoutExtension}"

        val indicators = parseIndicators(csvFile)
            .ifEmpty { return }

        val solutionNumber = Regex("""solution_(\d+)""").find(csvFile.nameWithoutExtension)?.groupValues?.get(1)

        val dataset = importRepository.getOrCreateDataset(
            identifier = identifier,
            parentId = parentDataset.id,
            catalogue = null,
            language = language,
            type = "indicator",
            title = when {
                csvFile.nameWithoutExtension == "syntheseeco" -> when (language) {
                    "fr" -> "Synthèse économique"
                    "es" -> "Síntesis económica"
                    else -> "Economic synthesis"
                }
                solutionNumber != null -> ""
                else -> csvFile.nameWithoutExtension.replace("_", " ").replaceFirstChar(Char::titlecaseChar)
            }
        )

        if (dataset.distributions.orEmpty().isNotEmpty()) {
            return
        }

        if (solutionNumber != null) {
            val solutionIdentifier = "100m-solution-$solutionNumber"
            importContext.catalogueDatasetReferences[solutionIdentifier] =
                importContext.catalogueDatasetReferences[solutionIdentifier].orEmpty() + dataset.id
        }

        val distributionId = DatasetAddEmptyDistributionCommandDTOBase(
            id = dataset.id,
            name = null
        ).invokeWith(dataClient.dataset.datasetAddEmptyDistribution()).distributionId

        val indicatorCommands = indicators.map { indicator ->
            DatasetAddDistributionValueCommandDTOBase(
                id = dataset.id,
                distributionId = distributionId,
                informationConceptId = indicator.id,
                unit = indicator.unit,
                isRange = indicator.isRange,
                value = indicator.value,
                description = indicator.description,
            )
        }
        dataClient.dataset.datasetAddDistributionValue().invoke(indicatorCommands.asFlow())
    }

    private fun parseIndicators(csvFile: File): Collection<Indicator> {
        val csvLines = mapper.readValues<Map<String, String>>(csvFile).readAll()

        return csvLines.mapNotNull { line ->
            val colType = line[COL_TYPE].orEmpty().trim()
            val colName = line[COL_NAME].orEmpty().trim()
            val colValue = line[COL_VALUE].orEmpty().trim()
            val colUnit = line[COL_UNIT].orEmpty().trim()
            val colDescription = line[COL_DESCRIPTION].orEmpty().trim()

            if ("$colValue$colDescription".isBlank()) {
                return@mapNotNull null
            }

            val themeIdentifier = indicatorTypeMap[colType]
                ?: return@mapNotNull null

            val informationConcept = findInformationConcept(colName, themeIdentifier)
                ?: return@mapNotNull null

            val unit = informationConcept.unit
                ?: unitParser.parse(colUnit, colDescription)
                ?: importContext.dataUnits["xsdstring"]?.let { CompositeDataUnitDTOBase(it, null, null) }
                ?: return@mapNotNull null

            val isRange = colValue.isRange()
            val isString = unit.leftUnit.type == DataUnitType.STRING
            Indicator(
                id = informationConcept.id,
                identifier = informationConcept.identifier,
                theme = themeIdentifier,
                unit = CompositeDataUnitModel(
                    leftUnitId = unit.leftUnit.id,
                    rightUnitId = unit.rightUnit?.id,
                    operator = unit.operator
                ),
                isRange = isRange,
                value = when {
                    isRange -> colValue.removeSurrounding("[", "]")
                    isString -> "$colValue $colDescription".trim()
                    else -> colValue
                },
                description = colDescription.takeUnless { isString },
                isString = isString
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

    private data class Indicator(
        val id: InformationConceptId,
        val identifier: InformationConceptIdentifier,
        val theme: ConceptIdentifier,
        val unit: CompositeDataUnitModel,
        val isRange: Boolean,
        val value: String,
        val description: String?,
        val isString: Boolean
    )
}
