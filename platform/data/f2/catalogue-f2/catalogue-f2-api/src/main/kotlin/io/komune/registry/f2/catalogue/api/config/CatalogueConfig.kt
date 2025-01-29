package io.komune.registry.f2.catalogue.api.config

import io.komune.registry.api.commons.model.SimpleCache
import io.komune.registry.api.commons.utils.parseFileOrNull
import org.springframework.context.annotation.Configuration

@Configuration
class CatalogueConfig {

    companion object {
        const val TEMPLATE_DIR = "classpath:template"
    }

    val typeConfigurations = SimpleCache<String, CatalogueTypeConfiguration?> { type ->
        parseFileOrNull<CatalogueTypeConfiguration>("$TEMPLATE_DIR/$type.json")
    }
}
