package io.komune.registry.s2.catalogue.draft.api.entity

import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Index
import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.exceptions.MeilisearchApiException
import com.meilisearch.sdk.model.SearchResult
import com.meilisearch.sdk.model.Settings
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.program.s2.catalogue.api.CatalogueFinderService
import io.komune.registry.s2.catalogue.domain.model.FacetPage
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftSearchableEntity
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.MeiliIndex
import io.komune.registry.s2.commons.model.UserId
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.springframework.stereotype.Service
import s2.spring.utils.logger.Logger
import kotlin.reflect.KCallable

@Service
class CatalogueDraftSnapMeiliSearchRepository(
    private val catalogueFinderService: CatalogueFinderService,
    meiliClient: Client,
) {
    private val logger by Logger()
    private val index: Index = meiliClient.index(MeiliIndex.CATALOGUE_DRAFTS)

    init {
        try {
            val settings = Settings().apply {
                searchableAttributes = arrayOf(
                    CatalogueDraftSearchableEntity::originalCatalogueIdentifier.name,
                    CatalogueDraftSearchableEntity::title.name
                )
                filterableAttributes = arrayOf(
                    CatalogueDraftSearchableEntity::catalogueId.name,
                    CatalogueDraftSearchableEntity::originalCatalogueId.name,
                    CatalogueDraftSearchableEntity::type.name,
                    CatalogueDraftSearchableEntity::language.name,
                    CatalogueDraftSearchableEntity::status.name,
                    CatalogueDraftSearchableEntity::creatorId.name
                )
                sortableAttributes = arrayOf(
                    CatalogueDraftSearchableEntity::modified.name
                )
            }

            index.updateSettings(settings)
        } catch (e: Exception) {
            logger.error("Failed to load catalogue settings", e)
        }
    }

    suspend fun get(id: CatalogueId): CatalogueDraftSearchableEntity? = withContext(Dispatchers.IO) {
        try {
            index.getDocument(id, CatalogueDraftSearchableEntity::class.java)
        } catch (e: MeilisearchApiException) {
            if (e.code == "document_not_found") {
                null
            } else {
                logger.error("Failed to load catalogue draft", e)
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
            logger.error("Failed to remove catalogue draft", e)
            false
        }
    }

    suspend fun save(entity: CatalogueDraftEntity) = withContext(Dispatchers.IO) {
        if (entity.deleted) {
            remove(entity.id)
            return@withContext
        }

        try {
            val existingDraft = get(entity.id)

            if (existingDraft == null) {
                val draftedCatalogue = catalogueFinderService.get(entity.catalogueId)
                val originalCatalogue = catalogueFinderService.get(entity.originalCatalogueId)

                val document = CatalogueDraftSearchableEntity(
                    id = entity.id,
                    catalogueId = entity.catalogueId,
                    originalCatalogueId = originalCatalogue.id,
                    originalCatalogueIdentifier = originalCatalogue.identifier,
                    type = originalCatalogue.type,
                    language = entity.language,
                    title = draftedCatalogue.title,
                    creatorId = entity.creatorId,
                    status = entity.status,
                    modified = System.currentTimeMillis()
                )

                index.addDocuments(listOf(document).toJson(), "id")
                return@withContext
            }
            val updatedDraft = existingDraft.copy(
                status = entity.status,
                modified = System.currentTimeMillis()
            )
            index.updateDocuments(listOf(updatedDraft).toJson(), "id")

        } catch (e: Exception) {
            logger.error("save catalogue error", e)
        }
    }

    suspend fun search(
        query: String? = null,
        catalogueIds: List<CatalogueId>? = null,
        originalCatalogueIds: List<CatalogueId>? = null,
        types: List<String>? = null,
        languages: List<String>? = null,
        statuses: List<CatalogueDraftState>? = null,
        creatorIds: List<UserId>? = null,
        offset: OffsetPagination? = null
    ): FacetPage<CatalogueDraftSearchableEntity> = withContext(Dispatchers.IO) {
        try {
            val filters = buildList {
                addSearchFilters(CatalogueDraftSearchableEntity::catalogueId, catalogueIds)
                addSearchFilters(CatalogueDraftSearchableEntity::originalCatalogueId, originalCatalogueIds)
                addSearchFilters(CatalogueDraftSearchableEntity::type, types)
                addSearchFilters(CatalogueDraftSearchableEntity::language, languages)
                addSearchFilters(CatalogueDraftSearchableEntity::status, statuses?.map { it.name })
                addSearchFilters(CatalogueDraftSearchableEntity::creatorId, creatorIds)
            }

            val searchRequest = SearchRequest.builder()
                .q(query)
                .offset(offset?.offset)
                .limit(offset?.limit)
                .filterArray(filters.toTypedArray())
                .sort(arrayOf(sortField(CatalogueDraftSearchableEntity::modified, false)))
                .build()

            val searchResult = index.search(searchRequest) as SearchResult
            val distribution = searchResult.facetDistribution as Map<String, Map<String, Int>>?
            val hits = searchResult.hits.map { hit ->
                jsonMapper.convertValue(hit, CatalogueDraftSearchableEntity::class.java)
            }
            FacetPage(
                total = searchResult.estimatedTotalHits,
                items = hits,
                distribution = distribution.orEmpty()
            )
        } catch (e: Exception) {
            logger.error("Error searching", e)
            throw e
        }
    }

    private fun MutableList<Array<String>>.addSearchFilters(field: KCallable<*>, values: List<String>?) {
        values?.let { values.map { "${field.name}=\"$it\"" }.toTypedArray() }?.let { add(it) }
    }

    private fun sortField(field: KCallable<*>, ascending: Boolean): String {
        return "${field.name}:${if (ascending) "asc" else "desc"}"
    }
}
