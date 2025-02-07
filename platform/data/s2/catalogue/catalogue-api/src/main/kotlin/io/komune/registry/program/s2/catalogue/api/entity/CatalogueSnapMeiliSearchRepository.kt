package io.komune.registry.program.s2.catalogue.api.entity

import com.fasterxml.jackson.databind.ObjectMapper
import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Config
import com.meilisearch.sdk.Index
import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.exceptions.MeilisearchApiException
import com.meilisearch.sdk.json.JacksonJsonHandler
import com.meilisearch.sdk.model.SearchResult
import com.meilisearch.sdk.model.Settings
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetPage
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service

@Service
class CatalogueSnapMeiliSearchRepository(
    private val objectMapper: ObjectMapper,
    meiliClient: Client,
) {
    private val logger = LoggerFactory.getLogger(javaClass)
    private val index: Index = meiliClient.index("catalogues")

    init {
        try {
            val settings = Settings().apply {
                filterableAttributes = arrayOf("accessRights", "themeIds", "catalogueIds", "type")
            }
            index.updateSettings(settings)
        } catch (e: Exception) {
            logger.error("Failed to load catalogue settings", e)
        }
    }

    suspend fun get(id: CatalogueId): CatalogueEntity? = withContext(Dispatchers.IO) {
        try {
            index.getDocument(id.prepareId(), CatalogueEntity::class.java).restoreId()
        } catch (e: MeilisearchApiException) {
            if(e.code == "document_not_found") {
                null
            } else {
                logger.error("Failed to load catalogue", e)
                null
            }
        }
    }

    suspend fun remove(id: CatalogueId): Boolean = withContext(Dispatchers.IO) {
        try {
            index.deleteDocument(id.prepareId())
            true
        } catch (e: Exception) {
            logger.error("Failed to romove catalogue", e)
            false
        }
    }

    suspend fun save(entity: CatalogueEntity) = withContext(Dispatchers.IO) {
        logger.info("save catalogue: $entity")
        val entityWithId = entity.prepareId()
        try {
            val jsonString = objectMapper.writeValueAsString(listOf(entityWithId))
            val existing = get(entityWithId.id)
            if (existing == null) {
                index.addDocuments(jsonString)
            } else {
                index.updateDocuments(jsonString)
            }
        } catch (e: Exception) {
            logger.error("save catalogue error", e)
        }
    }

    suspend fun search(
        language: String,
        query: String?,

        accessRights: String?,
        catalogueIds: String?,
        parentIdentifier: String?,
        type: String?,
        themeIds: String?,

        page: OffsetPagination? = null
    ): FacetPage<CatalogueModel> =
        withContext(Dispatchers.IO) {
            try {
                val filters = buildList {
                    accessRights?.let {  add(arrayOf("accessRights=\"$accessRights\"")) }
                    catalogueIds?.let {  add(arrayOf("catalogueIds=\"$catalogueIds\"")) }
                    parentIdentifier?.let {  add(arrayOf("parentIdentifier=\"$parentIdentifier\"")) }
                    type?.let {  add(arrayOf("type=\"$type\"")) }
                    themeIds?.let {  add(arrayOf("themeIds=\"$themeIds\"")) }
                }

                val searchRequest = SearchRequest.builder()
                    .q(query)
                    .offset(page?.offset ?: 0)
                    .limit(page?.limit ?: 0)
                    .facets(
                        arrayOf("accessRights", "themeIds", "catalogueIds")
                    ).filterArray(filters.toTypedArray())
                    .build()
                val searchResult = index.search(searchRequest) as SearchResult
                val distribution = searchResult.facetDistribution as Map<String, Map<String, Int>>
                val hits = searchResult.hits.map { hit ->
                    objectMapper.convertValue(hit, CatalogueEntity::class.java).toModel()
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

    fun CatalogueEntity.prepareId() = apply { id = id.prepareId() }
    fun CatalogueId.prepareId() = replace(":", "_")

    fun CatalogueEntity.restoreId() = apply { id = id.restoreId() }
    fun CatalogueId.restoreId() = replace("_", ":")
}
