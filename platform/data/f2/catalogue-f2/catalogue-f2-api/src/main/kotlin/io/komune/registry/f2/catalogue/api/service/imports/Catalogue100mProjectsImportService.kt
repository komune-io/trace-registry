package io.komune.registry.f2.catalogue.api.service.imports

import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.api.commons.utils.toCsvParser
import io.komune.registry.f2.catalogue.api.service.CatalogueF2AggregateService
import io.komune.registry.f2.catalogue.api.service.CatalogueF2FinderService
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.dataset.api.service.DatasetF2AggregateService
import io.komune.registry.f2.dataset.domain.command.DatasetAddDistributionValueCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetAddEmptyDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.model.CatalogueAccessRight
import io.komune.registry.s2.cccev.api.CccevOldFinderService
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitOperator
import io.komune.registry.s2.cccev.domain.model.DataUnitModel
import io.komune.registry.s2.cccev.domain.model.DataUnitType
import io.komune.registry.s2.cccev.domain.model.InformationConceptModel
import io.komune.registry.s2.cccev.domain.model.SupportedValueModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DataUnitId
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import kotlinx.coroutines.runBlocking
import org.apache.commons.csv.CSVRecord
import org.springframework.stereotype.Service
import java.io.InputStream

@Service
class Catalogue100mProjectsImportService(
    private val catalogueF2AggregateService: CatalogueF2AggregateService,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val cccevOldFinderService: CccevOldFinderService,
    private val datasetF2AggregateService: DatasetF2AggregateService,
    private val licenseF2FinderService: LicenseF2FinderService
) {

    companion object {
        const val CATALOGUE_TYPE = "100m-project"
        const val SECTOR_TYPE = "100m-sector"

        const val PLANETARY_BOUNDARIES_TYPE = "100m-planetary-boundary"
        const val PLANETARY_BOUNDARIES_RELATION = "planetaryLimits"
        const val PLANETARY_BOUNDARIES_DELIMITER = " "

        const val LANGUAGE = "fr"

        const val DATASET_INDICATORS_TYPE = "indicators"
        const val DATASET_INDICATOR_TYPE = "indicator"
        const val DATASET_INDICATOR_TITLE = "Synthèse Économique"
    }

    suspend fun parseAndImport(inputStream: InputStream): List<CatalogueId> {
        // TODO check inputs (catalogue identifiers, ...)
        val context = ImportContext()
        return inputStream.toCsvParser(Cat100mProjectsCsvColumn.entries.size).map { csvRecord ->
            CatalogueImportData(
                createCommand = parseCatalogueCreateCommand(csvRecord, context),
                indicators = parseIndicators(csvRecord, context)
            )
        }.map { importCatalogue(it) }
    }

    private suspend fun parseCatalogueCreateCommand(csvRecord: CSVRecord, context: ImportContext): CatalogueCreateCommandDTOBase {
        return CatalogueCreateCommandDTOBase(
            parentId = csvRecord.getColumn(Cat100mProjectsCsvColumn.SECTOR.value)
                ?.let { context.getCatalogueIdByIdentifier(SECTOR_TYPE, it) },
            title = csvRecord.getColumn(Cat100mProjectsCsvColumn.TITLE.value).orEmpty(),
            description = csvRecord.getColumn(Cat100mProjectsCsvColumn.DESCRIPTION.value),
            type = CATALOGUE_TYPE,
            language = LANGUAGE,
            stakeholder = csvRecord.getColumn(Cat100mProjectsCsvColumn.STAKEHOLDER.value),
            relatedCatalogueIds = csvRecord.getColumn(Cat100mProjectsCsvColumn.PLANETARY_BOUNDARIES.value)
                ?.split(PLANETARY_BOUNDARIES_DELIMITER)
                ?.filter { it.isNotBlank() }
                ?.nullIfEmpty()
                ?.map { context.getCatalogueIdByIdentifier(PLANETARY_BOUNDARIES_TYPE, it.trim()) }
                ?.let { mapOf(PLANETARY_BOUNDARIES_RELATION to it) },
            accessRights = csvRecord.getColumn(Cat100mProjectsCsvColumn.ACCESS.value)
                ?.let { CatalogueAccessRight.valueOf(it.uppercase()) }
                ?: CatalogueAccessRight.PRIVATE,
            license = csvRecord.getColumn(Cat100mProjectsCsvColumn.LICENCE.value)
                ?.let { context.licenseIds.get(it) },
            location = Location(
                country = csvRecord.getColumn(Cat100mProjectsCsvColumn.COUNTRY.value),
                region = csvRecord.getColumn(Cat100mProjectsCsvColumn.REGION.value)
            ),
            integrateCounter = true,
            withDraft = false
        )
    }

    private suspend fun parseIndicators(csvRecord: CSVRecord, context: ImportContext): List<SupportedValueModel> {
        val catalogueColumns = Cat100mProjectsCsvColumn.entries.map(Cat100mProjectsCsvColumn::value)
        val concepts = csvRecord.parser.headerNames
            .filter { it !in catalogueColumns }
            .mapNotNull { context.conceptIds.get(it) }

        return concepts.mapNotNull { concept ->
            csvRecord.getColumn(concept.identifier)?.let { parseValue(it, concept, context) }
        }
    }

    private fun parseValue(value: String, concept: InformationConceptModel, context: ImportContext): SupportedValueModel? {
        if (value.isBlank()) {
            return null
        }
        val normalizedValue = value.normalizeUnit()

        val numberMatchResult = Regex("""^(-?\d([\d. ]*\d)?)(.*)""").matchEntire(normalizedValue)
            ?: return SupportedValueModel(
                id = "",
                conceptId = concept.id,
                unit = CompositeDataUnitModel(context.stringUnit.id, null, null),
                isRange = false,
                value = value.trim(),
                query = null,
                description = null
            )

        val numberStr = numberMatchResult.groupValues[1].normalizeNumber()
        val unitStr = numberMatchResult.groupValues[3].normalizeUnit()

        val unit = unitStr.findUnit(context)
            ?: throw IllegalArgumentException("No matching unit found for [$unitStr]")

        require(concept.unit == null || concept.unit == unit) {
            "Unit does not match concept unit"
        }

        return SupportedValueModel(
            id = "",
            conceptId = concept.id,
            unit = unit,
            isRange = ".." in numberStr,
            value = numberStr,
            query = null,
            description = null
        )
    }

    private fun String.findUnit(context: ImportContext): CompositeDataUnitModel? {
        val (leftUnitAbbv, leftUnit) = context.unitsMap.entries
            .filter { (abbv) -> this.startsWith(abbv) }
            .maxByOrNull { (abbv) -> abbv.length }
            ?: return null

        if (leftUnitAbbv.length == this.length) {
            return CompositeDataUnitModel(leftUnit.id, null, null)
        }
        val rightUnitPart = this.substring(leftUnitAbbv.length).trim()
        if (!rightUnitPart.startsWith("/")) {
            return null
        }

        val rightUnit = rightUnitPart.removePrefix("/").findUnit(context)
            ?: return null

        return CompositeDataUnitModel(leftUnit.id, rightUnit.leftUnitId, CompositeDataUnitOperator.DIVISION)
    }

    private suspend fun importCatalogue(catalogueImportData: CatalogueImportData): CatalogueId {
        val catalogueId = catalogueF2AggregateService.create(catalogueImportData.createCommand, null).id
        val catalogue = catalogueF2FinderService.get(catalogueId, LANGUAGE)

        if (catalogueImportData.indicators.isEmpty()) {
            return catalogueId
        }

        val parentDataset = catalogue.datasets.first { it.type == DATASET_INDICATORS_TYPE }
        val (datasetId, distributionId) = createIndicatorDataset(parentDataset.id)

        val commands = catalogueImportData.indicators.map { indicator ->
            DatasetAddDistributionValueCommandDTOBase(
                id = datasetId,
                distributionId = distributionId,
                informationConceptId = indicator.conceptId,
                unit = indicator.unit,
                isRange = indicator.isRange,
                value = indicator.value,
                description = indicator.description
            )
        }
        datasetF2AggregateService.addDistributionValues(commands)

        return catalogueId
    }

    private suspend fun createIndicatorDataset(parentId: DatasetId): Pair<DatasetId, DistributionId> {
        val datasetId = DatasetCreateCommandDTOBase(
            identifier = null,
            parentId = parentId,
            title = DATASET_INDICATOR_TITLE,
            type = DATASET_INDICATOR_TYPE,
            language = LANGUAGE,
        ).let { datasetF2AggregateService.create(it).id }

        val distributionId = DatasetAddEmptyDistributionCommandDTOBase(
            id = datasetId,
            name = null
        ).let { datasetF2AggregateService.addEmptyDistribution(it).distributionId }

        return datasetId to distributionId
    }

    private fun CSVRecord.getColumn(column: String) = get(column)?.trim()?.unquote()?.trim()?.ifEmpty { null }
    private fun String.normalizeNumber() = replace(',', '.').replace(" ", "")
    private fun String.normalizeUnit() = trim().trimAroundSlashes().lowercase()
    private fun String.trimAroundSlashes() = replace(Regex("""( */ *)"""), "/")
    private fun String.unquote() = removeSurrounding("\"")

    private fun buildCatalogueIdentifier(type: String, suffix: String): CatalogueIdentifier {
        return "$type-$suffix"
    }

    private inner class ImportContext {
        val catalogueIds = SimpleCache<CatalogueIdentifier, CatalogueId> {
            catalogueFinderService.getByIdentifier(it).id
        }

        val conceptIds = SimpleCache<InformationConceptIdentifier, InformationConceptModel?> {
            cccevOldFinderService.getConceptByIdentifierOrNull(it)
        }

        val licenseIds = SimpleCache<LicenseIdentifier, LicenseId> {
            licenseF2FinderService.getByIdentifier(it).id
        }

        val units = mutableMapOf<DataUnitId, DataUnitModel>()
        lateinit var stringUnit: DataUnitModel
        val unitsMap: Map<String, DataUnitModel> = runBlocking {
            cccevOldFinderService.listUnits().flatMap { unit ->
                units[unit.id] = unit
                if (unit.type == DataUnitType.STRING) {
                    stringUnit = unit
                }
                unit.abbreviation.map { (_, abbv) -> abbv.normalizeUnit() to unit }
            }.toMap()
        }

        suspend fun getCatalogueIdByIdentifier(type: String, suffix: String): CatalogueId {
            return catalogueIds.get(buildCatalogueIdentifier(type, suffix))
        }
    }
}

private enum class Cat100mProjectsCsvColumn(val value: String) {
    TITLE("Titre"),
    DESCRIPTION("Description"),
    SECTOR("Secteur"),
    PLANETARY_BOUNDARIES("Limites planétaires"),
    COUNTRY("Pays"),
    REGION("Région"),
    STAKEHOLDER("Porteur du projet"),
    ACCESS("Accès"),
    LICENCE("Licence")
}

private data class CatalogueImportData(
    val createCommand: CatalogueCreateCommandDTOBase,
    val indicators: List<SupportedValueModel>
)
