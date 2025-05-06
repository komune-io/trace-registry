package io.komune.registry.script.imports

import cccev.dsl.client.DataClient
import f2.dsl.cqrs.exception.F2Exception
import f2.dsl.fnc.invokeWith
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.cccev.domain.concept.model.InformationConceptDTOBase
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetByIdentifierQuery
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitGetByIdentifierQuery
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierQuery
import io.komune.registry.f2.dataset.client.datasetAddMediaDistribution
import io.komune.registry.f2.dataset.client.datasetUpdateMediaDistribution
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetUpdateMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetExistsQuery
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.f2.dataset.domain.query.DatasetGetQuery
import io.komune.registry.f2.dataset.domain.query.DatasetGraphSearchQuery
import io.komune.registry.f2.dataset.domain.query.DatasetPageQuery
import io.komune.registry.f2.license.domain.query.LicenseGetByIdentifierQuery
import io.komune.registry.s2.cccev.domain.command.concept.InformationConceptCreateCommand
import io.komune.registry.s2.cccev.domain.model.AggregatorConfig
import io.komune.registry.s2.cccev.domain.model.CompositeDataUnitModel
import io.komune.registry.s2.commons.model.DataUnitIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.DatasetIdentifier
import io.komune.registry.s2.commons.model.DistributionId
import io.komune.registry.s2.commons.model.InformationConceptIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import io.komune.registry.s2.license.domain.command.LicenseCreateCommand
import io.komune.registry.script.imports.model.CatalogueDatasetSettings
import io.komune.registry.script.imports.model.CatalogueImportData
import io.komune.registry.script.imports.model.ConceptInitData
import io.komune.registry.script.imports.model.InformationConceptInitData
import io.komune.registry.script.imports.model.LicenseInitData
import org.slf4j.LoggerFactory

