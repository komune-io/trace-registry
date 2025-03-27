package io.komune.registry.script.imports

import io.komune.registry.f2.dataset.domain.dto.DatasetDTOBase
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.SimpleFile
import io.komune.registry.script.imports.model.CatalogueDatasetSettings
import io.komune.registry.script.init.RegistryScriptInitProperties
import java.io.File
import java.nio.file.Files
import org.slf4j.LoggerFactory

class MarkdownMediaImport(
    private val properties: RegistryScriptInitProperties,
    private val importRepository: ImportRepository
) {

    private val logger = LoggerFactory.getLogger(javaClass)

    private val graphDataset: HashMap<Language, List<DatasetDTOBase>> = hashMapOf()

    @Suppress("NestedBlockDepth", "LongMethod", "CyclomaticComplexMethod")
    suspend fun createMarkdownDatasetMediaDistribution(
        dataset: DatasetDTOBase,
        resourcesDataset: DatasetDTOBase,
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

        if (!graphDataset.containsKey(dataset.language)) {
            graphDataset[dataset.language] = importRepository.findRawGraphDataSet(language = dataset.language)
        }
        val graphs = graphDataset[dataset.language] ?: emptyList()

        Regex("""!\[([^]]*)]\((.*?)(?=[")])(".*")?\)""").findAll(rawText).forEach { imageMatch ->
            val alt = imageMatch.groupValues[1]
            val path = imageMatch.groupValues[2]
            val title = imageMatch.groupValues[3]
            if(alt == "chart") {
                val rawGraphPath = getRawGraphPath(graphs)
                // ../../../../app//#14" => 14
                val regex = Regex("#(\\d+)")
                val match = regex.find(path)?.groupValues?.get(1)?.toInt()
                rawGraphPath[match]?.let {
                    val url = "${registryApiPath}${it}"
                    logger.info("Path[$path] replace by: $url")
                    matchedPathToActualPath[path] = url
                }
            } else if (path !in matchedPathToActualPath) {
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
                    dataset = resourcesDataset,
                    mediaType = Files.probeContentType(resourceFile.toPath()) ?: "application/octet-stream",
                    file = resourceFile.toSimpleFile()
                )
                val url = "${registryApiPath}data/datasetDownloadDistribution/${resourcesDataset.id}/$distributionId"
                logger.info("Path[$path] replace by: $url")
                matchedPathToActualPath[path] = url
            }

            modifiedText = modifiedText.replace(imageMatch.value, "![$alt](${matchedPathToActualPath[path]} $title)")
        }

        importRepository.createDatasetMediaDistribution(
            dataset = dataset,
            mediaType = "text/markdown",
            file = SimpleFile(file.name, modifiedText.toByteArray())
        )
    }

    private fun getRawGraphPath(graphs: List<DatasetDTOBase>): Map<Int, String> {
        return graphs.mapNotNull { graph ->
            val input = graph.identifier // Assuming this holds something like "100m-chart-339-fr-rawGraph"
            val regex = Regex("(?<=chart-)\\d+(?=-[a-z]{2}-rawGraph)")
            val match = regex.find(input)?.value?.toIntOrNull() ?: return@mapNotNull null

            val id = graph.distributions
                ?.find { it.downloadPath?.name?.endsWith(".svg") ?: false }
                ?.id

            if (id != null) match to  "data/datasetDownloadDistribution/${graph.id}/${id}" else null
        }.toMap()
//            .also {
//            if (it.isEmpty()) throw IllegalStateException("No raw graph found for dataset ${language}")
//        }
    }


}
