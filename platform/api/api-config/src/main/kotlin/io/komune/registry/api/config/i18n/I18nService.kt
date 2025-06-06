package io.komune.registry.api.config.i18n

import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class I18nService(
    private val i18nConfig: I18nConfig
) {
    /**
     * Selects the language to use for a given set of languages.
     * If the wanted language is null, an arbitrary language is selected.
     */
    fun selectLanguage(languages: Set<Language>, wantedLanguage: Language?, otherLanguageIfAbsent: Boolean): Language? {
        return when {
            languages.isEmpty() -> return null
            wantedLanguage != null && wantedLanguage in languages -> return wantedLanguage
            wantedLanguage != null && !otherLanguageIfAbsent -> return null
            else -> i18nConfig.orderedLocales.firstOrNull { it in languages }
                ?: languages.first()
        }
    }
}
