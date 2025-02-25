package io.komune.registry.program.s2.catalogue.api.entity

import com.fasterxml.jackson.databind.ObjectMapper
import com.meilisearch.sdk.Index
import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.model.SearchResult
import f2.dsl.cqrs.filter.ExactMatch
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.mapAsync
import io.komune.registry.api.config.search.SearchProperties
import io.komune.registry.infra.meilisearch.config.MeiliSearchSnapRepository
import io.komune.registry.infra.meilisearch.config.criterion
import io.komune.registry.infra.meilisearch.config.match
import io.komune.registry.program.s2.catalogue.api.CatalogueModelI18nService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
import io.komune.registry.s2.catalogue.domain.model.CatalogueMeiliSearchField
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetPage
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftMeiliSearchField
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftSearchableEntity
import io.komune.registry.s2.commons.model.Criterion
import io.komune.registry.s2.commons.model.Location
import io.komune.registry.s2.commons.model.MeiliIndex
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
    private val catalogueDraftIndex: Index by lazy { meiliClient.index(MeiliIndex.CATALOGUE_DRAFTS) }
    private val indexedCatalogueTypes: List<String> = searchProperties.indexedCatalogue()

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

    suspend fun save(entity: CatalogueEntity) {
        if (entity.status == CatalogueState.DELETED) {
            remove(entity.id)
            return
        }

        updateDraft(entity)

        if (!entity.type.contains("translation")) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}]")
            return
        }

        val domain = catalogueI18nService.rebuildModel(entity)

        if (domain == null) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}]")
            return
        }
        if (domain.hidden) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}] is hidden")
            return
        }
        if (!indexedCatalogueTypes.contains(domain.type)) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}] is not contained in ${searchProperties.indexedCatalogue}")
            return
        }

        logger.info("Index catalogue[${domain.id}, ${domain.identifier}], type: ${domain.type}")
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

    private suspend fun updateDraft(catalogue: CatalogueEntity) {
        try {
            val filters = arrayOf(
                match(CatalogueDraftMeiliSearchField.CATALOGUE_ID, ExactMatch(catalogue.id)),
            )

            val searchRequest = SearchRequest.builder()
                .filterArray(arrayOf(filters))
                .build()

            val searchResult = catalogueDraftIndex.search(searchRequest) as SearchResult

            searchResult.hits.mapAsync { draft ->
                val draftEntity = objectMapper.convertValue(draft, CatalogueDraftSearchableEntity::class.java)
                val updatedDraft = draftEntity.copy(
                    title = catalogue.title,
                    modified = System.currentTimeMillis()
                )

                if (draftEntity.title == updatedDraft.title) {
                    return@mapAsync
                }

                val jsonString = objectMapper.writeValueAsString(listOf(updatedDraft))
                catalogueDraftIndex.updateDocuments(jsonString, "id")
            }

        } catch (e: Exception) {
            logger.error("Failed to update draft", e)
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
        freeCriterion: Criterion? = null,
        page: OffsetPagination? = null
    ): FacetPage<CatalogueModel> = withContext(Dispatchers.IO) {
        try {
            val filters = listOfNotNull(
                match(CatalogueMeiliSearchField.LANGUAGE, language),
                match(CatalogueMeiliSearchField.ACCESS_RIGHTS, accessRights),
                match(CatalogueMeiliSearchField.CATALOGUE_IDS, catalogueIds),
                match(CatalogueMeiliSearchField.TYPE, type),
                match(CatalogueMeiliSearchField.THEME_IDS, themeIds),
                match(CatalogueMeiliSearchField.LICENSE_ID, licenseId),
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
                        CatalogueModel::catalogueIds.name,
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
