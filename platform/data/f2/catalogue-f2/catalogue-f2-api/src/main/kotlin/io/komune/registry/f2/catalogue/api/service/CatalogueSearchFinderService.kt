package io.komune.registry.f2.catalogue.api.service

import f2.dsl.cqrs.filter.CollectionMatch
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.filter.andMatchOfNotNull
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchResult
import io.komune.registry.f2.catalogue.domain.query.CatalogueSearchResult
import io.komune.registry.s2.catalogue.api.config.CatalogueConfig
import io.komune.registry.s2.catalogue.api.config.CatalogueTypeSearchFacet
import io.komune.registry.s2.catalogue.domain.model.CatalogueMeiliSearchField
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.CatalogueIdentifier
import io.komune.registry.s2.commons.model.CatalogueType
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.Facet
import io.komune.registry.s2.commons.model.FacetPageDTOBase
import io.komune.registry.s2.commons.model.FacetPageModel
import io.komune.registry.s2.commons.model.FacetValue
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.OrganizationId
import io.komune.registry.s2.license.domain.LicenseId
import org.springframework.stereotype.Service

@Service
class CatalogueSearchFinderService(
    private val catalogueConfig: CatalogueConfig,
    private val catalogueF2FinderService: CatalogueF2FinderService,
    private val catalogueF2I18NService: CatalogueF2I18nService,
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
        relatedCatalogueIds: Map<String, Match<CatalogueId>>? = null,
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
            relatedCatalogueIds = relatedCatalogueIds,
            relatedInCatalogueIds = relatedInCatalogueIds,
            themeIds = themeIds,
            creatorOrganizationId = creatorOrganizationId,
            availableLanguages = availableLanguages,
            withTransient = withTransient,
            freeCriterion = freeCriterion,
            page = page
        )

        val masterCatalogues = catalogueFinderService.page(
            id = CollectionMatch(result.items.mapNotNull { it.isTranslationOf }.ifEmpty { listOf("none") })
        ).items.associateBy(CatalogueModel::id)

        val refs = result.items.mapAsync { catalogue ->
            val masterCatalogue = catalogue.isTranslationOf?.let { masterCatalogues[it] }
            catalogueF2I18NService.translateToRefDTO(masterCatalogue ?: catalogue, language, otherLanguageIfAbsent)
        }.filterNotNull()

        CatalogueRefSearchResult(
            items = refs,
            total = result.total,
            facets = result.facets,
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
        relatedCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        themeIds: Match<String>? = null,
        licenseId: Match<String>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        availableLanguages: Match<Language>? = null,
        withTransient: Boolean = true,
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ): CatalogueSearchResult = withCache {
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
            relatedCatalogueIds = relatedCatalogueIds,
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
                facets = result.facets,
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
            facets = result.facets,
        )
    }

    private suspend fun searchInternal(
        query: String?,
        language: Language,
        otherLanguageIfAbsent: Boolean = false,
        accessRights: Match<String>? = null,
        catalogueIds: Match<CatalogueId>? = null,
        parentId: Match<CatalogueId>? = null,
        parentIdentifier: Match<CatalogueIdentifier>? = null,
        type: Match<CatalogueType>? = null,
        relatedCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        relatedInCatalogueIds: Map<String, Match<CatalogueId>>? = null,
        themeIds: Match<String>? = null,
        licenseId: Match<LicenseId>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        availableLanguages: Match<Language>? = null,
        withTransient: Boolean = true,
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ) = withCache {
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
            relatedCatalogueIds = relatedCatalogueIds,
            relatedInCatalogueIds = relatedInCatalogueIds,
            themeIds = themeIds,
            creatorOrganizationId = creatorOrganizationId,
            availableLanguages = availableLanguages,
            freeCriterion = freeCriterion,
            page = page
        )

        val catalogueTypesFacetValues = catalogueTranslations.buildFacetValues(CatalogueMeiliSearchField.TYPE) { key ->
            key to (catalogueConfig.typeConfigurations[key]?.name?.get(language) ?: key)
        }
        val catalogueTypeFacet = Facet(
            key = CatalogueMeiliSearchField.TYPE.identifier,
            label = CatalogueMeiliSearchField.TYPE.identifier,
            values = catalogueTypesFacetValues.sortedBy { it.label }
        ).takeIf { it.values.isNotEmpty() }

        val sortedTypeConfigurations = catalogueConfig.typeConfigurations
            .filterKeys { it in catalogueTypesFacetValues.map(FacetValue::key) }
            .values
            .sortedBy { it.type }

        val facetsConfigurations = sortedTypeConfigurations.flatMap { typeConfiguration ->
            typeConfiguration.search?.facets.orEmpty()
        }.distinctBy { it.key }

        val facets = facetsConfigurations.map { it.toFacet(catalogueTranslations, language) }

        FacetPageDTOBase(
            items = catalogueTranslations.items,
            total = catalogueTranslations.total,
            facets = listOfNotNull(catalogueTypeFacet) + facets,
        )
    }

    private suspend fun CatalogueTypeSearchFacet.toFacet(
        page: FacetPageModel<*>,
        language: Language
    ): Facet {
        val (rootKey, nestedKeys) = key.split('.', limit = 2).padEnd(2)

        val rootKeyField = CatalogueMeiliSearchField.fromIdentifier(rootKey)
            ?: CatalogueMeiliSearchField.RELATED_CATALOGUE_IDS.takeIf { rootKey == CatalogueModel::relatedCatalogueIds.name }
            ?: throw IllegalArgumentException("Invalid search facet key: $rootKey")

        val values = when (rootKeyField) {
            CatalogueMeiliSearchField.ACCESS_RIGHTS -> page.buildAccessRightsFacetValues()
            CatalogueMeiliSearchField.THEME_IDS -> page.buildThemeFacetValues(language)
            CatalogueMeiliSearchField.LICENSE_ID -> page.buildLicenseFacetValues()
            CatalogueMeiliSearchField.RELATED_CATALOGUE_IDS -> page.buildRelatedCatalogueFacetValues(nestedKeys, language)
            else -> throw IllegalArgumentException("Unsupported search facet key: $rootKey")
        }

        return Facet(
            key = key,
            label = label[language] ?: key,
            values = values.sortedBy { it.label }
        )
    }

    private suspend fun FacetPageModel<*>.buildAccessRightsFacetValues(): List<FacetValue> {
        return buildFacetValues(CatalogueMeiliSearchField.ACCESS_RIGHTS) { it to it }
    }

    private suspend fun FacetPageModel<*>.buildThemeFacetValues(
        language: Language
    ) = withCache { cache ->
        buildFacetValues(CatalogueMeiliSearchField.THEME_IDS) {
            val theme = cache.themes.get(it)
            theme.id to theme.prefLabels[language].orEmpty()
        }
    }

    private suspend fun FacetPageModel<*>.buildLicenseFacetValues() = withCache { cache ->
        buildFacetValues(CatalogueMeiliSearchField.LICENSE_ID) {
            cache.licenses.get(it)?.let { license ->
                license.id to license.name
            }
        }
    }

    private suspend fun FacetPageModel<*>.buildRelatedCatalogueFacetValues(
        relation: String,
        language: Language
    ) = buildFacetValuesBatch(CatalogueMeiliSearchField.RELATED_CATALOGUE_IDS, { key ->
        key.substringAfter(CatalogueModel.RELATION_SEPARATOR)
    }) { keys ->
        val catalogueIds = keys.mapNotNull { key ->
            val (parsedRelation, catalogueId) = CatalogueModel.unflattenRelation(key)
            catalogueId.takeIf { parsedRelation == relation }
        }.ifEmpty { return@buildFacetValuesBatch emptyMap() }

        catalogueF2FinderService.page(id = CollectionMatch(catalogueIds), language = language)
            .items
            .associate { it.id to it.title }
    }


    private suspend fun FacetPageModel<*>.buildFacetValues(
        field: CatalogueMeiliSearchField, build: suspend (key: String) -> Pair<String, String>?
    ): List<FacetValue> {
        val entries = distribution[field.identifier]?.entries
            ?: return emptyList()

        return entries.mapNotNull { (key, size) ->
            val (id, name) = build(key)
                ?: return@mapNotNull null
            FacetValue(key = id, label = name, count = size)
        }
    }

    private suspend fun FacetPageModel<*>.buildFacetValuesBatch(
        field: CatalogueMeiliSearchField,
        transformKey: (key: String) -> String = { it },
        build: suspend (keys: Collection<String>) -> Map<String, String>,
    ): List<FacetValue> {
        val rawFacetValues = distribution[field.identifier]
            ?: return emptyList()

        val names = build(rawFacetValues.keys)

        return rawFacetValues.mapKeys { (key) -> transformKey(key) }
            .mapNotNull { (key, size) ->
                val name = names[key] ?: return@mapNotNull null
                FacetValue(key = key, label = name, count = size)
            }
    }

    private fun List<String>.padEnd(size: Int) = if (this.size < size) {
        this + List(size - this.size) { "" }
    } else this
}
