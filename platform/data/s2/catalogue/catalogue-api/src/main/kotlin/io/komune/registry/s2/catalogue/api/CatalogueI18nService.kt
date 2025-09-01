package io.komune.registry.s2.catalogue.api

import io.komune.registry.api.config.i18n.I18nService
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CatalogueI18nService(
    private val catalogueFinderService: CatalogueFinderService,
    private val i18nService: I18nService,
) {

    /**
     * 1. If the desired language is null, skip steps 2 and 4.
     * 2. If the catalogue is already in the desired language, return it as is.
     * 3. Else, if the catalogue has no translations:
     *   - If the catalogue has a language and alternative language is allowed, return it as is.
     *   - Otherwise, return null.
     * 4. Else, if the desired language is not in the translations and alternative language is not allowed, return null.
     * 5. Else, return the catalogue translated to the first existing translation found in the order:
     *   - Desired language
     *   - Configured ordered languages list
     *   - First translation found if none of the above matched any translation.
     */
    suspend fun translate(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueModel? {
        when {
            language != null && catalogue.language == language -> return catalogue
            catalogue.translationIds.isEmpty() -> return when {
                otherLanguageIfAbsent && catalogue.language != null -> catalogue
                else -> null
            }
            language != null && language !in catalogue.translationIds && !otherLanguageIfAbsent -> return null
        }

        val selectedLanguage = i18nService.selectLanguage(catalogue.translationIds.keys, language, otherLanguageIfAbsent)
            ?: return null
        val translationId = catalogue.translationIds[selectedLanguage]!!

        val translation = catalogueFinderService.get(translationId)
        return catalogue.copy(
            language = translation.language,
            title = translation.title,
            description = translation.description,
            childrenDatasetIds = catalogue.childrenDatasetIds + translation.childrenDatasetIds,
            metadataDatasetId = translation.metadataDatasetId,
            childrenCatalogueIds = catalogue.childrenCatalogueIds + translation.childrenCatalogueIds,
            version = translation.version,
            versionNotes = translation.versionNotes,
            integrateCounter = translation.integrateCounter,
            modified = translation.modified
        )
    }
}
