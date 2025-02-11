package io.komune.registry.program.s2.catalogue.api.entity

import com.fasterxml.jackson.databind.ObjectMapper
import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Index
import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.exceptions.MeilisearchApiException
import com.meilisearch.sdk.model.SearchResult
import com.meilisearch.sdk.model.Settings
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.config.search.SearchProperties
import io.komune.registry.program.s2.catalogue.api.CatalogueModelI18nService
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.domain.automate.CatalogueState
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
    private val catalogueI18nService: CatalogueModelI18nService,
    private val searchProperties: SearchProperties,
    meiliClient: Client,
) {
    private val logger = LoggerFactory.getLogger(javaClass)
    private val index: Index = meiliClient.index("catalogues")
    private val indexedCatalogues: List<String> = searchProperties.indexedCatalogue()

    init {
        try {
            val settings = Settings().apply {
                filterableAttributes = arrayOf(
                    CatalogueModel::accessRights.name,
                    CatalogueModel::themeIds.name,
                    CatalogueModel::catalogueIds.name,
                    CatalogueModel::licenseId.name,
                    CatalogueModel::type.name,
                    CatalogueModel::language.name
                )
            }

            index.updateSettings(settings)
        } catch (e: Exception) {
            logger.error("Failed to load catalogue settings", e)
        }
    }

    suspend fun get(id: CatalogueId): CatalogueModel? = withContext(Dispatchers.IO) {
        try {
            index.getDocument(id, CatalogueModel::class.java)
        } catch (e: MeilisearchApiException) {
            if(e.code == "document_not_found") {
                null
            } else {
                logger.error("Failed to load catalogue", e)
                null
            }
        }
        catch (e: Exception) {
            // Bug with kotlin jackson plugin, Meilisearch do not handle MissingKotlinParameterException correctly.
            null
        }
    }

    suspend fun remove(id: CatalogueId): Boolean = withContext(Dispatchers.IO) {
        try {
            index.deleteDocument(id)
            true
        } catch (e: Exception) {
            logger.error("Failed to remove catalogue", e)
            false
        }
    }

    suspend fun save(entity: CatalogueEntity) = withContext(Dispatchers.IO) {
        if(entity.status == CatalogueState.DELETED) {
            remove(entity.id)
            return@withContext
        }
        if(!entity.type.contains("translation")) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}]")
            return@withContext
        }

        val domain = catalogueI18nService.rebuildModel(entity)
        if (domain == null) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}]")
            return@withContext;
        }
        if(domain.hidden) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}] is hidden")
            return@withContext
        }
        if (!indexedCatalogues.contains(domain.type)) {
            logger.info("Skip catalogue: $entity, [type: ${entity.type}] is not contained in ${searchProperties.indexedCatalogue}")
            return@withContext;
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
//            var taskStatus = index.getTask(status.taskUid)
//            while (taskStatus.status == TaskStatus.ENQUEUED || taskStatus.status == TaskStatus.PROCESSING) {
//                delay(100L)  // Wait one second before polling again.
//                taskStatus = index.getTask(status.taskUid)
//                logger.info("Task status: ${taskStatus.status}")
//            }
        } catch (e: Exception) {
            logger.error("save catalogue error", e)
        }
    }

    suspend fun searchFilters(
        language: String,
        query: String?,

        accessRights: List<String>?,
        catalogueIds: List<String>?,
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
                    searchFilter(CatalogueModel::language.name, language).let { add(it) }

                    searchFilters(CatalogueModel::accessRights, accessRights)?.let { add(it) }
                    searchFilters(CatalogueModel::catalogueIds, catalogueIds)?.let { add(it) }
                    searchFilters(CatalogueModel::themeIds, themeIds)?.let { add(it) }
                    searchFilters(CatalogueModel::type, type)?.let { add(it) }
                }

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
                    ).filterArray(filters.toTypedArray())
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

    private fun searchFilters(field: KCallable<*>, values: List<String>?): Array<String>? {
        return values?.let { values.map { "${field.name}=\"$it\"" }.toTypedArray() }
    }
    private fun searchFilter(field: String, value: String): Array<String> {
        return arrayOf("$field=\"$value\"")
    }
}
