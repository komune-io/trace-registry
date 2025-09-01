package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.collectionMatchOf
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.im.commons.auth.AuthenticationProvider
import io.komune.registry.api.commons.utils.mapAsync
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
import io.komune.registry.s2.catalogue.api.CatalogueI18nService
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
class CatalogueF2I18nService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueDraftFinderService: CatalogueDraftFinderService,
    private val catalogueI18nService: CatalogueI18nService,
    private val catalogueInformationConceptService: CatalogueInformationConceptService,
    private val cataloguePoliciesFilterEnforcer: CataloguePoliciesFilterEnforcer,
    private val certificationF2FinderService: CertificationF2FinderService,
    private val conceptF2FinderService: ConceptF2FinderService,
    private val datasetPoliciesEnforcer: DatasetPoliciesEnforcer
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
            certifications = certificationF2FinderService.page(
                language = translated.language!!,
                ids = originalCatalogue?.certificationIds ?: translated.certificationIds
            ).items
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
            )
    }

    suspend fun translate(catalogue: CatalogueModel, language: Language?, otherLanguageIfAbsent: Boolean): CatalogueModel? {
        return catalogueI18nService.translate(catalogue, language, otherLanguageIfAbsent)
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
