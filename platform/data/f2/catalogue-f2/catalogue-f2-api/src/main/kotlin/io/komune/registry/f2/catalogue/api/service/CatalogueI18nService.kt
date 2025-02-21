package io.komune.registry.f2.catalogue.api.service

import cccev.dsl.model.nullIfEmpty
import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.collectionMatchOf
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.config.i18n.I18nService
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.dataset.api.service.toDTO
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.program.s2.dataset.api.DatasetFinderService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import org.springframework.stereotype.Service

@Service
class CatalogueI18nService(
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueFinderService: CatalogueFinderService,
    private val conceptF2FinderService: ConceptF2FinderService,
    private val datasetFinderService: DatasetFinderService,
    private val i18nService: I18nService,
) : CatalogueCachedService() {

    suspend fun translateToRefDTO(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueRefDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.let { translated ->
            CatalogueRefDTOBase(
                id = translated.id,
                identifier = translated.identifier,
                title = translated.title,
                language = translated.language!!,
                availableLanguages = translated.translationIds.keys.toList(),
                type = translated.type,
                description = translated.description,
                img = translated.img,
            )
        }
    }

    @Suppress("CyclomaticComplexMethod")
    suspend fun translateToDTO(
        catalogue: CatalogueModel,
        language: Language?,
        otherLanguageIfAbsent: Boolean,
    ): CatalogueDTOBase? = withCache { cache ->
        val translated = translate(catalogue, language, otherLanguageIfAbsent)
            ?: return@withCache null

        val themes = translated.themeIds?.mapNotNull {
            conceptF2FinderService.getTranslatedOrNull(it, language ?: translated.language!!, otherLanguageIfAbsent)
        }

        val originalCatalogue = catalogueDraftFinderService.getByCatalogueIdOrNull(translated.id)
            ?.originalCatalogueId
            ?.let { catalogueFinderService.get(it) }

        val parent = catalogueFinderService.page(
            childrenIds = ExactMatch(originalCatalogue?.id ?: translated.id),
            offset = OffsetPagination(0, 1)
        ).items.firstOrNull()

        val pendingDrafts = AuthenticationProvider.getAuthedUser()?.id?.let {
            pendingDraftsOf(originalCatalogue?.id ?: translated.id, it)
        }

        CatalogueDTOBase(
            id = translated.id,
            identifier = originalCatalogue?.identifier ?: translated.identifier,
            parentId = parent?.id,
            status = translated.status,
            title = translated.title,
            description = translated.description,
            catalogues = translated.catalogueIds.mapNotNull { childId ->
                catalogueFinderService.get(childId)
                    .takeIf { it.status != CatalogueState.DELETED && !it.hidden }
                    ?.let { translateToRefDTO(it, language , otherLanguageIfAbsent) }
            },
            datasets = translated.datasetIds
                .map { datasetFinderService.get(it).toDTO() }
                .filter { it.language == translated.language && it.status != DatasetState.DELETED },
            themes = themes,
            type = originalCatalogue?.type ?: translated.type,
            language = translated.language!!,
            availableLanguages = translated.translationIds.keys.toList(),
            structure = translated.structure,
            homepage = translated.homepage,
            img = translated.img,
            creator = translated.creatorId?.let { cache.users.get(it) },
            creatorOrganization = translated.creatorOrganizationId?.let { cache.organizations.get(it) },
            ownerOrganization = translated.ownerOrganizationId?.let { cache.organizations.get(it) },
            publisher = translated.publisherId?.let { cache.users.get(it) },
            validator = translated.validatorId?.let { cache.users.get(it) },
            accessRights = translated.accessRights,
            license = translated.licenseId?.let { cache.licenses.get(it) },
            location = translated.location,
            hidden = translated.hidden,
            issued = translated.issued,
            modified = translated.modified,
            pendingDrafts = pendingDrafts?.map { it.toRef() },
            version = translated.version,
            versionNotes = translated.versionNotes,
        )
    }

    suspend fun translateToRefTreeDTO(
        catalogue: CatalogueModel,
        language: Language?,
        otherLanguageIfAbsent: Boolean,
    ): CatalogueRefTreeDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.let { translated ->
            CatalogueRefTreeDTOBase(
                id = translated.id,
                identifier = translated.identifier,
                title = translated.title,
                language = translated.language!!,
                availableLanguages = translated.translationIds.keys.toList(),
                type = translated.type,
                description = translated.description,
                img = translated.img,
                catalogues = translated.catalogueIds.nullIfEmpty()?.let { catalogueIds ->
                    catalogueFinderService.page(
                        id = CollectionMatch(catalogueIds),
                        hidden = ExactMatch(false),
                    ).items
                        .filter { it.status != CatalogueState.DELETED }
                        .mapAsync { child -> translateToRefTreeDTO(child, language, otherLanguageIfAbsent) }
                        .filterNotNull()
                        .sortedBy(CatalogueRefTreeDTOBase::title)
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

        val selectedLanguage = i18nService.selectLanguage(catalogue.translationIds.keys, language, otherLanguageIfAbsent)
            ?: return null
        val translationId = catalogue.translationIds[selectedLanguage]!!

        val translation = catalogueFinderService.get(translationId)
        return catalogue.copy(
            language = translation.language,
            title = translation.title,
            description = translation.description,
            datasetIds = catalogue.datasetIds + translation.datasetIds,
            catalogueIds = catalogue.catalogueIds + translation.catalogueIds,
            version = translation.version,
            versionNotes = translation.versionNotes,
        )
    }

    private suspend fun pendingDraftsOf(catalogueId: CatalogueId, creatorId: UserId): List<CatalogueDraftModel> {
        return catalogueDraftFinderService.page(
            originalCatalogueId = ExactMatch(catalogueId),
            status = collectionMatchOf(
                CatalogueDraftState.DRAFT,
                CatalogueDraftState.SUBMITTED,
                CatalogueDraftState.UPDATE_REQUESTED
            ),
            creatorId = ExactMatch(creatorId)
        ).items
    }
}
