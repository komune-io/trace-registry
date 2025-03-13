package io.komune.registry.script.imports

import cccev.dsl.client.DataClient
import cccev.dsl.client.toUpdateCommand
import cccev.dsl.model.nullIfEmpty
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
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.DatasetId
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import io.komune.registry.s2.structure.domain.model.Structure
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
import java.nio.file.Files
import java.util.concurrent.ConcurrentHashMap

class ImportScript(
    private val properties: RegistryScriptInitProperties
) {
    private val logger = LoggerFactory.getLogger(javaClass)

    private val dataClient: DataClient
    private val importRepository: ImportRepository

    init {
        val authRealm = properties.asAuthRealm()

        dataClient = runBlocking {
            if (properties.registry?.url == null) {
                throw IllegalArgumentException("Registry URL is not set")
            }
            DataClient(properties.registry!!.url, authRealm)
        }
        importRepository = ImportRepository(dataClient)
    }

    suspend fun run() {
        val source = properties.source.folder
        logger.info("Importing data from $source")

        val rootDirectory = File(source)
        if (!rootDirectory.exists() || !rootDirectory.isDirectory) {
            throw IllegalArgumentException("Root directory does not exist: $source")
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

    private suspend fun initEntities(importContext: ImportContext) {
        logger.info("Initializing basic entities...")

        logger.info("Initializing Concepts entities...")
        initConcepts(importContext)
        logger.info("Initialized Concepts entities.")

        logger.info("Initializing Licenses entities...")
        initLicenses(importContext)
        logger.info("Initialized Licenses entities.")

        logger.info("Initializing Standard Catalogue entities...")
        initCatalogues(importContext)
        logger.info("Initialized Standard Catalogue entities.")

        logger.info("Initialized basic entities.")
    }

    private suspend fun initConcepts(importContext: ImportContext) {
        val concepts = importContext.settings.init?.concepts.nullIfEmpty() ?: return

        concepts.forEach { concept ->
            val conceptId = importRepository.getOrCreateConcept(concept)
            importContext.concepts[concept.identifier] = conceptId
        }
    }

    private suspend fun initLicenses(importContext: ImportContext) {
        val licenses = importContext.settings.init?.licenses.nullIfEmpty() ?: return

        licenses.forEach { license ->
            val licenseId = importRepository.getOrCreateLicense(license)
            importContext.licenses[license.identifier] = licenseId
        }
    }


    private suspend fun initCatalogues(importContext: ImportContext) {
        val catalogues = importContext.settings.init?.catalogues.nullIfEmpty() ?: return

        catalogues.forEach { catalogueData ->
            importCatalogue(catalogueData, importContext)
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
            .toList()

        catalogueFiles.mapAsyncIndexed { i, catalogueFile ->
            logger.info("(${i + 1}/${catalogueFiles.size}) Importing catalogue from ${catalogueFile.absolutePath}...")
            importCatalogue(catalogueFile, importContext)
        }

        connectCatalogues(importContext)
        logger.info("Imported catalogues.")
    }

    private suspend fun importCatalogue(jsonFile: File, importContext: ImportContext) {
        val fixedData = jsonFile.loadJsonCatalogue(importContext)
        val catalogue = importCatalogue(fixedData, importContext)
        logger.info("Imported catalogue[id:${catalogue.id}, identifier: ${catalogue.identifier}] ${catalogue.title}.")
        importContext.settings.datasets?.forEach {
            importDataset(catalogue, it, jsonFile.parentFile)
        }
    }

    private suspend fun importCatalogue(
        catalogueData: CatalogueImportData,
        importContext: ImportContext
    ): CatalogueDTOBase {
        val catalogue = importRepository.getCatalogue(catalogueData)
            ?: run {
                val translation = catalogueData.languages.values.firstOrNull()
                    ?: throw IllegalArgumentException("No translation specified for catalogue ${catalogueData.identifier}")

                val imageFile = buildImageFile(catalogueData, importContext)

                val createCommand = CatalogueCreateCommandDTOBase(
                    identifier = catalogueData.identifier,
                    title = translation.title.orEmpty(),
                    description = translation.description,
                    type = importContext.mapCatalogueType(catalogueData.type),
                    language = translation.language,
                    structure = (catalogueData.structure ?: importContext.settings.defaults?.structure)?.let(::Structure),
                    themes = catalogueData.themes?.mapNotNull { mapConcept(it, importContext) },
                    accessRights = importContext.settings.defaults?.accessRights,
                    license = importContext.settings.defaults?.license?.let { importContext.licenses[it] },
                    catalogues = catalogueData.children
                ) to imageFile
                val catalogueId = createCommand.invokeWith(dataClient.catalogue.catalogueCreate()).id

                CatalogueGetQuery(catalogueId, null)
                    .invokeWith(dataClient.catalogue.catalogueGet())
                    .item!!
            }


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

        return catalogue
    }

    private fun buildImageFile(
        catalogueData: CatalogueImportData,
        importContext: ImportContext
    ): SimpleFile? {
        val imageContent = catalogueData.img?.let { getImage(it, importContext) }
        val imageFile = imageContent?.let { SimpleFile("image", it) }
        return imageFile
    }

    private suspend fun importDataset(
        catalogue: CatalogueDTOBase,
        dataset: CatalogueDatasetSettings,
        directory: File
    ) {
        dataset.translations.forEach { (language, path) ->
            val file = directory.resolve(path).takeIf { it.exists() && it.isFile }
                ?: return@forEach

            val identifier = "${catalogue.identifier}-$language-${dataset.type}"

            val existingDataset = DatasetGetByIdentifierQuery(identifier, language)
                .invokeWith(dataClient.dataset.datasetGetByIdentifier())
                .item

            if (existingDataset != null) {
                return@forEach
            }

            val datasetId = DatasetCreateCommandDTOBase(
                identifier = identifier,
                catalogueId = catalogue.id,
                type = dataset.type,
                title = "",
                language = language,
            ).invokeWith(dataClient.dataset.datasetCreate()).id

            when (dataset.mediaType) {
                "text/markdown" -> {
                    val resourceDatasetId = dataset.resourcesDataset
                        ?.let {
                            importRepository.getOrCreateDataset(
                                identifier = "${catalogue.identifier}-$language-$it",
                                parentId = null,
                                catalogueId = catalogue.id,
                                language = language,
                                type = "resources",
                            )
                        } ?: datasetId

                    createMarkdownDatasetMediaDistribution(
                        datasetId = datasetId,
                        resourcesDatasetId = resourceDatasetId,
                        datasetSettings = dataset,
                        file = file
                    )
                }
                else -> importRepository.createDatasetMediaDistribution(
                    datasetId = datasetId,
                    mediaType = dataset.mediaType,
                    file = file.toSimpleFile()
                )
            }
        }

    }

    @Suppress("NestedBlockDepth")
    private suspend fun createMarkdownDatasetMediaDistribution(
        datasetId: DatasetId,
        resourcesDatasetId: DatasetId,
        datasetSettings: CatalogueDatasetSettings,
        file: File
    ) {
        val registryApiPath = properties.registry?.path?.let {
            if (it.endsWith("/")) it else "$it/"
        } ?: "/"
        val registryWebPath = "/"
        val rawText = file.readText()

        val matchedPathToActualPath = mutableMapOf<String, String>()
        var modifiedText = rawText

        Regex("""\[(.*?)\]\((.*?)\)""").findAll(rawText).forEach { linkMatch ->
            val title = linkMatch.groupValues[1]
            val path = linkMatch.groupValues[2]

            val catalogueLinkRegExp = Regex("""#100m-([\w]+)/(\w+)""")
            val catalogueLinkMatch = catalogueLinkRegExp.find(path)
            if(catalogueLinkMatch != null) {
                val objectType = catalogueLinkMatch.groupValues[1]
                val objectId = catalogueLinkMatch.groupValues[2]
                val url = "${registryWebPath}catalogues/100m-${objectType}-$objectId/"
                matchedPathToActualPath[path] = url
                logger.info("Catalogue[$path] replace by: $url")
                modifiedText = modifiedText.replace(linkMatch.value, "[$title](${matchedPathToActualPath[path]})")
            }
        }


        Regex("""!\[([^]]*)]\((.*?)(?=[")])(".*")?\)""").findAll(rawText).forEach { imageMatch ->
            val alt = imageMatch.groupValues[1]
            val path = imageMatch.groupValues[2]
            val title = imageMatch.groupValues[3]

            if (path !in matchedPathToActualPath) {
                val resourcePath = datasetSettings.resourcesPathPrefix?.let { pathPrefix ->
                    path.takeIf { it.startsWith(pathPrefix.original) }
                        ?.replaceFirst(pathPrefix.original, pathPrefix.replacement)
                } ?: path
                val resourceFile = file.resolveSibling(resourcePath)
                if (!resourceFile.exists() || !resourceFile.isFile) {
                    logger.warn("Resource file not found at path [$resourcePath]. Ignoring")
                    return@forEach
                }

                val distributionId = importRepository.createDatasetMediaDistribution(
                    datasetId = resourcesDatasetId,
                    mediaType = Files.probeContentType(resourceFile.toPath()) ?: "application/octet-stream",
                    file = resourceFile.toSimpleFile()
                )
                val url = "${registryApiPath}data/datasetDownloadDistribution/$resourcesDatasetId/$distributionId"
                logger.info("Catalogue[$path] replace by: $url")
                matchedPathToActualPath[path] = url
            }

            modifiedText = modifiedText.replace(imageMatch.value, "![$alt](${matchedPathToActualPath[path]} $title)")
        }

        importRepository.createDatasetMediaDistribution(
            datasetId = datasetId,
            mediaType = "text/markdown",
            file = SimpleFile(file.name, modifiedText.toByteArray())
        )
    }

    private suspend fun connectCatalogues(importContext: ImportContext) {
        logger.info("Linking catalogues...")
        val size = importContext.catalogueParents.entries.size
        importContext.catalogueParents.entries.mapAsyncIndexed { index, (catalogueId, parentIdentifier) ->
            logger.info("($index/$size) Linking [${catalogueId} -> $parentIdentifier]")
            val parentId = importContext.catalogues[parentIdentifier]
                ?: run {
                    if (importContext.settings.useDefaultIfUnknownParent) {
                        val defaultParentId = getDefaultParentId(catalogueId, importContext)
                        logger.warn("Catalogue[$catalogueId] => ParentCatalogue $parentIdentifier not found. " +
                                "Using default [${defaultParentId}] or ignoring if not specified.")
                        defaultParentId ?: return@mapAsyncIndexed
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

    private fun File.toSimpleFile() = SimpleFile(name, readBytes())
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
