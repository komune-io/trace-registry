package io.komune.registry.f2.catalogue.api.config

import io.komune.registry.api.commons.utils.jsonMapper
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.support.PathMatchingResourcePatternResolver
import s2.spring.utils.logger.Logger

@Configuration
class CatalogueConfig {
    private val logger by Logger()

    @Value("\${platform.catalogue.type-files}")
    private lateinit var typeConfigDir: String

    final val typeConfigurations: Map<String, CatalogueTypeConfiguration> by lazy {
        logger.info("Loading catalogue type configurations from $typeConfigDir")
        PathMatchingResourcePatternResolver()
            .getResources("$typeConfigDir/*.json")
            .associate { file ->
                logger.info("Loading catalogue type configuration ${file.url}")
                val typeConfiguration = try {
                    jsonMapper.readValue(file.inputStream, CatalogueTypeConfiguration::class.java)
                } catch (e: Exception) {
                    logger.error("Error while parsing file ${file.url}", e)
                    throw e
                }

                typeConfiguration.type to typeConfiguration
            }.also { println(it) }
    }
}
