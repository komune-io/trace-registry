package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.api.config.CatalogueConfig
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchResult
import io.komune.registry.f2.concept.api.service.ConceptF2FinderService
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetDistribution
import io.komune.registry.s2.catalogue.domain.model.FacetDistributionDTO
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.license.domain.LicenseId
import org.springframework.stereotype.Service

@Service
class CatalogueSearchFinderService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueI18nService: CatalogueI18nService,
    private val conceptF2FinderService: ConceptF2FinderService,
) : CatalogueCachedService() {

    @Suppress("LongMethod")
    suspend fun searchRef(
        query: String?,
        language: Language,
        otherLanguageIfAbsent: Boolean = false,
        accessRights: Match<String>? = null,
        catalogueIds: Match<String>? = null,
        parentId: Match<CatalogueId>? = null,
        parentIdentifier: Match<CatalogueIdentifier>? = null,
        type: Match<String>? = null,
        relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        themeIds: Match<String>? = null,
        licenseId: Match<String>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        availableLanguages: Match<Language>? = null,
        withTransient: Boolean = true,
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ): CatalogueRefSearchResult = withCache { cache ->
        val result = searchInternal(
            query = query,
            catalogueIds = catalogueIds,
            accessRights = accessRights,
            language = language,
            otherLanguageIfAbsent = otherLanguageIfAbsent,
            licenseId = licenseId,
            parentId = parentId,
            parentIdentifier = parentIdentifier,
            type = type,
            relatedInCatalogueIds = relatedInCatalogueIds,
            themeIds = themeIds,
            creatorOrganizationId = creatorOrganizationId,
            availableLanguages = availableLanguages,
            withTransient = withTransient,
            freeCriterion = freeCriterion,
            page = page
        )

        val masterCatalogues = catalogueFinderService.page(
            id = CollectionMatch(result.items.mapNotNull { it.isTranslationOf })
        ).items.associateBy(CatalogueModel::id)

        val refs = result.items.mapAsync { catalogue ->
            val masterCatalogue = catalogue.isTranslationOf?.let { masterCatalogues[it] }
            catalogueI18nService.translateToRefDTO(masterCatalogue ?: catalogue, language, otherLanguageIfAbsent)
        }.filterNotNull()

        CatalogueRefSearchResult(
            items = refs,
            total = result.total,
            distribution = result.distribution,
        )
    }

    @Suppress("LongMethod")
    suspend fun searchCatalogue(
        query: String?,
        language: Language,
        otherLanguageIfAbsent: Boolean = false,
        accessRights: Match<String>? = null,
        catalogueIds: Match<String>? = null,
        parentId: Match<CatalogueId>? = null,
        parentIdentifier: Match<CatalogueIdentifier>? = null,
        type: Match<String>? = null,
        relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        themeIds: Match<String>? = null,
        licenseId: Match<String>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        availableLanguages: Match<Language>? = null,
        withTransient: Boolean = true,
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ): CatalogueSearchResult = withCache { cache ->
        val result = searchInternal(
            query = query,
            catalogueIds = catalogueIds,
            accessRights = accessRights,
            language = language,
            otherLanguageIfAbsent = otherLanguageIfAbsent,
            licenseId = licenseId,
            parentId = parentId,
            parentIdentifier = parentIdentifier,
            type = type,
            relatedInCatalogueIds = relatedInCatalogueIds,
            themeIds = themeIds,
            creatorOrganizationId = creatorOrganizationId,
            availableLanguages = availableLanguages,
            withTransient = withTransient,
            freeCriterion = freeCriterion,
            page = page
        )

        if (result.items.isEmpty()) {
            return@withCache CatalogueSearchResult(
                items = emptyList(),
                total = result.total,
                distribution = result.distribution,
            )
        }

        val translatedCatalogues = catalogueF2FinderService.page(
            id = CollectionMatch(result.items.map { it.isTranslationOf!! }),
            language = language,
            otherLanguageIfAbsent = otherLanguageIfAbsent
        ).items.associateBy { it.id }

        CatalogueSearchResult(
            items = result.items.mapNotNull { translatedCatalogues[it.isTranslationOf] },
            total = result.total,
            distribution = result.distribution,
        )
    }

    @Suppress("LongMethod")
    private suspend fun searchInternal(
        query: String?,
        language: Language,
        otherLanguageIfAbsent: Boolean = false,
        accessRights: Match<String>? = null,
        catalogueIds: Match<CatalogueId>? = null,
        parentId: Match<CatalogueId>? = null,
        parentIdentifier: Match<CatalogueIdentifier>? = null,
        type: Match<CatalogueType>? = null,
        relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        themeIds: Match<String>? = null,
        licenseId: Match<LicenseId>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        availableLanguages: Match<Language>? = null,
        withTransient: Boolean = true,
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ): CatalogueSearchResultLocal = withCache { cache ->
        val catalogueTranslations = catalogueFinderService.search(
            query = query,
            catalogueIds = catalogueIds,
            accessRights = accessRights,
            language = ExactMatch(language).takeUnless { otherLanguageIfAbsent },
            licenseId = licenseId,
            parentId = parentId,
            parentIdentifier = parentIdentifier,
            type = andMatchOfNotNull(
                type,
                CollectionMatch(catalogueConfig.transientTypes).not().takeUnless { withTransient }
            ),
            relatedInCatalogueIds = relatedInCatalogueIds,
            themeIds = themeIds,
            creatorOrganizationId = creatorOrganizationId,
            availableLanguages = availableLanguages,
            freeCriterion = freeCriterion,
            page = page
        )

        val accessRightsDistribution = catalogueTranslations.distribution[CatalogueModel::accessRights.name]?.entries?.map{ (key, size) ->
            FacetDistribution(
                id = key,
                name = key,
                size = size
            )
        }.orEmpty()

        val themeDistribution = catalogueTranslations.distribution[CatalogueModel::themeIds.name]?.entries?.map{ (key, size) ->
            val theme = conceptF2FinderService.getTranslatedOrNull(key, language, true)
            FacetDistribution(
                id = theme?.id ?: key,
                name = theme?.prefLabel ?: "",
                size = size
            )
        }.orEmpty()

        val licenceDistribution = catalogueTranslations.distribution[CatalogueModel::licenseId.name]?.entries?.map{ (key, size) ->
            val licence = cache.licenses.get(key)
            FacetDistribution(
                id = licence?.id ?: key,
                name = licence?.name ?: "",
                size = size
            )
        }.orEmpty()

        val cataloguesDistribution = catalogueTranslations.distribution[CatalogueModel::type.name]?.entries?.map { (key, size) ->
            val catalogue = catalogueF2FinderService.getOrNull("${key}s", language)
            FacetDistribution(
                id = key,
                name = catalogue?.title ?: "",
                size = size
            )
        }.orEmpty()

        CatalogueSearchResultLocal(
            items = catalogueTranslations.items,
            total = catalogueTranslations.total,
            distribution = mapOf(
                CatalogueModel::accessRights.name to accessRightsDistribution,
                CatalogueModel::type.name to cataloguesDistribution,
                CatalogueModel::licenseId.name to licenceDistribution,
                CatalogueModel::themeIds.name to themeDistribution,
            )
        )
    }
}

private data class CatalogueSearchResultLocal(
    val items: List<CatalogueModel>,
    val total: Int,
    var distribution: Map<String, List<FacetDistributionDTO>>
)
