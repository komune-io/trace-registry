package io.komune.registry.program.s2.catalogue.api.entity

import com.fasterxml.jackson.databind.ObjectMapper
import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.model.SearchResult
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.config.search.SearchProperties
import io.komune.registry.infra.meilisearch.config.MeiliSearchSnapRepository
import io.komune.registry.infra.meilisearch.config.criterion
import io.komune.registry.infra.meilisearch.config.match
import io.komune.registry.program.s2.catalogue.api.CatalogueModelI18nService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueMeiliSearchField
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetPage
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.MeiliIndex
import io.komune.registry.s2.commons.model.OrganizationId
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.springframework.stereotype.Service

@Service
class CatalogueSnapMeiliSearchRepository(
    private val objectMapper: ObjectMapper,
    private val catalogueI18nService: CatalogueModelI18nService,
    private val searchProperties: SearchProperties,
) : MeiliSearchSnapRepository<CatalogueModel>(
    MeiliIndex.CATALOGUES,
    CatalogueModel::class
) {
    private val indexedCatalogueTypes: List<String> = searchProperties.indexedCatalogueTypes

    override val searchableAttributes: Array<String> = arrayOf(
        CatalogueModel::identifier.name,
        CatalogueModel::title.name,
        CatalogueModel::description.name,
        "${CatalogueModel::location.name}.${Location::country.name}",
        "${CatalogueModel::location.name}.${Location::region.name}"
    )

    override val filterableAttributes: Array<String> = CatalogueMeiliSearchField.entries
        .map(CatalogueMeiliSearchField::identifier)
        .toTypedArray()

    override val sortableAttributes: Array<String> = arrayOf(
        CatalogueModel::modified.name
    )

    override val distinctAttribute: String? = CatalogueModel::isTranslationOf.name

    suspend fun save(entity: CatalogueEntity) = withContext(Dispatchers.IO) {
        if (entity.status == CatalogueState.DELETED) {
            remove(entity.id)
            return@withContext
        }

        if (entity.isTranslationOf == null) {
            return@withContext
        }

        val domain = catalogueI18nService.rebuildModel(entity)
            ?: return@withContext

        if (domain.hidden) {
            return@withContext
        }

        if (domain.type !in indexedCatalogueTypes) {
            return@withContext
        }

        try {
            val jsonString = objectMapper.writeValueAsString(listOf(domain))
            val existing = get(domain.id)
            if (existing == null) {
                index.addDocuments(jsonString, "id")
            } else {
                index.updateDocuments(jsonString, "id")
            }
        } catch (e: Exception) {
            logger.error("save catalogue error", e)
        }
    }


    suspend fun search(
        query: String? = null,
        language: Match<String>? = null,
        accessRights: Match<String>? = null,
        catalogueIds: Match<String>? = null,
        type: Match<String>? = null,
        themeIds: Match<String>? = null,
        licenseId: Match<String>? = null,
        creatorOrganizationId: Match<OrganizationId>? = null,
        availableLanguages: Match<Language>? = null,
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ): FacetPage<CatalogueModel> = withContext(Dispatchers.IO) {
        try {
            val filters = listOfNotNull(
                match(CatalogueMeiliSearchField.LANGUAGE, language),
                match(CatalogueMeiliSearchField.ACCESS_RIGHTS, accessRights),
                match(CatalogueMeiliSearchField.CHILDREN_CATALOGUE_IDS, catalogueIds),
                match(CatalogueMeiliSearchField.TYPE, type),
                match(CatalogueMeiliSearchField.THEME_IDS, themeIds),
                match(CatalogueMeiliSearchField.LICENSE_ID, licenseId),
                match(CatalogueMeiliSearchField.CREATOR_ORGANIZATION_ID, creatorOrganizationId),
                match(CatalogueMeiliSearchField.AVAILABLE_LANGUAGES, availableLanguages),
                criterion(freeCriterion)
            )

            val searchRequest = SearchRequest.builder()
                .q(query)
                .offset(page?.offset ?: 0)
                .limit(page?.limit ?: 0)
                .facets(
                    arrayOf(
                        CatalogueModel::licenseId.name,
                        CatalogueModel::accessRights.name,
                        CatalogueModel::themeIds.name,
                        CatalogueModel::childrenCatalogueIds.name,
                        CatalogueModel::type.name
                    )
                ).filter(filters.toTypedArray())
                .build()
            val searchResult = index.search(searchRequest) as SearchResult
            val distribution = searchResult.facetDistribution as Map<String, Map<String, Int>>
            val hits = searchResult.hits.map { hit ->
                objectMapper.convertValue(hit, CatalogueModel::class.java)
            }
            FacetPage(
                total = searchResult.estimatedTotalHits,
                items = hits,
                distribution = distribution
            )
        } catch (e: Exception) {
            logger.error("Error searching", e)
            throw e
        }
    }
}
