package io.komune.registry.f2.catalogue.api.config

import io.komune.registry.api.commons.utils.jsonMapper
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.support.PathMatchingResourcePatternResolver
import s2.spring.utils.logger.Logger

@Configuration
class CatalogueConfig {

    companion object {
        const val TEMPLATE_DIR = "classpath:catalogues"
    }

    private val logger by Logger()

    final val typeConfigurations: Map<String, CatalogueTypeConfiguration> = PathMatchingResourcePatternResolver()
        .getResources("$TEMPLATE_DIR/*.json")
        .associate { file ->
            val typeConfiguration = try {
                jsonMapper.readValue(file.inputStream, CatalogueTypeConfiguration::class.java)
            } catch (e: Exception) {
                logger.error("Error while parsing file ${file.url}", e)
                throw e
            }

            typeConfiguration.type to typeConfiguration
        }
}
