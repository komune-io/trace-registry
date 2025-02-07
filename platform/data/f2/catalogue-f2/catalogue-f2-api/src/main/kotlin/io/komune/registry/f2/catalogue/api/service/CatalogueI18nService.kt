package io.komune.registry.f2.catalogue.api.service

import cccev.dsl.model.nullIfEmpty
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.config.i18n.I18nService
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.dataset.api.service.toDTO
import io.komune.registry.f2.license.api.service.LicenseF2FinderService
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.Language
import org.springframework.stereotype.Service

@Service
class CatalogueI18nService(
    private val catalogueFinderService: CatalogueFinderService,
    private val conceptF2FinderService: ConceptF2FinderService,
    private val datasetFinderService: DatasetFinderService,
    private val licenseF2FinderService: LicenseF2FinderService
) : I18nService() {
    suspend fun translateToRefDTO(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueRefDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.let { translation ->
            CatalogueRefDTOBase(
                id = translation.id,
                identifier = translation.identifier,
                title = translation.title,
                language = translation.language!!,
                availableLanguages = translation.translationIds.keys.toList(),
                type = translation.type,
                description = translation.description,
                img = translation.img,
            )
        }
    }

    suspend fun translateToDTO(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.let { translation ->
            val themes = translation.themeIds?.mapNotNull {
                conceptF2FinderService.getTranslatedOrNull(it, language ?: translation.language!!, otherLanguageIfAbsent)
            }

            val parent = catalogueFinderService.page(
                childrenIds = ExactMatch(translation.id),
                offset = OffsetPagination(0, 1)
            ).items.firstOrNull()

            CatalogueDTOBase(
                id = translation.id,
                identifier = translation.identifier,
                parentId = parent?.id,
                status = translation.status,
                title = translation.title,
                description = translation.description,
                catalogues = translation.catalogueIds.mapNotNull {
                    translateToRefDTO(catalogueFinderService.get(it), language , otherLanguageIfAbsent)
                },
                datasets = translation.datasetIds
                    .map { datasetFinderService.get(it).toDTO() }
                    .filter { it.language == translation.language },
                themes = themes,
                type = translation.type,
                language = translation.language!!,
                availableLanguages = translation.translationIds.keys.toList(),
                structure = translation.structure,
                homepage = translation.homepage,
                img = translation.img,
                creator = translation.creator,
                publisher = translation.publisher,
                validator = translation.validator,
                accessRights = translation.accessRights,
                license = translation.licenseId?.let { licenseF2FinderService.getOrNull(it) },
                hidden = translation.hidden,
                issued = translation.issued,
                modified = translation.modified,
            )
        }
    }

    suspend fun translateToRefTreeDTO(
        catalogue: CatalogueModel,
        language: Language?,
        otherLanguageIfAbsent: Boolean,
    ): CatalogueRefTreeDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.let { translation ->
            CatalogueRefTreeDTOBase(
                id = translation.id,
                identifier = translation.identifier,
                title = translation.title,
                language = translation.language!!,
                availableLanguages = translation.translationIds.keys.toList(),
                type = translation.type,
                description = translation.description,
                img = translation.img,
                catalogues = translation.catalogueIds.nullIfEmpty()?.let {
                    catalogueFinderService.page(id = CollectionMatch(it))
                        .items
                        .mapAsync { child -> translateToRefTreeDTO(child, language, otherLanguageIfAbsent) }
                        .filterNotNull()
                }
            )
        }
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
            catalogue.translationIds.isEmpty() -> return when {
                otherLanguageIfAbsent && catalogue.language != null -> catalogue
                else -> null
            }
            language != null && language !in catalogue.translationIds && !otherLanguageIfAbsent -> return null
        }

        val selectedLanguage = selectLanguage(catalogue.translationIds.keys, language, otherLanguageIfAbsent)
            ?: return null
        val translationId = catalogue.translationIds[selectedLanguage]!!

        val translation = catalogueFinderService.get(translationId)
        return catalogue.copy(
            language = translation.language,
            title = translation.title,
            description = translation.description,
            datasetIds = catalogue.datasetIds + translation.datasetIds,
            catalogueIds = catalogue.catalogueIds + translation.catalogueIds
        )
    }
}
