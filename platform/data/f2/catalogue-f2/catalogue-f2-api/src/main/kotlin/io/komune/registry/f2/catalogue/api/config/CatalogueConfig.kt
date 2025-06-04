package io.komune.registry.f2.catalogue.api.config

import io.komune.registry.s2.catalogue.domain.model.structure.StructureType
import kotlinx.serialization.json.Json
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.support.PathMatchingResourcePatternResolver
import s2.spring.utils.logger.Logger

@Configuration
class CatalogueConfig(
    private val jsonConfig: Json,
) {
    private val logger by Logger()

    @Value("\${platform.catalogue.type-files}")
    private lateinit var typeConfigDir: String

    @Value("\${platform.catalogue.templates}")
    private var templatesDir: String? = null

    @Value("\${platform.catalogue.resources}")
    private var resourcesDir: String? = null

    final val typeConfigurations: Map<String, CatalogueTypeConfiguration> by lazy {
        logger.info("Loading catalogue type configurations from $typeConfigDir")
        PathMatchingResourcePatternResolver()
            .getResources("$typeConfigDir/*.json")
            .associate { file ->
                logger.info("Loading catalogue type configuration ${file.url}")
                val typeConfiguration = try {
                    jsonConfig.decodeFromString<CatalogueTypeConfiguration>(file.file.readText())
                } catch (e: Exception) {
                    logger.error("Error while parsing file ${file.url}", e)
                    throw e
                }

                typeConfiguration.type to typeConfiguration
            }
    }

    final val transientTypes: Set<String> by lazy {
        typeConfigurations.filter { (_, config) ->
            config.structure?.type == StructureType.TRANSIENT
        }.keys
    }

    final val templates: Map<String, ByteArray> by lazy {
        logger.info("Loading catalogue templates from $templatesDir")
        loadFiles(templatesDir)
    }

    final val resources: Map<String, ByteArray> by lazy {
        logger.info("Loading catalogue resources from $resourcesDir")
        loadFiles(resourcesDir)
    }

    private fun loadFiles(path: String?): Map<String, ByteArray> {
        path ?: return emptyMap()

        return PathMatchingResourcePatternResolver()
            .getResources("$path/**/*")
            .associate { resource ->
                logger.info("Loading file ${resource.url}")
                val file = try {
                    resource.file.readBytes()
                } catch (e: Exception) {
                    logger.error("Error while parsing file ${resource.url}", e)
                    throw e
                }

                resource.file.path.substringAfter(path.substringAfter(":")).removePrefix("/") to file
            }
    }
}
