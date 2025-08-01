package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.collectionMatchOf
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.config.i18n.I18nService
import io.komune.registry.control.f2.certification.api.service.CertificationF2FinderService
import io.komune.registry.f2.catalogue.api.model.overrideWith
import io.komune.registry.f2.catalogue.api.model.toDTO
import io.komune.registry.f2.catalogue.domain.dto.CatalogueDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTOBase
import io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTOBase
import io.komune.registry.f2.catalogue.domain.dto.structure.CatalogueStructureDTOBase
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.f2.dataset.api.model.extractAggregators
import io.komune.registry.f2.dataset.api.model.toRef
import io.komune.registry.f2.dataset.api.service.DatasetPoliciesEnforcer
import io.komune.registry.f2.dataset.domain.DatasetTypes
import io.komune.registry.s2.catalogue.api.config.CatalogueConfig
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.structure.StructureType
import io.komune.registry.s2.catalogue.draft.api.CatalogueDraftFinderService
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.UserId
import io.komune.registry.s2.commons.utils.nullIfEmpty
import io.komune.registry.s2.dataset.domain.automate.DatasetState
import org.springframework.stereotype.Service

@Service
class CatalogueI18nService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueInformationConceptService: CatalogueInformationConceptService,
    private val cataloguePoliciesFilterEnforcer: CataloguePoliciesFilterEnforcer,
    private val certificationF2FinderService: CertificationF2FinderService,
    private val conceptF2FinderService: ConceptF2FinderService,
    private val datasetPoliciesEnforcer: DatasetPoliciesEnforcer,
    private val i18nService: I18nService,
) : CatalogueCachedService() {

    suspend fun translateToRefDTO(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueRefDTOBase? {
        return translate(catalogue, language, otherLanguageIfAbsent)?.let { translated ->
            CatalogueRefDTOBase(
                id = translated.id,
                identifier = translated.identifier,
                title = translated.title,
                language = translated.language!!,
                availableLanguages = translated.translationIds.keys.sorted(),
                type = translated.type,
                description = translated.description,
                img = translated.img,
                structure = translated.getStructure(),
                accessRights = translated.accessRights,
                order = translated.order,
                modified = translated.modified
            )
        }
    }

    @Suppress("CyclomaticComplexMethod", "LongMethod")
    suspend fun translateToDTO(
        catalogue: CatalogueModel,
        language: Language?,
        otherLanguageIfAbsent: Boolean,
    ): CatalogueDTOBase? = withCache { cache ->
        val translated = translate(catalogue, language, otherLanguageIfAbsent)
            ?: return@withCache null

        val themes = translated.themeIds.mapNotNull {
            cache.themes.get(it).let {
                conceptF2FinderService.translate(it, language ?: translated.language!!, otherLanguageIfAbsent)
            }
        }

        val draft = catalogueDraftFinderService.getByCatalogueIdOrNull(translated.id)
        val originalCatalogue = draft
            ?.originalCatalogueId
            ?.let { cache.untranslatedCatalogues.get(it) }

        val parent = draft?.addedParentIds?.firstOrNull()?.let { cache.untranslatedCatalogues.get(it) }
            ?: catalogueFinderService.page(
                childrenCatalogueIds = ExactMatch(originalCatalogue?.id ?: translated.id),
                offset = OffsetPagination(0, 1)
            ).items
                .onEach { cache.untranslatedCatalogues.register(it.id, it) }
                .firstOrNull()

        val pendingDrafts = AuthenticationProvider.getAuthedUser()?.id?.let {
            pendingDraftsOf(originalCatalogue?.id ?: translated.id, it)
        }

        val aggregators = if (translated.integrateCounter == true) {
            catalogueInformationConceptService.computeAggregators(translated)
        } else {
            emptyList()
        }

        val datasets = translated.childrenDatasetIds
            .map { cache.datasets.get(it).toDTOCached(draft) }
            .filter { it.language == translated.language && it.status != DatasetState.DELETED }
            .filter { it.type != DatasetTypes.ATTESTATIONS || aggregators.any { it.value != "0" } }
            .mapNotNull { dataset -> datasetPoliciesEnforcer.enforceDataset(dataset, translated) }
            .sortedBy { it.structure?.definitions?.get("order") ?: it.title }

        CatalogueDTOBase(
            id = translated.id,
            identifier = originalCatalogue?.identifier ?: translated.identifier,
            parent = parent?.let { translateToRefDTO(it, language, otherLanguageIfAbsent) },
            status = translated.status,
            title = translated.title,
            description = translated.description,
            catalogues = translated.childrenCatalogueIds.toFilteredRefs(language, otherLanguageIfAbsent, draft != null),
            relatedCatalogues = translated.relatedCatalogueIds?.mapValues { (_, catalogueIds) ->
                catalogueIds.toFilteredRefs(language , otherLanguageIfAbsent, draft != null)
            },
            datasets = datasets,
            referencedDatasets = translated.referencedDatasetIds
                .map { cache.datasets.get(it).toDTOCached(draft) }
                .filter { it.language == translated.language && it.status != DatasetState.DELETED }
                .mapNotNull { dataset -> datasetPoliciesEnforcer.enforceDataset(dataset, translated) }
                .sortedBy { it.structure?.definitions?.get("position") ?: it.title },
            themes = themes,
            type = originalCatalogue?.type ?: translated.type,
            language = translated.language!!,
            configuration = translated.configuration,
            availableLanguages = translated.translationIds.keys.sorted(),
            structure = translated.getStructure(),
            homepage = translated.homepage,
            img = translated.img,
            creator = translated.creatorId?.let { cache.users.get(it) },
            creatorOrganization = translated.creatorOrganizationId?.let { cache.organizations.get(it) },
            ownerOrganization = translated.ownerOrganizationId?.let { cache.organizations.get(it) },
            validator = translated.validatorId?.let { cache.users.get(it) },
            validatorOrganization = translated.validatorOrganizationId?.let { cache.organizations.get(it) },
            stakeholder = translated.stakeholder,
            accessRights = translated.accessRights,
            license = translated.licenseId?.let { cache.licenses.get(it) },
            location = translated.location,
            order = translated.order,
            hidden = translated.hidden,
            issued = translated.issued,
            modified = translated.modified,
            pendingDrafts = pendingDrafts?.map { it.toRef(cache.organizations::get, cache.users::get) },
            aggregators = aggregators,
            version = translated.version,
            versionNotes = translated.versionNotes,
            integrateCounter = translated.integrateCounter,
            indicators = translated.metadataDatasetId?.let { cache.datasets.get(it).toDTOCached(draft) }
                ?.extractAggregators()
                .orEmpty(),
            certifications = translated.certificationIds
                .mapNotNull { certificationF2FinderService.getRefOrNull(it) }
        )
    }

    suspend fun translateToRefTreeDTO(
        catalogue: CatalogueModel,
        language: Language?,
        otherLanguageIfAbsent: Boolean,
    ): CatalogueRefTreeDTOBase? = withCache {
        translate(catalogue, language, otherLanguageIfAbsent)?.let { translated ->
            CatalogueRefTreeDTOBase(
                id = translated.id,
                identifier = translated.identifier,
                title = translated.title,
                language = translated.language!!,
                availableLanguages = translated.translationIds.keys.sorted(),
                type = translated.type,
                description = translated.description,
                img = translated.img,
                structure = translated.getStructure(),
                accessRights = translated.accessRights,
                order = translated.order,
                catalogues = translated.childrenCatalogueIds.nullIfEmpty()?.let { catalogueIds ->
                    getCatalogueTree(catalogueIds, language, otherLanguageIfAbsent)
                },
                relatedCatalogues = translated.relatedCatalogueIds?.mapValues { (_, catalogueIds) ->
                    getCatalogueTree(catalogueIds, language, otherLanguageIfAbsent)
                },
                modified = translated.modified
            )
        }
    }

    private suspend fun getCatalogueTree(
        catalogueIds: Set<CatalogueId>,
        language: Language?,
        otherLanguageIfAbsent: Boolean
    ): List<CatalogueRefTreeDTOBase> = withCache { cache ->
        val unCachedCatalogueIds = catalogueIds.filterNot { it in cache.untranslatedCatalogues }

        if (unCachedCatalogueIds.isNotEmpty()) {
            catalogueFinderService.page(id = CollectionMatch(unCachedCatalogueIds))
                .items
                .forEach { cache.untranslatedCatalogues.register(it.id, it) }
        }

        catalogueIds.mapNotNull { cache.untranslatedCatalogues.get(it) }
            .filter {
                it.status != CatalogueState.DELETED
                        && catalogueConfig.typeConfigurations[it.type]?.structure?.isTab == false
                        && !it.hidden && cataloguePoliciesFilterEnforcer.enforceCatalogue(it) != null
            }
            .mapAsync { child -> translateToRefTreeDTO(child, language, otherLanguageIfAbsent) }
            .filterNotNull()
            .sortedWith(
                compareBy<CatalogueRefTreeDTOBase> { it.order ?: Int.MAX_VALUE }
                    .thenByDescending { it.modified }
//                    .thenBy { it.title }
//                    .thenBy { it.identifier }
            )
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
            childrenDatasetIds = catalogue.childrenDatasetIds + translation.childrenDatasetIds,
            metadataDatasetId = translation.metadataDatasetId,
            childrenCatalogueIds = catalogue.childrenCatalogueIds + translation.childrenCatalogueIds,
            version = translation.version,
            versionNotes = translation.versionNotes,
            integrateCounter = translation.integrateCounter,
            modified = translation.modified
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

    private suspend fun CatalogueModel.getStructure(): CatalogueStructureDTOBase? = withCache { cache ->
        val blueprint = catalogueConfig.typeConfigurations[type]
        blueprint?.structure
            .overrideWith(configuration)
            .toDTO(
                language = language!!,
                defaults = blueprint?.defaults,
                getTypeConfiguration = catalogueConfig.typeConfigurations::get,
                getLicenseByIdentifier = cache.licensesByIdentifier::get
            )
    }

    private suspend fun Collection<CatalogueId>.toFilteredRefs(
        language: Language?,
        otherLanguageIfAbsent: Boolean,
        isDraft: Boolean
    ): List<CatalogueRefDTOBase> = withCache { cache ->
        val catalogueRefs = mutableListOf<CatalogueRefDTOBase>()
        forEach { catalogueId ->
            val catalogue = cache.untranslatedCatalogues.get(catalogueId)
                ?.takeIf { it.status != CatalogueState.DELETED && (!it.hidden || isDraft) }
                ?.let { cataloguePoliciesFilterEnforcer.enforceCatalogue(it) }

            val catalogueRef = catalogue?.let { translateToRefDTO(it, language, otherLanguageIfAbsent) }
            if (!isDraft && catalogueRef?.structure?.type == StructureType.FACTORY) {
                catalogueRefs.addAll(catalogue.childrenCatalogueIds.toFilteredRefs(language, otherLanguageIfAbsent, isDraft))
            } else {
                catalogueRef?.let { catalogueRefs.add(it) }
            }
        }
        catalogueRefs.sortedWith(
            compareBy<CatalogueRefDTOBase> { it.order ?: Int.MAX_VALUE }
                .thenByDescending { it.modified }
        )
    }
}
