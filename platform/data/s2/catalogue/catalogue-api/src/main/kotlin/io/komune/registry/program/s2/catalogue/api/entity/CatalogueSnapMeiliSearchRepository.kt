package io.komune.registry.program.s2.catalogue.api.entity

import com.fasterxml.jackson.databind.ObjectMapper
import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Index
import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.exceptions.MeilisearchApiException
import com.meilisearch.sdk.model.SearchResult
import com.meilisearch.sdk.model.Settings
import f2.dsl.cqrs.page.OffsetPagination
//import io.komune.registry.program.s2.catalogue.api.CatalogueModelI18nService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.model.CatalogueModel
import io.komune.registry.s2.catalogue.domain.model.FacetPage
import kotlin.reflect.KCallable
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Service

@Service
class CatalogueSnapMeiliSearchRepository(
    private val objectMapper: ObjectMapper,
//    private val catalogueI18nService: CatalogueModelI18nService,
    meiliClient: Client,
) {
    private val logger = LoggerFactory.getLogger(javaClass)
    private val index: Index = meiliClient.index("catalogues")

    init {
        try {
            val settings = Settings().apply {
                filterableAttributes = arrayOf(
                    CatalogueEntity::accessRights.name,
                    CatalogueEntity::themeIds.name,
                    CatalogueEntity::catalogueIds.name,
                    CatalogueEntity::type.name,
                    CatalogueEntity::language.name
                )

            }
            index.updateSettings(settings)
        } catch (e: Exception) {
            logger.error("Failed to load catalogue settings", e)
        }
    }

    suspend fun get(id: CatalogueId): CatalogueModel? = withContext(Dispatchers.IO) {
        try {
            index.getDocument(id.prepareId(), CatalogueModel::class.java).restoreId()
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
        val domain = entity.toModel()
//        val domain = catalogueI18nService.translate(entity.toModel(), entity.language, true)
        if (domain == null) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}]")
            return@withContext;
        }
        val entityWithId = domain.prepareId()
        if(entity.type == "menu") {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}]")
            return@withContext;
        }
        if(entity.identifier.contains("menu-")) {
            logger.info("Skip catalogue: $entity, [identifier: ${entity.identifier}] contains menu-")
            return@withContext;
        }
        if( entity.language == null) {
            logger.info("Skip catalogue: $entity, [language is null]")
            return@withContext;
        }
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

    suspend fun searchFilters(
        language: String,
        query: String?,

        accessRights: List<String>?,
        catalogueIds: List<String>?,
        parentIdentifier: List<String>?,
        type: List<String>?,
        themeIds: List<String>?,
        licenseId: List<String>?,

        page: OffsetPagination? = null
    ): FacetPage<CatalogueModel> =
        withContext(Dispatchers.IO) {
            try {
//                 "filter": [
//                [
//                    "\"categories\"=\"Single-player\""
//                ],
//                [
//                    "\"genres\"=\"Action\"",
//                    "\"genres\"=\"Indie\""
//                ]
//            ],

                val filters = buildList {
                    searchFilter(CatalogueEntity::language.name, language).let { add(it) }

                    searchFilters(CatalogueEntity::accessRights, accessRights)?.let { add(it) }
                    searchFilters(CatalogueEntity::catalogueIds, catalogueIds)?.let { add(it) }
                    searchFilters(CatalogueEntity::themeIds, themeIds)?.let { add(it) }
                    searchFilters(CatalogueEntity::type, type)?.let { add(it) }
                }

                val searchRequest = SearchRequest.builder()
                    .q(query)
                    .offset(page?.offset ?: 0)
                    .limit(page?.limit ?: 0)
                    .facets(
                        arrayOf(
                            CatalogueEntity::accessRights.name,
                            CatalogueEntity::themeIds.name,
                            CatalogueEntity::catalogueIds.name,
                            CatalogueEntity::type.name
                        )
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

    private fun searchFilters(field: KCallable<*>, values: List<String>?): Array<String>? {
        return values?.let { values.map { "${field.name}=\"$it\"" }.toTypedArray() }
    }
    private fun searchFilter(field: String, value: String): Array<String> {
        return arrayOf("$field=\"$value\"")
    }

    fun CatalogueModel.prepareId() = copy(id = id.prepareId())
    fun CatalogueId.prepareId() = replace(":", "_")

    fun CatalogueModel.restoreId() = copy(id = id.restoreId())
    fun CatalogueId.restoreId() = replace("_", ":")
}
