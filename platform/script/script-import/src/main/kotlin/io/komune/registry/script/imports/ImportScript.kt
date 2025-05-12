package io.komune.registry.script.imports

import cccev.dsl.client.DataClient
import cccev.dsl.client.toUpdateCommand
import com.fasterxml.jackson.module.kotlin.readValue
import f2.dsl.fnc.invokeWith
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.api.commons.utils.mapAsyncIndexed
import io.komune.registry.f2.catalogue.client.catalogueCreate
import io.komune.registry.f2.catalogue.client.catalogueUpdate
import io.komune.registry.f2.catalogue.domain.command.CatalogueAddRelatedCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueReferenceDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetQuery
import io.komune.registry.f2.cccev.domain.concept.query.InformationConceptListQuery
import io.komune.registry.f2.cccev.domain.unit.command.DataUnitCreateCommandDTOBase
import io.komune.registry.f2.cccev.domain.unit.query.DataUnitListQuery
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierQuery
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.script.imports.indicators.IndicatorInitializer
import io.komune.registry.script.imports.model.CatalogueDatasetMediaSettings
import io.komune.registry.script.imports.model.CatalogueDatasetSettings
import io.komune.registry.script.imports.model.CatalogueImportData
import io.komune.registry.script.imports.model.ImportSettings
import io.komune.registry.script.imports.model.loadJsonCatalogue
import io.komune.registry.script.imports.preparse.PreparseScript
import io.komune.registry.script.init.RegistryScriptInitProperties
import io.komune.registry.script.init.asAuthRealm
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory
import java.io.File

