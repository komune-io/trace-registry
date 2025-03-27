package io.komune.registry.script.imports

import cccev.dsl.client.DataClient
import cccev.dsl.client.toUpdateCommand
import com.fasterxml.jackson.module.kotlin.readValue
import f2.dsl.fnc.invokeWith
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.api.commons.utils.mapAsyncIndexed
import io.komune.registry.f2.catalogue.client.catalogueCreate
import io.komune.registry.f2.catalogue.client.catalogueUpdate
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetQuery
import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.script.imports.model.CatalogueDatasetMediaSettings
import io.komune.registry.script.imports.model.CatalogueDatasetSettings
import io.komune.registry.script.imports.model.CatalogueImportData
import io.komune.registry.script.imports.model.CatalogueImportSettings
import io.komune.registry.script.imports.model.ImportSettings
import io.komune.registry.script.imports.model.loadJsonCatalogue
import io.komune.registry.script.init.RegistryScriptInitProperties
import io.komune.registry.script.init.asAuthRealm
import kotlinx.coroutines.runBlocking
import org.slf4j.LoggerFactory
import java.io.File
import java.util.concurrent.ConcurrentHashMap

class ImportScript(
    private val properties: RegistryScriptInitProperties
) {
    private val logger = LoggerFactory.getLogger(javaClass)

    private val dataClient: DataClient
    private val importRepository: ImportRepository
    private val markdownMediaImport: MarkdownMediaImport

    init {
        val authRealm = properties.asAuthRealm()

        dataClient = runBlocking {
            if (properties.registry?.url == null) {
                throw IllegalArgumentException("Registry URL is not set")
            }
            DataClient(properties.registry!!.url, authRealm)
        }
        importRepository = ImportRepository(dataClient)
        markdownMediaImport = MarkdownMediaImport(properties, importRepository)
    }

    suspend fun run() {
        val rootDirectory = getRootDir()

        logger.info("Importing data from ${rootDirectory}")
        if (!rootDirectory.exists() || !rootDirectory.isDirectory) {
            throw IllegalArgumentException("Root directory does not exist: $rootDirectory")
        }

        val settingsFile = File(rootDirectory, "settings.json")
        if (!settingsFile.exists() || !settingsFile.isFile) {
            throw IllegalArgumentException("File settings.json not found in root directory")
        }

        val catalogueSettings = jsonMapper.readValue<ImportSettings>(settingsFile)
            .catalogue
            ?: return
        val importContext = ImportContext(rootDirectory, catalogueSettings)

        if (!catalogueSettings.jsonPathPattern.endsWith(".json")) {
            throw IllegalArgumentException("Invalid JSON path pattern: ${catalogueSettings.jsonPathPattern}")
        }

        initEntities(importContext)
        importCatalogues(importContext)
    }

    private fun getRootDir(): File {
        val source = properties.source.folder
        val rootDirectory = File(source)
        return rootDirectory
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
        importContext.settings.init
            ?.dataUnits
            ?.forEach { dataUnit ->
                importRepository.getOrCreateDataUnit(dataUnit)
            }
    }

    private suspend fun initInformationConcepts(importContext: ImportContext) {
        importContext.settings.init
            ?.informationConcepts
            ?.forEach { informationConcept ->
                importRepository.getOrCreateInformationConcept(informationConcept)
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
        }
    }

    private suspend fun importCatalogues(importContext: ImportContext) {
        logger.info("Importing catalogues...")
        val pathMatcher = importContext.rootDirectory
            .toPath()
            .fileSystem
            .getPathMatcher("glob:${importContext.rootDirectory.path}/${importContext.settings.jsonPathPattern}")

        val catalogueFiles = importContext.rootDirectory.walk()
            .filter { pathMatcher.matches(it.toPath()) }
            .toSortedSet()

        catalogueFiles.mapAsyncIndexed { i, catalogueFile ->
            logger.info("(${i + 1}/${catalogueFiles.size}) Importing catalogue from ${catalogueFile.absolutePath}...")
            importCatalogue(catalogueFile, importContext)
        }

        connectCatalogues(importContext)
        logger.info("Imported catalogues.")
    }

    private suspend fun importCatalogue(jsonFile: File, importContext: ImportContext) {
        val fixedData = jsonFile.loadJsonCatalogue(importContext)
        importCatalogue(fixedData, importContext).forEach { catalogue ->
            logger.info("Imported catalogue[id:${catalogue.id}, identifier: ${catalogue.identifier}] ${catalogue.title}.")
            importContext.settings.datasets?.map { dataset ->
                importDataset(catalogue, dataset, jsonFile.parentFile)
            }
        }
    }

    private suspend fun importCatalogue(
        catalogueData: CatalogueImportData,
        importContext: ImportContext
    ): List<CatalogueDTOBase> {
        val existing = importRepository.getCatalogue(catalogueData)
        if (existing != null) {
            logger.info("Catalogue ${catalogueData.identifier} already exists. Skipping.")
            return listOf(existing)
        }
        return catalogueData.languages.map { (_, translation) ->
            val imageFile = buildImageFile(catalogueData, importContext)
            logger.info("Catalogue creation [${catalogueData.identifier}, ${translation.language}]")
            val createCommand = CatalogueCreateCommandDTOBase(
                identifier = catalogueData.identifier,
                title = translation.title.orEmpty(),
                description = translation.description,
                type = importContext.mapCatalogueType(catalogueData.type),
                language = translation.language,
                structure = (catalogueData.structure ?: importContext.settings.defaults?.structure?.let(::Structure)),
                themes = catalogueData.themes?.mapNotNull { mapConcept(it, importContext) },
                accessRights = importContext.settings.defaults?.accessRights,
                license = importContext.settings.defaults?.license?.let { importContext.licenses[it] },
                catalogues = catalogueData.children
            ) to imageFile
            val catalogueId = createCommand.invokeWith(dataClient.catalogue.catalogueCreate()).id

            val catalogue = CatalogueGetQuery(catalogueId, null)
                .invokeWith(dataClient.catalogue.catalogueGet())
                .item!!
            importContext.catalogues[catalogueData.identifier] = catalogue.id
            catalogueData.parentIdentifier(importContext)?.forEach {
                importContext.catalogueParents[catalogue.id] = it
            }

            catalogueData.languages.filterKeys { it !in catalogue.availableLanguages }.forEach { (_, translation) ->
                (catalogue.toUpdateCommand().copy(
                    title = translation.title.orEmpty(),
                    description = translation.description,
                    language = translation.language,
                ) to null).invokeWith(dataClient.catalogue.catalogueUpdate())
            }
            val root = getRootDir()
            catalogueData.datasets?.forEach { datasetSettings ->
                importDataset(catalogue, datasetSettings, root)
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
        datasetParents: Map<String, DatasetDTOBase>? = null,
    ) {
        datasetSettings.media.forEach { media ->
            val datasetByLangue: Map<String, DatasetDTOBase> = media.translations.mapValues { (language, path) ->
                val file = directory.resolve(path).takeIf { it.exists() && it.isFile }
                    ?: return@forEach

                val datasetParent = datasetParents?.get(language)

                val dataset = importRepository.initDataset(language, datasetSettings, catalogue, datasetParent)
                importDistribution(media, path, datasetParent, file, dataset, datasetSettings, catalogue, language)
                dataset
            }
            datasetSettings.datasets?.forEach {
                importDataset(catalogue, it, directory, datasetByLangue)
            }
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
            val identifer = importRepository.getDatasetIdentifier(catalogue, language, it)
            importRepository.getOrCreateDataset(
                identifier = identifer,
                parentId = null,
                catalogueId = catalogue.id,
                language = language,
                type = "resources",
            )
        } ?: dataset

    private suspend fun connectCatalogues(importContext: ImportContext) {
        logger.info("Linking catalogues...")
        val size = importContext.catalogueParents.entries.size
        importContext.catalogueParents.entries.mapIndexed { index, (catalogueId, parentIdentifier) ->
            logger.info("($index/$size) Linking [${catalogueId} -> $parentIdentifier]")
            val parentId = importContext.catalogues[parentIdentifier]
                ?: run {
                    if (importContext.settings.useDefaultIfUnknownParent) {
                        val defaultParentId = getDefaultParentId(catalogueId, importContext)
                        logger.warn("Catalogue[$catalogueId] => ParentCatalogue $parentIdentifier not found. " +
                                "Using default [${defaultParentId}] or ignoring if not specified.")
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
        val file = File(importContext.rootDirectory, image)
        return file.takeIf { it.exists() && it.isFile }?.readBytes()
    }


    private fun mapConcept(concept: String, importContext: ImportContext): ConceptId? {
        return importContext.settings
            .mapping
            ?.concepts
            ?.get(concept)
            .let { importContext.concepts[it ?: concept] }
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

class ImportContext(
    val rootDirectory: File,
    val settings: CatalogueImportSettings
) {
    val concepts = ConcurrentHashMap<ConceptIdentifier, ConceptId>()
    val licenses = ConcurrentHashMap<LicenseIdentifier, LicenseId>()
    val catalogues = ConcurrentHashMap<CatalogueIdentifier, CatalogueId>()
    val catalogueParents = ConcurrentHashMap<CatalogueId, CatalogueIdentifier>()

    fun mapCatalogueType(type: String): String {
        return settings
            .mapping
            ?.catalogueTypes
            ?.get(type)
            ?: type
    }
}

fun File.toSimpleFile() = SimpleFile(name, readBytes())
