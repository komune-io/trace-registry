package io.komune.registry.script.imports

import cccev.dsl.client.DataClient
import cccev.dsl.client.toUpdateCommand
import cccev.dsl.model.nullIfEmpty
import com.fasterxml.jackson.module.kotlin.readValue
import f2.client.domain.AuthRealmClientSecret
import f2.dsl.fnc.invokeWith
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.f2.catalogue.client.catalogueCreate
import io.komune.registry.f2.catalogue.client.catalogueUpdate
import io.komune.registry.f2.catalogue.domain.command.CatalogueCreateCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkCataloguesCommandDTOBase
import io.komune.registry.f2.catalogue.domain.command.CatalogueLinkDatasetsCommandDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQuery
import io.komune.registry.f2.catalogue.domain.query.CatalogueGetQuery
import io.komune.registry.f2.concept.domain.query.ConceptGetByIdentifierQuery
import io.komune.registry.f2.dataset.client.datasetAddMediaDistribution
import io.komune.registry.f2.dataset.domain.command.DatasetAddMediaDistributionCommandDTOBase
import io.komune.registry.f2.dataset.domain.command.DatasetCreateCommandDTOBase
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierQuery
import io.komune.registry.f2.license.domain.query.LicenseGetByIdentifierQuery
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueIdentifier
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.s2.concept.domain.ConceptId
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.s2.concept.domain.command.ConceptCreateCommand
import io.komune.registry.s2.dataset.domain.automate.DatasetIdentifier
import io.komune.registry.s2.dataset.domain.model.DistributionId
import io.komune.registry.s2.license.domain.LicenseId
import io.komune.registry.s2.license.domain.LicenseIdentifier
import io.komune.registry.s2.license.domain.command.LicenseCreateCommand
import io.komune.registry.s2.structure.domain.model.Structure
import io.komune.registry.script.imports.model.CatalogueDatasetSettings
import io.komune.registry.script.imports.model.CatalogueImportData
import io.komune.registry.script.imports.model.CatalogueImportSettings
import io.komune.registry.script.imports.model.ImportSettings
import io.komune.registry.script.init.RegistryScriptInitProperties
import kotlinx.coroutines.runBlocking
import java.io.File
import java.nio.file.Files

