package io.komune.registry.script.imports.indicators

import cccev.dsl.client.DataClient
import f2.dsl.fnc.invokeWith
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddEmptyDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.script.imports.ImportContext
import io.komune.registry.script.imports.ImportRepository
import io.komune.registry.script.imports.indicators.classic.IndicatorClassicParser
import io.komune.registry.script.imports.indicators.m100.Indicator100mParser
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
    suspend fun initialize(
        catalogue: CatalogueDTOBase,
        language: Language,
        baseDirectory: File,
        format: IndicatorFormat
    ): Unit = withContext(Dispatchers.IO) {
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

        val parser = when (format) {
            IndicatorFormat.CLASSIC -> IndicatorClassicParser(importContext)
            IndicatorFormat.M100 -> Indicator100mParser(importContext)
        }
        csvFiles.mapAsync {
            parser.initializeIndicators(parentDataset, language, it)
        }
    }

    private suspend fun IndicatorParser.initializeIndicators(parentDataset: DatasetDTOBase, language: Language, csvFile: File) {
        val identifier = "${parentDataset.identifier}-indicator-${csvFile.nameWithoutExtension}"

        val indicators = parse(csvFile)
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
}
