package io.komune.registry.script.imports.preparse

import com.fasterxml.jackson.module.kotlin.readValue
import com.jayway.jsonpath.DocumentContext
import com.jayway.jsonpath.JsonPath
import com.jayway.jsonpath.PathNotFoundException
import io.komune.registry.api.commons.utils.CsvColumns
import io.komune.registry.api.commons.utils.csvWriter
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.api.commons.utils.mapAsyncIndexed
import io.komune.registry.api.commons.utils.parseJsonTo
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.concept.domain.ConceptIdentifier
import io.komune.registry.script.imports.checkIsDirectory
import io.komune.registry.script.imports.checkIsFile
import io.komune.registry.script.imports.model.CatalogueDatasetMediaSettings
import io.komune.registry.script.imports.model.CatalogueDatasetSettings
import io.komune.registry.script.imports.model.CatalogueImportData
import io.komune.registry.script.imports.model.CatalogueInitSettings
import io.komune.registry.script.imports.model.CatalogueParent
import io.komune.registry.script.imports.model.CataloguePreparseConceptMapping
import io.komune.registry.script.imports.model.CataloguePreparseDatasetIndicatorsFileMapping
import io.komune.registry.script.imports.model.CataloguePreparseDatasetMapping
import io.komune.registry.script.imports.model.CataloguePreparseDatasetMediaMapping
import io.komune.registry.script.imports.model.CataloguePreparseFieldMapping
import io.komune.registry.script.imports.model.CataloguePreparseFieldUnmappedBehaviour
import io.komune.registry.script.imports.model.CataloguePreparseFileFieldMapping
import io.komune.registry.script.imports.model.CataloguePreparseSettings
import io.komune.registry.script.imports.model.CatalogueTranslationData
import io.komune.registry.script.imports.model.DatasetMediaSource
import io.komune.registry.script.imports.model.FieldType
import io.komune.registry.script.imports.model.ImportSettings
import io.komune.registry.script.init.RegistryScriptInitProperties
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import s2.spring.utils.logger.Logger
import java.io.File

