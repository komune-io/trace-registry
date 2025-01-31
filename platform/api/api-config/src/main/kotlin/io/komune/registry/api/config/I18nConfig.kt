package io.komune.registry.api.config

import io.komune.registry.s2.commons.model.Language
import org.springframework.beans.factory.annotation.Value
import org.springframework.context.annotation.Configuration

@Configuration
class I18nConfig {

    @Value("\${platform.i18n.ordered-locales}")
    private lateinit var _orderedLocales: String

    @Value("\${platform.i18n.catalogue.default-translation-type}")
    lateinit var defaultCatalogueTranslationType: String

    val orderedLocales: List<Language> by lazy {
        _orderedLocales.split(",").map(String::trim)
    }
}