class ImportRepository(
    private val dataClient: DataClient,
    private val importContext: ImportContext,
) {
    private val logger = LoggerFactory.getLogger(javaClass)

    suspend fun fetchPreExistingGraphDataset() {
        setOf("fr", "en", "es").forEach { language ->
            importContext.preExistinggraphDataset[language] = try {
                DatasetGraphSearchQuery(
                    rootCatalogueIdentifier = "100m-charts",
                    datasetType = "rawGraph",
                    language = language
                ).invokeWith(dataClient.dataset.datasetGraphSearch()).items
            }catch (e: F2Exception) {
                logger.error(e.error.message, e)
                emptyList()
            }
        }
    }

    suspend fun fetchPreExistingDatasets() {
        var offset = 0
        val limit = 500

        do {
            val result = DatasetPageQuery(
                offset = offset,
                limit = limit
            ).invokeWith(dataClient.dataset.datasetPage())

            result.items.forEach {
                importContext.preExistingDatasets[it.identifier] = it
            }
            offset += limit
        } while (result.total > offset)
    }

    suspend fun getOrCreateConcept(concept: ConceptInitData) = ConceptGetByIdentifierQuery(concept.identifier)
        .invokeWith(dataClient.concept.conceptGetByIdentifier())
        .item
        ?.id
        ?: run {
            ConceptCreateCommand(
                identifier = concept.identifier,
                prefLabels = concept.prefLabels,
                definitions = concept.definitions.orEmpty(),
                schemes = concept.schemes.orEmpty().toSet(),
            ).invokeWith(dataClient.concept.conceptCreate()).id
        }

    suspend fun getOrCreateLicense(license: LicenseInitData) = LicenseGetByIdentifierQuery(license.identifier)
        .invokeWith(dataClient.license.licenseGetByIdentifier())
        .item
        ?.id
        ?: run {
            LicenseCreateCommand(
                identifier = license.identifier,
                name = license.name,
                url = license.url,
            ).invokeWith(dataClient.license.licenseCreate()).id
        }

    suspend fun getDataUnit(identifier: DataUnitIdentifier) = DataUnitGetByIdentifierQuery(identifier)
        .invokeWith(dataClient.cccev.dataUnitGetByIdentifier())
        .item

    suspend fun getInformationConcept(identifier: InformationConceptIdentifier) = InformationConceptGetByIdentifierQuery(identifier)
        .invokeWith(dataClient.cccev.informationConceptGetByIdentifier())
        .item

    suspend fun createInformationConcept(
        informationConcept: InformationConceptInitData
    ): InformationConceptDTOBase {
        val unit = informationConcept.unit?.let {
                DataUnitGetByIdentifierQuery(it)
                    .invokeWith(dataClient.cccev.dataUnitGetByIdentifier())
                    .item
                    ?: throw IllegalArgumentException("Data unit not found: ${informationConcept.unit}")
            }

        val themes = informationConcept.themes?.map { identifier ->
            ConceptGetByIdentifierQuery(identifier)
                .invokeWith(dataClient.concept.conceptGetByIdentifier())
                .item
                ?: throw IllegalArgumentException("Theme not found: $identifier")
        }.orEmpty()

        return InformationConceptCreateCommand(
            identifier = informationConcept.identifier,
            name = informationConcept.name,
            unit = unit?.let { CompositeDataUnitModel(it.id, null, null) },
            aggregator = informationConcept.aggregator?.let {
                AggregatorConfig(
                    type = it.type,
                    persistValue = it.persistValue,
                    aggregatedConceptIds = it.aggregatedConcepts?.map { conceptIdentifier ->
                        importContext.informationConcepts[conceptIdentifier]
                            ?.id
                            ?: throw IllegalArgumentException("InformationConcept not found: $conceptIdentifier")
                    }?.toSet(),
                    defaultValue = it.defaultValue,
                )
            },
            themeIds = themes.map { it.id },
        ).invokeWith(dataClient.cccev.informationConceptCreate()).item
    }

    suspend fun getOrCreateDataset(
        identifier: DatasetIdentifier,
        parentId: DatasetId?,
        catalogue: CatalogueDTOBase?,
        language: Language,
        type: String,
        title: String = ""
    ): DatasetDTOBase {
        val existingDataset = findExistingDataset(identifier, language)
        if (existingDataset != null) {
            return existingDataset
        }
        logger.info("Creating dataset[$identifier] $title")
        DatasetCreateCommandDTOBase(
            identifier = identifier,
            parentId = parentId,
            catalogueId = catalogue?.id,
            type = type,
            title = title,
            language = language,
        ).invokeWith(dataClient.dataset.datasetCreate())

        return getAndCache(identifier, language)
    }

    fun findRawGraphDataSet(
        language: Language,
    ): List<DatasetDTOBase> {
        return importContext.preExistinggraphDataset[language] ?: emptyList()
    }

    suspend fun initDataset(
        language: String,
        dataset: CatalogueDatasetSettings,
        catalogue: CatalogueDTOBase,
        datasetParent: DatasetDTOBase?,
    ): DatasetDTOBase {
        val identifierLocalized = getDatasetIdentifier(catalogue, language, dataset.type)

        val existingDataset = findExistingDataset(identifierLocalized, language)
        if (existingDataset != null) {
            return existingDataset
        }


        val title = dataset.title?.get(language)
        logger.info("Creating dataset[$identifierLocalized] $title")
        val created = DatasetCreateCommandDTOBase(
            identifier = identifierLocalized,
            catalogueId = catalogue.id,
            type = dataset.type,
            title = title,
            language = language,
            parentId = datasetParent?.id,
        ).invokeWith(dataClient.dataset.datasetCreate())


        return getAndCache(created.identifier, language)
    }

    private suspend fun getAndCache(
        identifier: DatasetIdentifier,
        language: Language
    ): DatasetDTOBase {
        return DatasetGetByIdentifierQuery(identifier, language)
            .invokeWith(dataClient.dataset.datasetGetByIdentifier())
            .item!!.also {
                importContext.preExistingDatasets[identifier] = it
            }
    }

    private suspend fun findExistingDataset(
        identifierLocalized: String,
        language: Language
    ): DatasetDTOBase? {
        val fetched = importContext.preExistingDatasets[identifierLocalized]
        if (fetched != null) {
            return fetched
        }
        val exists = DatasetExistsQuery(
            identifier = identifierLocalized,
            language = language
        ).invokeWith(dataClient.dataset.datasetExists()).exists
        return if (exists) {
            DatasetGetByIdentifierQuery(identifierLocalized, language)
                .invokeWith(dataClient.dataset.datasetGetByIdentifier())
                .item.also {
                    importContext.preExistingDatasets[identifierLocalized] = it!!
                }
        } else null
    }
    fun getDatasetIdentifier(
        catalogue: CatalogueDTOBase,
        language: String,
        type: String
    ) = "${catalogue.identifier}-${language}-${type}"

    suspend fun createDatasetMediaDistribution(
        dataset: DatasetDTOBase,
        mediaType: String,
        file: SimpleFile,
    ): DistributionId {
        logger.debug("Creating distribution[${dataset.id}] ${file.name} ${mediaType}")
        // Basic filtering to avoid creating duplicate distributions
        val existingDistribution = dataset.distributions?.find {
            it.mediaType == mediaType
        }
        if (existingDistribution != null) {
            // update instead of just returning to replace automatic templates
            return (DatasetUpdateMediaDistributionCommandDTOBase(
                id = dataset.id,
                distributionId = existingDistribution.id,
                name = file.name,
                mediaType = mediaType,
            ) to SimpleFile(
                name = file.name,
                content = file.content
            )).invokeWith(dataClient.dataset.datasetUpdateMediaDistribution()).distributionId
        }
        return (DatasetAddMediaDistributionCommandDTOBase(
            id = dataset.id,
            name = file.name,
            mediaType = mediaType,
            aggregator = null
        ) to SimpleFile(
            name = file.name,
            content = file.content
        )).invokeWith(dataClient.dataset.datasetAddMediaDistribution()).distributionId
    }

    suspend fun getCatalogue(catalogueData: CatalogueImportData): CatalogueDTOBase? {
        try {
            return CatalogueGetByIdentifierQuery(catalogueData.identifier, null)
                .invokeWith(dataClient.catalogue.catalogueGetByIdentifier())
                .item
        } catch (e: F2Exception) {
            logger.error(e.error.message, e)
            return null
        }
    }

    suspend fun getDataset(datasetId: DatasetId): DatasetDTOBase? {
        try {
            return DatasetGetQuery(datasetId)
                .invokeWith(dataClient.dataset.datasetGet())
                .item!!
        } catch (e: F2Exception) {
            logger.error(e.error.message, e)
            return null
        }
    }
}