class PreparseScript(
    private val properties: RegistryScriptInitProperties
) {
    private val logger by Logger()

    companion object {
        val indicatorsCsvWriter = csvWriter(IndicatorsCsvColumn)
    }

    suspend fun run() {
        val paths = properties.preparse?.paths
            ?: return

        paths.forEach { path ->
            val rootDirectory = File(path.source).checkIsDirectory()
            val destinationDirectory = File(path.destination).also { it.deleteRecursively() }
            val settingsFile = File(rootDirectory, "settings.json").checkIsFile()

            PreparseCache(File(path.cache)).use { cache ->
                withPreparseContext(
                    rootDirectory = rootDirectory,
                    destinationDirectory = destinationDirectory,
                    cache = cache
                ) {
                    val settings = jsonMapper.readValue<ImportSettings>(settingsFile)

                    settings.catalogue
                        ?.preparse
                        ?.nullIfEmpty()
                        ?.forEach { preparse(it) }
                        ?: throw IllegalArgumentException("No preparse settings found in ${settingsFile.path}")

                    val updatedSettings = settings.copy(
                        catalogue = settings.catalogue.copy(
                            preparse = null,
                            init = CatalogueInitSettings(
                                concepts = settings.catalogue.init?.concepts.orEmpty() + cache.savedConcepts(),
                                licenses = settings.catalogue.init?.licenses.orEmpty(),
                                dataUnits = settings.catalogue.init?.dataUnits.orEmpty(),
                                informationConcepts = settings.catalogue.init?.informationConcepts.orEmpty(),
                                catalogues = settings.catalogue.init?.catalogues.orEmpty()
                            )
                        )
                    )
                    val updatedSettingsFile = File(destinationDirectory, "settings.json")
                    updatedSettingsFile.writeText(jsonMapper.writeValueAsString(updatedSettings))
                }
            }
        }
    }

    private suspend fun preparse(settings: CataloguePreparseSettings) = withContext(Dispatchers.IO) {
        settings.files.forEach { filePath ->
            val file = fileInContextRoot(filePath).checkIsFile()
            val fileContent = JsonPath.parse(file.readText())
            val nbElements = fileContent.read<Int>("$.length()")

            (0 until nbElements).mapAsyncIndexed { i, _ ->
                withCatalogueIndex(i) { context ->
                    CatalogueImportData(
                        identifier = fileContent.parseField(settings.mapping.identifier) ?: "$i",
                        type = fileContent.parseField(settings.mapping.type)
                            ?: throw IllegalArgumentException("No catalogue type found for [${file.path}] [$i]"),
                        img = fileContent.parseFileField(settings.mapping.image)
                            ?.let { downloadFile(it, settings.mapping.image!!.output.injectContextVariables()) }
                            ?.path,
                        order = fileContent.parseField(settings.mapping.order)?.parseJsonTo(),
                        accessRights = null,
                        themes = settings.mapping.themes?.flatMap { themeMapping ->
                            fileContent.parseConcepts(themeMapping, settings.languages)
                        }?.nullIfEmpty(),
                        parents = fileContent.parseField(settings.mapping.parent)?.parseJsonTo<CatalogueParent>()?.let(::listOf),
                        languages = settings.languages.associateWith { language ->
                            withLanguage(language) {
                                CatalogueTranslationData(
                                    title = fileContent.parseField(settings.mapping.title),
                                    description = fileContent.parseField(settings.mapping.description),
                                    language = language
                                )
                            }
                        },
                        homepage = fileContent.parseField(settings.mapping.homepage),
                        children = null,
                        related = settings.mapping.related?.mapValues { (_, fieldMapping) ->
                            fileContent.parseField(fieldMapping)
                                ?.parseJsonTo<List<String>>()
                                ?.ifEmpty { null }
                        }?.filterValues { it != null } as Map<String, List<CatalogueId>>?,
                        datasets = settings.mapping.datasets?.map { fileContent.parseDataset(it, settings.languages) }
                    ).toJson().let { json ->
                        val outputFile = fileInContextDestination(settings.output)
                        outputFile.parentFile?.mkdirs()
                        outputFile.writeText(json)
                    }
                }
            }
        }
    }

    private suspend fun DocumentContext.parseConcepts(
        conceptMapping: CataloguePreparseConceptMapping,
        languages: Set<Language>
    ): List<ConceptIdentifier> {
        return if (conceptMapping.array) {
            val nbConcepts = readField<Int>("${conceptMapping.field}.size()") ?: 0
            (0 until nbConcepts).mapNotNull { iConcept ->
                parseConcept(
                    root = "${conceptMapping.field}[$iConcept]",
                    idPath = conceptMapping.id,
                    namePath = conceptMapping.name,
                    scheme = conceptMapping.scheme,
                    languages = languages
                )
            }
        } else {
            parseConcept(
                root = conceptMapping.field,
                idPath = conceptMapping.id,
                namePath = conceptMapping.name,
                scheme = conceptMapping.scheme,
                languages = languages
            ).let(::listOfNotNull)
        }
    }

    private suspend fun DocumentContext.parseConcept(
        root: String,
        idPath: String,
        namePath: String,
        scheme: String,
        languages: Set<Language>
    ): ConceptIdentifier? {
        val context = getPreparseContext()
        val id = readField<String>(root.concatJsonPath(idPath))
            ?: return null.also {
                logger.warn("No id found for concept in field [$root] (${context.iCatalogue})")
            }

        return languages.mapNotNull { language ->
            withLanguage(language) {
                val name = readField<String>(root.concatJsonPath(namePath))
                    ?: return@withLanguage null.also {
                        logger.warn("No name found for concept [$id] in field [$root] (${context.iCatalogue})")
                    }

                context.cache.saveConcept(
                    id = id,
                    scheme = scheme,
                    language = language,
                    name = name
                )
            }
        }.lastOrNull()?.identifier
    }

    private suspend fun DocumentContext.parseDataset(
        dataset: CataloguePreparseDatasetMapping,
        languages: Set<Language>
    ): CatalogueDatasetSettings {
        val context = getPreparseContext()
        return CatalogueDatasetSettings(
            type = dataset.type,
            resourcesDataset = dataset.resourcesDataset,
            media = dataset.media.mapNotNull { media ->
                val resourcesDirPath = dataset.resourcesDir
                    ?: context.destinationDirectory.path
                parseMedia(media, languages, resourcesDirPath)
            },
            title = null,
            resourcesPathPrefix = null,
            datasets = null,
            indicators = languages.takeIf {
                !dataset.indicators?.files.isNullOrEmpty()
            }?.associateWith { language ->
                withLanguage(language) {
                    val outputDir = fileInContextDestination(dataset.indicators!!.outputDir)
                    outputDir.mkdirs()
                    dataset.indicators.files.forEach { indicatorFileMapping ->
                        parseIndicators(indicatorFileMapping, outputDir)
                    }
                    outputDir.path
                }
            }
        )
    }

    private suspend fun DocumentContext.parseMedia(
        media: CataloguePreparseDatasetMediaMapping,
        languages: Set<Language>,
        resourcesDirPath: String
    ): CatalogueDatasetMediaSettings? {
        val context = getPreparseContext()
        return when (media.source) {
            DatasetMediaSource.FILE -> {
                CatalogueDatasetMediaSettings(
                    mediaType = media.mediaType,
                    translations = languages.associateWith { language ->
                        withLanguage(language) {
                            val filePath = parseField(media.fileInput)
                                ?: return@withLanguage null.also {
                                    logger.warn("No file path found for media [${media.fileInput}] (${context.iCatalogue})")
                                }

                            val outputPath = media.output.injectContextVariables()
                            downloadFile(filePath, outputPath)?.path
                        }
                    }.filterValues { it != null } as Map<Language, String>,
                ).takeIf { it.translations.isNotEmpty() }
            }

            DatasetMediaSource.FIELDS -> {
                when (media.mediaType) {
                    "text/markdown" -> {
                        CatalogueDatasetMediaSettings(
                            mediaType = media.mediaType,
                            translations = languages.associateWith { language ->
                                withLanguage(language) {
                                    val resourcesDir = fileInContextDestination(resourcesDirPath)
                                    buildMarkdownMediaFromFields(media, resourcesDir)
                                }
                            }
                        )
                    }

                    else -> {
                        logger.warn("Unsupported media type [${media.mediaType}] for source [${media.source}] (${context.iCatalogue})")
                        null
                    }
                }
            }
        }
    }

    private suspend fun DocumentContext.buildMarkdownMediaFromFields(
        media: CataloguePreparseDatasetMediaMapping,
        resourcesDir: File,
    ): String {
        val context = getPreparseContext()
        requireNotNull(media.fields) {
            "Fields are required for media with source [${media.source}] (${context.iCatalogue})"
        }
        val content = buildString {
            media.fields.forEach { field ->
                val fieldValue = readField<String>(field.field.injectContextVariables())
                    ?.ifBlank { null }
                    ?: return@forEach

                when (field.type) {
                    FieldType.TEXT -> {
                        appendLine()
                        appendLine(fieldValue)
                    }
                    FieldType.IMAGE -> {
                        val file = downloadFile(fieldValue, fileInContext(field.field, resourcesDir).path)
                            ?: return@forEach
                        appendLine()
                        appendLine("![](${file.path})")
                    }
                }
            }
        }.trim()
        val outputFile = fileInContextDestination(media.output)
        outputFile.parentFile?.mkdirs()
        outputFile.writeText(content)
        return outputFile.path
    }

    private suspend fun DocumentContext.parseIndicators(
        indicators: CataloguePreparseDatasetIndicatorsFileMapping,
        outputDir: File
    ) {
        val context = getPreparseContext()

        val output = indicators.name[context.language]
            ?: return Unit.also {
                logger.warn("No output found for indicators in language [${context.language}] (${context.iCatalogue})")
            }
        val outputFile = File(outputDir, output)
        val parsedIndicators = indicators.mapping.map { (identifier, fieldMapping) ->
            mapOf(
                IndicatorsCsvColumn.IDENTIFIER to identifier,
                IndicatorsCsvColumn.VALUE to parseField(fieldMapping.value),
                IndicatorsCsvColumn.UNIT to parseField(fieldMapping.unit),
                IndicatorsCsvColumn.DESCRIPTION to parseField(fieldMapping.description)
            ).mapKeys { (column) -> column.displayName }
        }
        indicatorsCsvWriter.writeValue(outputFile, parsedIndicators)
    }

    private suspend fun DocumentContext.parseField(fieldMapping: CataloguePreparseFieldMapping?): String? {
        if (fieldMapping == null) {
            return null
        }

        val value = fieldMapping.field
            ?.let { readField<Any>(it) }
            ?.let { if (it is String) it else it.toJson() }
            ?: fieldMapping.default?.injectContextVariables()

        val mappedValue =  fieldMapping.valuesMap?.get(value)
            ?.let { if (it is String) it else it.toJson() }

        return mappedValue ?: when (fieldMapping.unmappedValues) {
            CataloguePreparseFieldUnmappedBehaviour.IGNORE -> null
            CataloguePreparseFieldUnmappedBehaviour.AS_IS -> value
            CataloguePreparseFieldUnmappedBehaviour.DEFAULT -> fieldMapping.default
            CataloguePreparseFieldUnmappedBehaviour.ERROR -> throw IllegalArgumentException(
                "No value found for field [${fieldMapping.field}] (${getPreparseContext().iCatalogue})"
            )
        }
    }

    private suspend fun DocumentContext.parseFileField(fieldMapping: CataloguePreparseFileFieldMapping?): String? {
        return fieldMapping?.field
            ?.let { readField<String>(it) }
            ?: fieldMapping?.default?.injectContextVariables()
    }

    private suspend fun <T> DocumentContext.readField(field: String): T? {
        return try {
            read("$[{i}].$field".injectContextVariables())
        } catch (e: PathNotFoundException) {
            null
        }
    }

    private suspend fun String.injectContextVariables(): String {
        val context = getPreparseContext()
        return injectVariables(
            "i" to context.iCatalogue.toString(),
            "language" to context.language.toString()
        )
    }

    private fun String.injectVariables(vararg variables: Pair<String, String>): String {
        return variables.fold(this) { acc, (key, value) ->
            acc.replace("{$key}", value)
        }
    }

    private suspend fun downloadFile(url: String, outputPath: String): File? {
        val context = getPreparseContext()
        val (inputFile, outputFile) = if (url.startsWith("http")) {
            val cachedFile = context.cache.downloadFile(url)
                ?: return null

            val fileExtension = cachedFile.extension.ifEmpty { null }
                ?.let { ".$it" }
            val filename = fileExtension
                ?.let { "${outputPath.substringBeforeLast(".")}$fileExtension" }
                ?: outputPath

            cachedFile to fileInContextDestination(filename)
        } else {
            val fileExtension = url.substringAfter(".", "")
                .ifEmpty { null }
                ?.let { ".$it" }
            val filename = fileExtension
                ?.let { "${outputPath.substringBeforeLast(".")}$fileExtension" }
                ?: outputPath

            val inputFile = fileInContextRoot(url)
            if (!inputFile.exists()) {
                logger.warn("File [$url] not found")
                return null
            }

            inputFile to fileInContextDestination(filename)
        }

        inputFile.copyTo(outputFile, overwrite = true)
        return outputFile
    }

    private suspend fun fileInContextRoot(path: String): File {
        val context = getPreparseContext()
        return fileInContext(path, context.rootDirectory)
    }

    private suspend fun fileInContextDestination(path: String): File {
        val context = getPreparseContext()
        return fileInContext(path, context.destinationDirectory)
    }

    private suspend fun fileInContext(path: String, parentDir: File): File {
        return if (path.startsWith("/")) {
            File(path.injectContextVariables())
        } else {
            File(parentDir, path.injectContextVariables())
        }
    }

    private fun String.concatJsonPath(other: String): String {
        if (other.isBlank()) {
            return this
        }
        val normalizedThis = this.trim()
        val normalizedOther = other.trim()

        return if (other.first() !in listOf('.', '$', '[')) {
            "$normalizedThis.$normalizedOther"
        } else {
            "$normalizedThis$normalizedOther"
        }
    }

    enum class IndicatorsCsvColumn(val displayName: String) {
        IDENTIFIER("identifier"),
        VALUE("value"),
        UNIT("unit"),
        DESCRIPTION("description");

        companion object: CsvColumns() {
            override val columnNames: Iterable<String>
                get() = entries.map { it.displayName }
        }
    }
}