class ImportScript(
    private val properties: RegistryScriptInitProperties
) {
    private val logger = LoggerFactory.getLogger(javaClass)

    private val dataClient: DataClient
    private lateinit var importRepository: ImportRepository
    private lateinit var markdownMediaImport: MarkdownMediaImport
    private lateinit var indicatorInitializer: IndicatorInitializer

    init {
        val authRealm = properties.asAuthRealm()

        dataClient = runBlocking {
            if (properties.registry?.url == null) {
                throw IllegalArgumentException("Registry URL is not set")
            }
            DataClient(properties.registry!!.url, authRealm)
        }
    }

    suspend fun run() {
        PreparseScript(properties).run()

        val rootDirectories = getRootDirs()
        rootDirectories.map { rootDirectory ->
            if (importFolder(rootDirectory)) return
        }
    }

    private suspend fun ImportScript.importFolder(rootDirectory: File): Boolean {
        logger.info("/////////////////////////////////////////////////////////////////")
        logger.info("/////////////////////////////////////////////////////////////////")
        logger.info("Importing data from $rootDirectory")
        logger.info("/////////////////////////////////////////////////////////////////")
        logger.info("/////////////////////////////////////////////////////////////////")
        if (!rootDirectory.exists() || !rootDirectory.isDirectory) {
            throw IllegalArgumentException("Root directory does not exist: $rootDirectory")
        }

        val settingsFile = File(rootDirectory, "settings.json")
        if (!settingsFile.exists() || !settingsFile.isFile) {
            throw IllegalArgumentException("File settings.json not found in root directory")
        }

        val catalogueSettings = jsonMapper.readValue<ImportSettings>(settingsFile)
            .catalogue
            ?: return true

        val importContext = ImportContext(rootDirectory, catalogueSettings)
        importRepository = ImportRepository(dataClient, importContext)
        markdownMediaImport = MarkdownMediaImport(properties, importRepository)
        indicatorInitializer = IndicatorInitializer(dataClient, importContext, importRepository)

        importRepository.fetchPreExistingDatasets()
        importRepository.fetchPreExistingGraphDataset()

        if (!catalogueSettings.jsonPathPattern.endsWith(".json")) {
            throw IllegalArgumentException("Invalid JSON path pattern: ${catalogueSettings.jsonPathPattern}")
        }

        initEntities(importContext)
        importCatalogues(importContext)
        return false
    }

    private fun getRootDirs(): List<File> {
        return buildList {
            properties.source?.let {
                add(File(it))
            }
            properties.sources?.forEach {
                add(File(it))
            }
        }
    }

    private suspend fun initEntities(importContext: ImportContext) {
        logger.info("Initializing basic entities...")

        logger.info("Initializing Concepts entities...")
        initConcepts(importContext)
        logger.info("Initialized Concepts entities.")

        logger.info("Initializing Licenses entities...")
        initLicenses(importContext)
        logger.info("Initialized Licenses entities.")

        logger.info("Initializing Data Units entities...")
        initDataUnits(importContext)
        logger.info("Initialized Data Units entities.")

        logger.info("Initializing Information Concepts entities...")
        initInformationConcepts(importContext)
        logger.info("Initialized Information Concepts entities.")

        logger.info("Initializing Standard Catalogue entities...")
        initCatalogues(importContext)
        logger.info("Initialized Standard Catalogue entities.")

        logger.info("Initialized basic entities.")
    }

    private suspend fun initConcepts(importContext: ImportContext) {
        importContext.settings.init
            ?.concepts
            ?.forEach { concept ->
                val conceptId = importRepository.getOrCreateConcept(concept)
                importContext.concepts[concept.identifier] = conceptId
            }
    }

    private suspend fun initLicenses(importContext: ImportContext) {
        importContext.settings.init
            ?.licenses
            ?.forEach { license ->
                val licenseId = importRepository.getOrCreateLicense(license)
                importContext.licenses[license.identifier] = licenseId
            }
    }

    private suspend fun initDataUnits(importContext: ImportContext) {
        DataUnitListQuery("en").invokeWith(dataClient.cccev.dataUnitList())
            .items
            .mapAsyncIndexed { _, unit ->
                importContext.dataUnits[unit.identifier] = importRepository.getDataUnit(unit.identifier)!!
            }
        importContext.settings.init
            ?.dataUnits
            ?.forEach { dataUnit ->
                importContext.dataUnits[dataUnit.identifier]
                    ?: run {
                        DataUnitCreateCommandDTOBase(
                            identifier = dataUnit.identifier,
                            name = dataUnit.name,
                            abbreviation = dataUnit.abbreviation,
                            type = dataUnit.type,
                        ).invokeWith(dataClient.cccev.dataUnitCreate()).item
                    }.also { importContext.dataUnits[it.identifier] = it }
            }
    }

    private suspend fun initInformationConcepts(importContext: ImportContext) {
        InformationConceptListQuery("en").invokeWith(dataClient.cccev.informationConceptList())
            .items
            .mapAsyncIndexed { _, concept ->
                importContext.informationConcepts[concept.identifier] = importRepository.getInformationConcept(concept.identifier)!!
            }
        importContext.settings.init
            ?.informationConcepts
            ?.forEach { informationConcept ->
                importContext.informationConcepts[informationConcept.identifier]
                    ?: importRepository.createInformationConcept(informationConcept)
                        .also { importContext.informationConcepts[it.identifier] = it }
            }
    }

    private suspend fun initCatalogues(importContext: ImportContext): List<CatalogueDTOBase> {
        val catalogues = importContext.settings.init?.catalogues?.nullIfEmpty() ?: return emptyList()

        return catalogues.flatMapIndexed { i, catalogueData ->
            logger.info("(${i + 1}/${catalogues.size}) Initializing catalogue ${catalogueData.identifier}...")
            importCatalogue(catalogueData, importContext).map {
                logger.info("Initialized catalogue[id:${it.id}, identifier: ${it.identifier}] ${it.title}.")
                it
            }
        }.also {
            connectCatalogues(importContext)
        }
    }

    private suspend fun importCatalogues(
        importContext: ImportContext,
    ) {
        logger.info("Importing catalogues...")
        val pathMatcher = importContext.rootDirectory
            .toPath()
            .fileSystem
            .getPathMatcher("glob:${importContext.rootDirectory.path}/${importContext.settings.jsonPathPattern}")

        val catalogueFiles = importContext.rootDirectory.walk()
            .filter { pathMatcher.matches(it.toPath()) }
            .toSortedSet()

        val catalogues = catalogueFiles.mapAsyncIndexed { i, catalogueFile ->
            logger.info("(${i + 1}/${catalogueFiles.size}) Importing catalogue from ${catalogueFile.absolutePath}...")

            val catalogueData = catalogueFile.loadJsonCatalogue(importContext)
            catalogueFile to importCatalogue(catalogueData, importContext).onEach { catalogue ->
                logger.info("Imported catalogue[id:${catalogue.id}, identifier: ${catalogue.identifier}] ${catalogue.title}.")
            }
        }
        connectCatalogues(importContext)

        catalogues.mapAsyncIndexed { i, (catalogueFile, catalogueGroup) ->
            logger.info("(${i + 1}/${catalogues.size}) Importing datasets of catalogues from ${catalogueFile.absolutePath}...")
            catalogueGroup.forEach { catalogue ->
                importContext.settings.datasets?.map { dataset ->
                    importDataset(catalogue, dataset, catalogueFile.parentFile, catalogue.language)
                }
            }
            logger.info("Imported datasets of catalogues from ${catalogueFile.absolutePath}.")
        }

        connectCataloguesDatasetsReferences(importContext)
        logger.info("Imported catalogues.")
    }

    private suspend fun importCatalogue(
        catalogueData: CatalogueImportData,
        importContext: ImportContext,
    ): List<CatalogueDTOBase> {
        val existing = importRepository.getCatalogue(catalogueData)
        if (existing != null) {
            logger.info("Catalogue ${catalogueData.identifier} already exists. Skipping.")
            importContext.catalogues[catalogueData.identifier] = existing.id
            return listOf(existing)
        }

        return catalogueData.languages.filter { (_, data) ->
            data.title == null || data.title.trim() != "null | null"
        }.map { (_, translation) ->
            val imageFile = buildImageFile(catalogueData, importContext)
            logger.info("Catalogue creation [${catalogueData.identifier}, ${translation.language}]")
            val createCommand = CatalogueCreateCommandDTOBase(
                identifier = catalogueData.identifier,
                title = translation.title.orEmpty().removeSuffix(" | null"),
                description = translation.description,
                type = importContext.mapCatalogueType(catalogueData.type),
                language = translation.language,
                order = catalogueData.order,
                themes = catalogueData.themes?.mapNotNull { mapConcept(it, importContext) },
                accessRights = catalogueData.accessRights ?: importContext.settings.defaults?.accessRights,
                license = importContext.settings.defaults?.license?.let { importContext.licenses[it] },
                homepage = catalogueData.homepage,
                catalogues = catalogueData.children,
                relatedCatalogueIds = catalogueData.related
            ) to imageFile
            val catalogueId = createCommand.invokeWith(dataClient.catalogue.catalogueCreate()).id

            val catalogue = CatalogueGetQuery(catalogueId, translation.language)
                .invokeWith(dataClient.catalogue.catalogueGet())
                .item!!

            importContext.catalogues[catalogueData.identifier] = catalogue.id
            catalogue.datasets.forEach {
                importContext.preExistingDatasets[it.identifier] = it
            }

            catalogueData.parentIdentifier(importContext)
                ?.nullIfEmpty()
                ?.forEach { importContext.catalogueParents[catalogue.id] = it }
                ?: importContext.settings.defaults?.parent?.get(catalogue.type)
                    ?.let { importContext.catalogueParents[catalogue.id] = it.identifier }

            catalogueData.related?.nullIfEmpty()?.let { importContext.catalogueCatalogueReferences[catalogueId] = it }

            catalogueData.languages.filterKeys { it !in catalogue.availableLanguages }.forEach { (_, translation) ->
                (catalogue.toUpdateCommand().copy(
                    title = translation.title.orEmpty(),
                    description = translation.description,
                    language = translation.language,
                ) to null).invokeWith(dataClient.catalogue.catalogueUpdate())
            }

            catalogueData.datasets?.forEach { datasetSettings ->
                importDataset(catalogue, datasetSettings, importContext.rootDirectory, translation.language)
            }
            catalogue
        }
    }

    private fun buildImageFile(
        catalogueData: CatalogueImportData,
        importContext: ImportContext
    ): SimpleFile? {
        val imageContent = catalogueData.img?.let { getImage(it, importContext) }
        val fileExtension = catalogueData.img?.let { File(it).extension }
        val imageFile = imageContent?.let { SimpleFile("image.${fileExtension}", it) }
        return imageFile
    }

    private suspend fun importDataset(
        catalogue: CatalogueDTOBase,
        datasetSettings: CatalogueDatasetSettings,
        directory: File,
        language: Language,
        datasetParent: DatasetDTOBase? = null,
    ) {
        datasetSettings.media.forEach { media ->
            val dataset = media.translations[language]?.let { path ->
                val file = directory.resolve(path).takeIf { it.exists() && it.isFile }
                    ?: return@forEach

                val dataset = importRepository.initDataset(language, datasetSettings, catalogue, datasetParent)
                importDistribution(media, path, datasetParent, file, dataset, datasetSettings, catalogue, language)
                dataset
            }
            datasetSettings.datasets?.forEach {
                importDataset(catalogue, it, directory, language, dataset)
            }
        }

        datasetSettings.indicators?.get(language)?.let { path ->
            val indicatorsDirectory = directory.resolve(path).takeIf { it.exists() && it.isDirectory }
                ?: return@let
            indicatorInitializer.initialize(catalogue, language, indicatorsDirectory, datasetSettings.indicatorFormat)
        }
    }

    private suspend fun ImportScript.importDistribution(
        media: CatalogueDatasetMediaSettings,
        path: String,
        datasetParent: DatasetDTOBase?,
        file: File,
        dataset: DatasetDTOBase,
        datasetSettings: CatalogueDatasetSettings,
        catalogue: CatalogueDTOBase,
        language: Language
    ) {
        when (media.mediaType) {
            "application/json" -> {
                if (path.endsWith("chart.json")) {
                    createChartDatasetMediaDistribution(datasetParent, file, dataset, media)
                } else {
                    val rawText = file.readText()
                    importRepository.createDatasetMediaDistribution(
                        dataset = dataset,
                        mediaType = media.mediaType,
                        file = SimpleFile(file.name, rawText.toByteArray())
                    )
                }
            }

            "text/markdown" -> {
                val resourceDataset = getOrCreateResourceDataset(datasetSettings, catalogue, language, dataset)
                markdownMediaImport.createMarkdownDatasetMediaDistribution(
                    dataset = dataset,
                    resourcesDataset = resourceDataset,
                    datasetSettings = datasetSettings,
                    file = file
                )
            }

            else -> importRepository.createDatasetMediaDistribution(
                dataset = dataset,
                mediaType = media.mediaType,
                file = file.toSimpleFile()
            )
        }
    }

    private suspend fun createChartDatasetMediaDistribution(
        datasetParent: DatasetDTOBase?,
        file: File,
        dataset: DatasetDTOBase,
        media: CatalogueDatasetMediaSettings
    ) {
        val lastDataSet = datasetParent?.let {
            importRepository.getDataset(datasetParent.id)
        }
        lastDataSet?.distributions?.find { it.mediaType == "text/csv" }?.let { csvDistribution ->
            val rawText = file.readText()
            val newText = rawText.replace("#csvDistributionId", csvDistribution.id)
            logger.info(
                "Replacing Dataset[${dataset.id},${dataset.identifier}] Parent[${datasetParent.id}, " +
                        "${datasetParent.identifier}] #csvDistributionId with ${csvDistribution.id}"
            )
            importRepository.createDatasetMediaDistribution(
                dataset = dataset,
                mediaType = media.mediaType,
                file = SimpleFile(file.name, newText.toByteArray())
            )
        }
    }

    private suspend fun getOrCreateResourceDataset(
        datasetSettings: CatalogueDatasetSettings,
        catalogue: CatalogueDTOBase,
        language: Language,
        dataset: DatasetDTOBase
    ) = datasetSettings.resourcesDataset
        ?.let {
            val identifier = importRepository.getDatasetIdentifier(catalogue, language, it)
            importRepository.getOrCreateDataset(
                identifier = identifier,
                parentId = null,
                catalogue = catalogue,
                language = language,
                type = "resources",
            )
        } ?: dataset

    private suspend fun connectCatalogues(importContext: ImportContext) {
        connectCataloguesParents(importContext)
        connectCatalogueCataloguesReferences(importContext)
    }

    private suspend fun connectCataloguesParents(importContext: ImportContext) {
        logger.info("Linking catalogues parents...")
        val size = importContext.catalogueParents.entries.size
        importContext.catalogueParents.entries.mapIndexed { index, (catalogueId, parentIdentifier) ->
            logger.info("($index/$size) Linking [${catalogueId} -> $parentIdentifier]")
            val parentId = importContext.catalogues[parentIdentifier]
                ?: run {
                    if (importContext.settings.useDefaultIfUnknownParent) {
                        val defaultParentId = getDefaultParentId(catalogueId, importContext)
                        logger.warn(
                            "Catalogue[$catalogueId] => ParentCatalogue $parentIdentifier not found. " +
                                    "Using default [${defaultParentId}] or ignoring if not specified."
                        )
                        defaultParentId ?: return@mapIndexed
                    } else {
                        throw IllegalArgumentException("Parent catalogue not found: $parentIdentifier")
                    }
                }

            CatalogueLinkCataloguesCommandDTOBase(
                id = parentId,
                catalogues = listOf(catalogueId)
            ).invokeWith(dataClient.catalogue.catalogueLinkCatalogues())
        }
        importContext.catalogueParents.clear()
    }

    private suspend fun connectCatalogueCataloguesReferences(importContext: ImportContext) {
        logger.info("Linking catalogues references...")
        val size = importContext.catalogueCatalogueReferences.size
        importContext.catalogueCatalogueReferences.entries.mapIndexed { index, (catalogueId, references) ->
            logger.info("($index/$size) Linking [${catalogueId} -> $references]")
            CatalogueAddRelatedCataloguesCommandDTOBase(
                id = catalogueId,
                relatedCatalogueIds = references,
            ).invokeWith(dataClient.catalogue.catalogueAddRelatedCatalogues())
        }
        importContext.catalogueCatalogueReferences.clear()
    }

    private suspend fun connectCataloguesDatasetsReferences(importContext: ImportContext) {
        logger.info("Linking catalogues datasets references...")
        val size = importContext.catalogueDatasetReferences.size
        importContext.catalogueDatasetReferences.entries.mapIndexed { index, (catalogueIdentifier, datasetIds) ->
            logger.info("($index/${size}) Linking [${catalogueIdentifier} -> $datasetIds]")
            try {
                val catalogueId = importContext.catalogues[catalogueIdentifier]
                    ?: throw IllegalArgumentException("Catalogue not found: $catalogueIdentifier")
                CatalogueReferenceDatasetsCommandDTOBase(
                    id = catalogueId,
                    datasetIds = datasetIds
                ).invokeWith(dataClient.catalogue.catalogueReferenceDatasets())
            } catch (e: Exception) {
                logger.error("Error linking datasets to catalogue [$catalogueIdentifier]: ${e.message}")
            }
        }
        importContext.catalogueDatasetReferences.clear()
    }

    private suspend fun getDefaultParentId(catalogueId: CatalogueId, importContext: ImportContext): CatalogueId? {
        val catalogue = CatalogueGetQuery(catalogueId, null)
            .invokeWith(dataClient.catalogue.catalogueGet())
            .item!!

        val defaultParent = importContext.settings.defaults?.parent?.get(catalogue.type)
            ?: return null

        return CatalogueGetByIdentifierQuery(defaultParent.identifier, null)
            .invokeWith(dataClient.catalogue.catalogueGetByIdentifier())
            .item
            ?.id.also {
                logger.info("Found default parent: $it")
            }
    }

    private fun getImage(image: String, importContext: ImportContext): ByteArray? {
        val file = if (image.startsWith('/')) {
            File(image)
        } else {
            File(importContext.rootDirectory, image)
        }
        return file.takeIf { it.exists() && it.isFile }?.readBytes()
    }


    private suspend fun mapConcept(concept: String, importContext: ImportContext): ConceptId? {
        return importContext.settings
            .mapping
            ?.concepts
            ?.get(concept)
            .let {
                val identifier = it ?: concept
                importContext.concepts[identifier]
                    ?: ConceptGetByIdentifierQuery(identifier)
                        .takeUnless { importContext.concepts.containsKey(identifier) } // skip if already tried once and is still null
                        ?.invokeWith(dataClient.concept.conceptGetByIdentifier())
                        ?.item
                        ?.id
                        .also { id -> importContext.concepts[identifier] = id }
            }
            ?: run {
                logger.warn("Concept [$concept] not found. Ignoring.")
                null
            }
    }

    private fun CatalogueImportData.parentIdentifier(importContext: ImportContext): List<CatalogueIdentifier>? {
        return parents?.map { parent ->
            if (parent.identifier != null && parent.identifier.startsWith(parent.type)) {
                parent.identifier
            } else {
                val mapParentType = importContext.mapCatalogueType(parent.type)
                parent.identifier?.let {
                    "$mapParentType-${parent.identifier}"
                } ?: mapParentType
            }
        }

    }
}

fun File.toSimpleFile() = SimpleFile(name, readBytes())
