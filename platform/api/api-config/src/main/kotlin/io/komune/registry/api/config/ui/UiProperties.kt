package io.komune.registry.api.config.ui

import org.springframework.boot.context.properties.ConfigurationProperties

@ConfigurationProperties("platform.ui")
data class UIProperties(
    val url: String,
    val template: UITemplateProperties
) {
    fun getCatalogueUrl(catalogueId: String): String {
        return template.catalogue.replace("{catalogueId}", catalogueId)
    }
}

data class UITemplateProperties(
    val catalogue: String,
)
