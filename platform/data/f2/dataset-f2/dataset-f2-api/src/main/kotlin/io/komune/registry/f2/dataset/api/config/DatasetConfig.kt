package io.komune.registry.f2.dataset.api.config

import io.komune.registry.api.commons.utils.jsonMapper
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration
import org.springframework.core.io.support.PathMatchingResourcePatternResolver
import s2.spring.utils.logger.Logger

@Configuration
class DatasetConfig {
    private val logger by Logger()

    @Value("\${platform.dataset.type-files}")
    private lateinit var typeConfigDir: String

    final val typeConfigurations: Map<String, DatasetTypeConfiguration> by lazy {
        PathMatchingResourcePatternResolver()
            .getResources("$typeConfigDir/*.json")
            .associate { file ->
                val typeConfiguration = try {
                    jsonMapper.readValue(file.inputStream, DatasetTypeConfiguration::class.java)
                } catch (e: Exception) {
                    logger.error("Error while parsing file ${file.url}", e)
                    throw e
                }

                typeConfiguration.type to typeConfiguration
            }
    }
}