class ImportScript(
    private val properties: RegistryScriptInitProperties
) {

    private val dataClient: DataClient

    init {
        val authRealm = AuthRealmClientSecret(
            clientId = properties.admin.clientId,
            clientSecret = properties.admin.clientSecret,
            serverUrl = properties.auth.url,
            realmId = properties.auth.realmId
        )

        dataClient = runBlocking {
            if (properties.registry?.url == null) {
                throw IllegalArgumentException("Registry URL is not set")
            }
            DataClient(properties.registry!!.url, authRealm)
        }
    }

    suspend fun run(root: String) {
        println("Importing data from $root")

        val rootDirectory = File(root)
        if (!rootDirectory.exists() || !rootDirectory.isDirectory) {
            throw IllegalArgumentException("Root directory does not exist: $root")
        }

        val settingsFile = File(rootDirectory, "settings.json")
        if (!settingsFile.exists() || !settingsFile.isFile) {
            throw IllegalArgumentException("File settings.json not found in root directory")
        }

        val catalogueSettings = jsonMapper.readValue<ImportSettings>(settingsFile)
            .catalogue
            ?: return
        val context = Context(rootDirectory, catalogueSettings)

        if (!catalogueSettings.jsonPathPattern.endsWith(".json")) {
            throw IllegalArgumentException("Invalid JSON path pattern: ${catalogueSettings.jsonPathPattern}")
        }

        initEntities(context)
        importCatalogues(context)
    }

    private suspend fun initEntities(context: Context) {
        println("Initializing basic entities...")

        initConcepts(context)
        initLicenses(context)
        initCatalogues(context)

        println("Initialized basic entities.")
    }

    private suspend fun initConcepts(context: Context) {
        val concepts = context.settings.init?.concepts.nullIfEmpty() ?: return

        concepts.forEach { concept ->
            val conceptId = ConceptGetByIdentifierQuery(concept.identifier)
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
            context.concepts[concept.identifier] = conceptId
        }
    }

    private suspend fun initLicenses(context: Context) {
        val licenses = context.settings.init?.licenses.nullIfEmpty() ?: return

        licenses.forEach { license ->
            val licenseId = LicenseGetByIdentifierQuery(license.identifier)
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
            context.licenses[license.identifier] = licenseId
        }
    }

    private suspend fun initCatalogues(context: Context) {
        val catalogues = context.settings.init?.catalogues.nullIfEmpty() ?: return

        catalogues.forEach { catalogueData ->
            importCatalogue(catalogueData, context)
        }
    }

    private suspend fun importCatalogues(context: Context) {
        println("Importing catalogues...")
        val pathMatcher = context.rootDirectory
            .toPath()
            .fileSystem
            .getPathMatcher("glob:${context.rootDirectory.path}/${context.settings.jsonPathPattern}")

        val catalogueFiles = context.rootDirectory.walk()
            .filter { pathMatcher.matches(it.toPath()) }

        val nbCatalogues = catalogueFiles.count()

        catalogueFiles.forEachIndexed { i, catalogueFile ->
            println("($i/${nbCatalogues}) Importing catalogue from ${catalogueFile.absolutePath}...")
            importCatalogue(catalogueFile, context)
        }

        connectCatalogues(context)
        println("Imported catalogues.")
    }

    private suspend fun importCatalogue(jsonFile: File, context: Context) {
        val data = jsonMapper.readValue<CatalogueImportData>(jsonFile)

        val catalogue = importCatalogue(data, context)

        context.settings.datasets?.forEach {
            importDataset(catalogue, it, jsonFile.parentFile)
        }
    }

    private suspend fun importCatalogue(
        catalogueData: CatalogueImportData,
        context: Context
    ): CatalogueDTOBase {
        val catalogue = CatalogueGetByIdentifierQuery(catalogueData.buildIdentifier(), null)
            .invokeWith(dataClient.catalogue.catalogueGetByIdentifier())
            .item
            ?: run {
                val translation = catalogueData.languages.values.firstOrNull()
                    ?: throw IllegalArgumentException("No translation specified for catalogue ${catalogueData.identifier}")

                val imageContent = catalogueData.img?.let { getImage(it, context) }
                val imageFile = imageContent?.let { SimpleFile("image", it) }

                val catalogueId = (CatalogueCreateCommandDTOBase(
                    identifier = catalogueData.buildIdentifier(),
                    title = translation.title.orEmpty(),
                    description = translation.description,
                    type = mapCatalogueType(catalogueData.type, context),
                    language = translation.language,
                    structure = (catalogueData.structure ?: context.settings.defaults?.structure)?.let(::Structure),
                    themes = catalogueData.themes?.mapNotNull { mapConcept(it, context) },
                    accessRights = context.settings.defaults?.accessRights,
                    license = context.settings.defaults?.license?.let { context.licenses[it] },
                ) to imageFile).invokeWith(dataClient.catalogue.catalogueCreate()).id

                CatalogueGetQuery(catalogueId, null)
                    .invokeWith(dataClient.catalogue.catalogueGet())
                    .item!!
            }


        context.catalogues[catalogueData.buildIdentifier()] = catalogue.id
        catalogueData.parentIdentifier()?.let { context.catalogueParents[catalogue.id] = it }

        catalogueData.languages.filterKeys { it !in catalogue.availableLanguages }.forEach { (_, translation) ->
            (catalogue.toUpdateCommand().copy(
                title = translation.title.orEmpty(),
                description = translation.description,
                language = translation.language,
            ) to null).invokeWith(dataClient.catalogue.catalogueUpdate())
        }

        return catalogue
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
                identifier = "${catalogue.identifier}-$language-${dataset.type}",
                type = dataset.type,
                title = "",
                language = language
            ).invokeWith(dataClient.dataset.datasetCreate()).id

            CatalogueLinkDatasetsCommandDTOBase(
                id = catalogue.id,
                datasetIds = listOf(datasetId)
            ).invokeWith(dataClient.catalogue.catalogueLinkDatasets())

            when (dataset.mediaType) {
                "text/markdown" -> {
                    val resourceDatasetId = dataset.resourcesDataset
                        ?.let {
                            getOrCreateDataset(
                                identifier = "${catalogue.identifier}-$language-$it",
                                language = language,
                                type = "resources",
                                catalogueId = catalogue.id
                            )
                        } ?: datasetId

                    createMarkdownDatasetMediaDistribution(
                        datasetId = datasetId,
                        resourcesDatasetId = resourceDatasetId,
                        datasetSettings = dataset,
                        file = file
                    )
                }
                else -> createDatasetMediaDistribution(
                    datasetId = datasetId,
                    mediaType = dataset.mediaType,
                    file = file.toSimpleFile()
                )
            }
        }

    }

    private suspend fun getOrCreateDataset(
        identifier: DatasetIdentifier,
        language: Language,
        type: String,
        catalogueId: CatalogueId
    ): DatasetId {
        val datasetId = DatasetGetByIdentifierQuery(identifier, language)
            .invokeWith(dataClient.dataset.datasetGetByIdentifier())
            .item
            ?.id
            ?: DatasetCreateCommandDTOBase(
                identifier = identifier,
                type = type,
                title = "",
                language = language
            ).invokeWith(dataClient.dataset.datasetCreate()).id

        CatalogueLinkDatasetsCommandDTOBase(
            id = catalogueId,
            datasetIds = listOf(datasetId)
        ).invokeWith(dataClient.catalogue.catalogueLinkDatasets())

        return datasetId
    }

    private suspend fun createDatasetMediaDistribution(
        datasetId: DatasetId,
        mediaType: String,
        file: SimpleFile
    ): DistributionId {
        return (DatasetAddMediaDistributionCommandDTOBase(
            id = datasetId,
            mediaType = mediaType
        ) to SimpleFile(
            name = file.name,
            content = file.content
        )).invokeWith(dataClient.dataset.datasetAddMediaDistribution()).distributionId
    }

    private suspend fun createMarkdownDatasetMediaDistribution(
        datasetId: DatasetId,
        resourcesDatasetId: DatasetId,
        datasetSettings: CatalogueDatasetSettings,
        file: File
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
                    println("Warning: Resource file not found at path [$resourcePath]. Ignoring")
                    return@forEach
                }

                val distributionId = createDatasetMediaDistribution(
                    datasetId = resourcesDatasetId,
                    mediaType = Files.probeContentType(resourceFile.toPath()) ?: "application/octet-stream",
                    file = resourceFile.toSimpleFile()
                )
                matchedPathToActualPath[path] = "/data/datasetAddMediaDistribution/$resourcesDatasetId/$distributionId"
            }

            modifiedText = modifiedText.replace(imageMatch.value, "![$alt](${matchedPathToActualPath[path]} $title)")
        }

        createDatasetMediaDistribution(
            datasetId = datasetId,
            mediaType = "text/markdown",
            file = SimpleFile(file.name, modifiedText.toByteArray())
        )
    }

    private suspend fun connectCatalogues(context: Context) {
        println("Connecting catalogues...")
        context.catalogueParents.forEach { (catalogueId, parentIdentifier) ->
            val parentId = context.catalogues[parentIdentifier]
                ?: run {
                    if (context.settings.useDefaultIfUnknownParent) {
                        println("Warning: Parent catalogue $parentIdentifier not found. Using default instead or ignoring if not specified.")
                        getDefaultParentId(catalogueId, context) ?: return@forEach
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

    private suspend fun getDefaultParentId(catalogueId: CatalogueId, context: Context): CatalogueId? {
        val catalogue = CatalogueGetQuery(catalogueId, null)
            .invokeWith(dataClient.catalogue.catalogueGet())
            .item!!

        val defaultParent = context.settings.defaults?.parent?.get(catalogue.type)
            ?: return null

        return CatalogueGetByIdentifierQuery("${defaultParent.type}-${defaultParent.identifier}", null)
            .invokeWith(dataClient.catalogue.catalogueGetByIdentifier())
            .item
            ?.id
    }

    private fun getImage(image: String, context: Context): ByteArray? {
        return File(context.rootDirectory, image).takeIf { it.exists() && it.isFile }?.readBytes()
    }

    private fun mapCatalogueType(type: String, context: Context): String {
        return context.settings
            .mapping
            ?.catalogueTypes
            ?.get(type)
            ?: run {
                println("Warning: Catalogue type [$type] mapping not found. Using it as-is.")
                type
            }
    }

    private fun mapConcept(concept: String, context: Context): ConceptId? {
        return context.settings
            .mapping
            ?.concepts
            ?.get(concept)
            .let { context.concepts[it ?: concept] }
            ?: run {
                println("Warning: Concept [$concept] not found. Ignoring.")
                null
            }
    }

    private fun CatalogueImportData.buildIdentifier(): CatalogueIdentifier = "$type-$identifier"
    private fun CatalogueImportData.parentIdentifier(): CatalogueIdentifier? = parent?.let { "${parentType.orEmpty()}-$it" }

    private fun File.toSimpleFile() = SimpleFile(name, readBytes())

    private class Context(
        val rootDirectory: File,
        val settings: CatalogueImportSettings
    ) {
        val concepts = mutableMapOf<ConceptIdentifier, ConceptId>()
        val licenses = mutableMapOf<LicenseIdentifier, LicenseId>()
        val catalogues = mutableMapOf<CatalogueIdentifier, CatalogueId>()
        val catalogueParents = mutableMapOf<CatalogueId, CatalogueIdentifier>()
    }
}
