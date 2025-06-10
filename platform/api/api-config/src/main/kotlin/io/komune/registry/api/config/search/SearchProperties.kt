package io.komune.registry.api.config.search

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties("platform.search")
class SearchProperties(
    val indexedCatalogue: String
) {
    val indexedCatalogueTypes by lazy {
        indexedCatalogue.split(",").map { it.trim() }
    }
}
