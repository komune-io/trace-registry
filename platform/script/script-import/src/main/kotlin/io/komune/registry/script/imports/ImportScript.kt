package io.komune.registry.script.imports

import cccev.dsl.client.DataClient
import cccev.dsl.client.toUpdateCommand
import cccev.dsl.model.nullIfEmpty
import com.fasterxml.jackson.module.kotlin.readValue
import f2.dsl.fnc.invokeWith
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.f2.catalogue.client.catalogueCreate
import io.komune.registry.f2.catalogue.client.catalogueUpdate
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetQuery
import io.komune.registry.f2.catalogue.draft.domain.command.CatalogueDraftCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.catalogue.draft.domain.command.CatalogueDraftValidateCommand
import io.komune.registry.s2.commons.model.CatalogueDraftId
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.Language
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
        importRepository =  ImportRepository(dataClient)
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

        initConcepts(importContext)
        initLicenses(importContext)
        initCatalogues(importContext)

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
        importContext.validateDrafts()
    }

    private suspend fun importCatalogues(importContext: ImportContext) {
        logger.info("Importing catalogues...")
        val pathMatcher = importContext.rootDirectory
            .toPath()
            .fileSystem
            .getPathMatcher("glob:${importContext.rootDirectory.path}/${importContext.settings.jsonPathPattern}")

        val catalogueFiles = importContext.rootDirectory.walk()
            .filter { pathMatcher.matches(it.toPath()) }

        val nbCatalogues = catalogueFiles.count()

        catalogueFiles.forEachIndexed { i, catalogueFile ->
            logger.info("(${i + 1}/${nbCatalogues}) Importing catalogue from ${catalogueFile.absolutePath}...")
            importCatalogue(catalogueFile, importContext)
        }
        importContext.validateDrafts()

        connectCatalogues(importContext)
        logger.info("Imported catalogues.")
    }

    private suspend fun importCatalogue(jsonFile: File, importContext: ImportContext) {
        val fixedData = jsonFile.loadJsonCatalogue(importContext)
        val catalogue = importCatalogue(fixedData, importContext)
        logger.info("Imported catalogue[id:${catalogue.id}, identifier: ${catalogue.identifier}] ${catalogue.title}.")
        importContext.settings.datasets?.forEach {
            importDataset(catalogue, it, jsonFile.parentFile, importContext)
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
                    catalogues = catalogueData.children,
                    autoValidateDraft = true
                ) to imageFile
                val catalogueId = createCommand.invokeWith(dataClient.catalogue.catalogueCreate()).id

                CatalogueGetQuery(catalogueId, null)
                    .invokeWith(dataClient.catalogue.catalogueGet())
                    .item!!
            }


        importContext.catalogues[catalogueData.identifier] = catalogue.id
        catalogueData.parentIdentifier(importContext)?.let {
            importContext.catalogueParents[catalogue.id] = it
        }

        catalogueData.languages.filterKeys { it !in catalogue.availableLanguages }.forEach { (_, translation) ->
            val draftId = importContext.draftIdFor(catalogue.id, translation.language)
            (catalogue.toUpdateCommand(draftId).copy(
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
        directory: File,
        importContext: ImportContext
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

            val draftId = importContext.draftIdFor(catalogue.id, language)

            val datasetId = DatasetCreateCommandDTOBase(
                identifier = identifier,
                type = dataset.type,
                title = "",
                language = language,
                draftId = draftId
            ).invokeWith(dataClient.dataset.datasetCreate()).id

            when (dataset.mediaType) {
                "text/markdown" -> {
                    val resourceDatasetId = dataset.resourcesDataset
                        ?.let {
                            importRepository.getOrCreateDataset(
                                identifier = "${catalogue.identifier}-$language-$it",
                                language = language,
                                type = "resources",
                                draftId = draftId
                            )
                        } ?: datasetId

                    createMarkdownDatasetMediaDistribution(
                        datasetId = datasetId,
                        resourcesDatasetId = resourceDatasetId,
                        datasetSettings = dataset,
                        file = file,
                        draftId = draftId
                    )
                }
                else -> importRepository.createDatasetMediaDistribution(
                    datasetId = datasetId,
                    mediaType = dataset.mediaType,
                    file = file.toSimpleFile(),
                    draftId = draftId
                )
            }
        }

    }

    @Suppress("NestedBlockDepth")
    private suspend fun createMarkdownDatasetMediaDistribution(
        datasetId: DatasetId,
        resourcesDatasetId: DatasetId,
        datasetSettings: CatalogueDatasetSettings,
        file: File,
        draftId: CatalogueDraftId
    ) {
        val rawText = file.readText()

        val matchedPathToActualPath = mutableMapOf<String, String>()
        var modifiedText = rawText

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
                    file = resourceFile.toSimpleFile(),
                    draftId = draftId
                )
                val registryPath = properties.registry?.path?.let {
                    if (!it.endsWith("/")) "$it/" else it
                } ?: "/"
                matchedPathToActualPath[path] = "${registryPath}data/datasetDownloadDistribution/$resourcesDatasetId/$distributionId"
            }

            modifiedText = modifiedText.replace(imageMatch.value, "![$alt](${matchedPathToActualPath[path]} $title)")
        }

        importRepository.createDatasetMediaDistribution(
            datasetId = datasetId,
            mediaType = "text/markdown",
            file = SimpleFile(file.name, modifiedText.toByteArray()),
            draftId = draftId
        )
    }

    private suspend fun connectCatalogues(importContext: ImportContext) {
        logger.info("Linking catalogues...")
        importContext.catalogueParents.forEach { (catalogueId, parentIdentifier) ->
            logger.info("Linking [${catalogueId} -> $parentIdentifier]")
            val parentId = importContext.catalogues[parentIdentifier]
                ?: run {
                    if (importContext.settings.useDefaultIfUnknownParent) {
                        val defaultParentId = getDefaultParentId(catalogueId, importContext)
                        logger.warn("Catalogue[$catalogueId] => ParentCatalogue $parentIdentifier not found. " +
                                "Using default [${defaultParentId}] or ignoring if not specified.")
                        defaultParentId ?: return@forEach
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

    private fun CatalogueImportData.parentIdentifier(importContext: ImportContext): CatalogueIdentifier? {
        return parent?.let {
            return if(parentType == null || it.startsWith(parentType)) {
                it
            } else {
                val mapParentType = importContext.mapCatalogueType(parentType)
                "$mapParentType-$it"
            }
        }
    }

    private fun File.toSimpleFile() = SimpleFile(name, readBytes())

    private suspend fun ImportContext.draftIdFor(catalogueId: CatalogueId, language: Language): CatalogueDraftId {
        return drafts.getOrPut(catalogueId to language) {
            CatalogueDraftCreateCommandDTOBase(
                catalogueId = catalogueId,
                language = language
            ).invokeWith(dataClient.catalogueDraft.catalogueDraftCreate()).id
        }
    }

    private suspend fun ImportContext.validateDrafts() {
        logger.info("Validating drafts...")
        drafts.values.forEachIndexed { i, draftId ->
            logger.info("(${i + 1}/${drafts.size}) Validating draft [$draftId] ")
            CatalogueDraftValidateCommand(draftId)
                .invokeWith(dataClient.catalogueDraft.catalogueDraftValidate())
        }
        drafts.clear()
    }
}

class ImportContext(
    val rootDirectory: File,
    val settings: CatalogueImportSettings
) {
    val concepts = mutableMapOf<ConceptIdentifier, ConceptId>()
    val licenses = mutableMapOf<LicenseIdentifier, LicenseId>()
    val catalogues = mutableMapOf<CatalogueIdentifier, CatalogueId>()
    val catalogueParents = mutableMapOf<CatalogueId, CatalogueIdentifier>()

    val drafts = mutableMapOf<Pair<CatalogueId, Language>, CatalogueDraftId>()

    fun mapCatalogueType(type: String): String {
        return settings
            .mapping
            ?.catalogueTypes
            ?.get(type)
            ?: run {
//                logger.info("Warning: Catalogue type [$type] mapping not found. Using it as-is.")
                type
            }
    }
}
