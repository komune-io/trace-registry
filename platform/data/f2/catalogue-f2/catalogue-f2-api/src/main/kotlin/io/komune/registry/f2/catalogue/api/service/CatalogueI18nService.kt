package io.komune.registry.f2.catalogue.api.service

import cccev.dsl.model.nullIfEmpty
import f2.dsl.cqrs.filter.CollectionMatch
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.config.I18nConfig
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.dataset.api.service.toDTO
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CatalogueI18nService(
    private val catalogueFinderService: CatalogueFinderService,
    private val datasetFinderService: DatasetFinderService,
    private val i18nConfig: I18nConfig
) {
    suspend fun translateToDTO(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.toTranslatedDTO(language, otherLanguageIfAbsent)
    }

    suspend fun translateToRefDTO(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueRefDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.toTranslatedRefDTO()
    }

    suspend fun translateToRefTreeDTO(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueRefTreeDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.toTranslatedRefTreeDTO(language, otherLanguageIfAbsent)
    }

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
            catalogue.translations.isEmpty() -> return when {
                otherLanguageIfAbsent && catalogue.language != null -> catalogue
                else -> null
            }
            language != null && language !in catalogue.translations && !otherLanguageIfAbsent -> return null
        }

        val translationId = catalogue.translations[language]
            ?: catalogue.translations.getFirstExistingIn(i18nConfig.orderedLocales)
            ?: catalogue.translations.values.first()

        val translation = catalogueFinderService.get(translationId)
        return catalogue.copy(
            language = translation.language,
            title = translation.title,
            description = translation.description,
            datasets = catalogue.datasets + translation.datasets,
            catalogues = catalogue.catalogues + translation.catalogues,
            hidden = translation.hidden
        )
    }

    private fun <K, V> Map<K, V>.getFirstExistingIn(keys: List<K>): V? {
        return get(keys.firstOrNull { it in this })
    }

    private suspend fun CatalogueModel.toTranslatedDTO(wantedLanguage: Language?, otherLanguageIfAbsent: Boolean) = CatalogueDTOBase(
        id = id,
        identifier = identifier,
        status = status,
        title = title,
        description = description,
        catalogues = catalogues.mapNotNull { translateToRefDTO(catalogueFinderService.get(it), wantedLanguage, otherLanguageIfAbsent) },
        datasets = datasets.map { datasetFinderService.get(it).toDTO() }.filter { it.language == language },
        themes = themes,
        type = type,
        language = language!!,
        availableLanguages = translations.keys.toList(),
        structure = structure,
        homepage = homepage,
        img = img,
        creator = creator,
        publisher = publisher,
        validator = validator,
        accessRights = accessRights,
        license = license,
        hidden = hidden,
        issued = issued,
        modified = modified,
    )

    private fun CatalogueModel.toTranslatedRefDTO(): CatalogueRefDTOBase {
        return CatalogueRefDTOBase(
            id = id,
            identifier = identifier,
            title = title,
            language = language!!,
            availableLanguages = translations.keys.toList(),
            type = type,
            description = description,
            img = img,
        )
    }

    private suspend fun CatalogueModel.toTranslatedRefTreeDTO(
        wantedLanguage: Language?,
        otherLanguageIfAbsent: Boolean,
    ): CatalogueRefTreeDTOBase = CatalogueRefTreeDTOBase(
        id = id,
        identifier = identifier,
        title = title,
        language = language!!,
        availableLanguages = translations.keys.toList(),
        type = type,
        description = description,
        img = img,
        catalogues = catalogues.nullIfEmpty()?.let {
            catalogueFinderService.page(id = CollectionMatch(it))
                .items
                .mapAsync { child -> child.toTranslatedRefTreeDTO(wantedLanguage, otherLanguageIfAbsent) }
        }
    )
}
