package io.komune.registry.s2.catalogue.draft.api.entity

import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.model.SearchResult
import f2.dsl.cqrs.filter.Match
import f2.dsl.cqrs.page.OffsetPagination
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.api.commons.utils.toJson
import io.komune.registry.infra.meilisearch.MeiliSearchSnapRepository
import io.komune.registry.infra.meilisearch.match
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftMeiliSearchField
import io.komune.registry.s2.catalogue.draft.domain.model.CatalogueDraftSearchableEntity
import io.komune.registry.s2.commons.model.CatalogueId
import io.komune.registry.s2.commons.model.FacetPageModel
import io.komune.registry.s2.commons.model.MeiliIndex
import io.komune.registry.s2.commons.model.UserId
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.springframework.stereotype.Service
import kotlin.reflect.KCallable

@Service
class CatalogueDraftSnapMeiliSearchRepository : MeiliSearchSnapRepository<CatalogueDraftSearchableEntity>(
    MeiliIndex.CATALOGUE_DRAFTS,
    CatalogueDraftSearchableEntity::class,
) {

    override val searchableAttributes = arrayOf(
        CatalogueDraftSearchableEntity::originalCatalogueIdentifier.name,
        CatalogueDraftSearchableEntity::title.name
    )

    override val filterableAttributes = CatalogueDraftMeiliSearchField.entries
        .map(CatalogueDraftMeiliSearchField::identifier)
        .toTypedArray()

    override val sortableAttributes = arrayOf(
        CatalogueDraftSearchableEntity::modified.name
    )

    suspend fun save(entity: CatalogueDraftEntity) {
        if (entity.parentId != null) {
            return
        }

        if (entity.deleted) {
            logger.info("CatalogueDraft[${entity.id}, deleted] -  Skip indexing")
            remove(entity.id)
            return
        }

        try {
            val existingDraft = get(entity.id)
            logger.info("CatalogueDraft[${entity.id}] - indexing...")
            if (existingDraft == null) {
                val document = CatalogueDraftSearchableEntity(
                    id = entity.id,
                    catalogueId = entity.catalogueId,
                    originalCatalogueId = entity.originalCatalogueId,
                    originalCatalogueIdentifier = entity.originalCatalogueIdentifier,
                    type = entity.originalCatalogueType,
                    language = entity.language,
                    title = entity.title,
                    creatorId = entity.creatorId,
                    status = entity.status,
                    modified = System.currentTimeMillis()
                )

                index.addDocuments(listOf(document).toJson(), "id")
                logger.info("CatalogueDraft[${entity.id}] - index created")
                return
            } else {
                val updatedDraft = existingDraft.copy(
                    status = entity.status,
                    title = entity.title,
                    modified = System.currentTimeMillis()
                )
                index.updateDocuments(listOf(updatedDraft).toJson(), "id")
                logger.info("CatalogueDraft[${entity.id}] - index updated")
                return
            }
        } catch (e: Exception) {
            logger.error("save catalogue error", e)
        }
    }

    suspend fun search(
        query: String? = null,
        catalogueId: Match<CatalogueId>? = null,
        originalCatalogueId: Match<CatalogueId>? = null,
        type: Match<String>? = null,
        language: Match<String>? = null,
        status: Match<CatalogueDraftState>? = null,
        creatorId: Match<UserId>? = null,
        offset: OffsetPagination? = null
    ): FacetPageModel<CatalogueDraftSearchableEntity> = withContext(Dispatchers.IO) {
        try {
            val filters = listOfNotNull(
                match(CatalogueDraftMeiliSearchField.CATALOGUE_ID, catalogueId),
                match(CatalogueDraftMeiliSearchField.ORIGINAL_CATALOGUE_ID, originalCatalogueId),
                match(CatalogueDraftMeiliSearchField.TYPE, type),
                match(CatalogueDraftMeiliSearchField.LANGUAGE, language),
                match(CatalogueDraftMeiliSearchField.STATUS, status),
                match(CatalogueDraftMeiliSearchField.CREATOR_ID, creatorId)
            )

            val searchRequest = SearchRequest.builder()
                .q(query)
                .offset(offset?.offset)
                .limit(offset?.limit)
                .filter(filters.toTypedArray())
                .sort(arrayOf(sortField(CatalogueDraftSearchableEntity::modified, false)))
                .build()

            val searchResult = index.search(searchRequest) as SearchResult
            val distribution = searchResult.facetDistribution as Map<String, Map<String, Int>>?
            val hits = searchResult.hits.map { hit ->
                jsonMapper.convertValue(hit, CatalogueDraftSearchableEntity::class.java)
            }
            FacetPageModel(
                total = searchResult.estimatedTotalHits,
                items = hits,
                distribution = distribution.orEmpty()
            )
        } catch (e: Exception) {
            logger.error("Error searching", e)
            throw e
        }
    }

    private fun sortField(field: KCallable<*>, ascending: Boolean): String {
        return "${field.name}:${if (ascending) "asc" else "desc"}"
    }
}
