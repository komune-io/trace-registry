package io.komune.registry.infra.meilisearch

import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Index
import com.meilisearch.sdk.SearchRequest
import com.meilisearch.sdk.exceptions.MeilisearchApiException
import com.meilisearch.sdk.model.Settings
import io.komune.registry.s2.commons.model.Sort
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import org.springframework.beans.factory.InitializingBean
import org.springframework.beans.factory.annotation.Autowired
import s2.spring.utils.logger.Logger
import kotlin.reflect.KClass

abstract class MeiliSearchSnapRepository<Entity: Any>(
    protected val indexName: String,
    protected val entityClass: KClass<Entity>
) : InitializingBean {

    @Autowired
    protected lateinit var meiliClient: Client

    protected val logger by Logger()

    protected val index: Index by lazy { meiliClient.index(indexName) }

    open val distinctAttribute: String? = null
    abstract val searchableAttributes: Array<String>
    abstract val filterableAttributes: Array<String>

    abstract val defaultSortableAttributes: Array<String>
    private val sortableAttributes = mutableSetOf<String>()

    override fun afterPropertiesSet() {
        try {
            val existingSortableAttributes = try {
                index.settings.sortableAttributes
            } catch (_: MeilisearchApiException) {
                emptyArray<String>()
            }
            sortableAttributes.addAll(existingSortableAttributes + defaultSortableAttributes)
            val settings = Settings().also { settings ->
                settings.searchableAttributes = searchableAttributes
                settings.filterableAttributes = filterableAttributes
                settings.sortableAttributes = sortableAttributes.toTypedArray()
                distinctAttribute?.let { settings.distinctAttribute = it }
            }
            index.updateSettings(settings)
        } catch (e: Exception) {
            logger.error("Failed to update settings of index [$indexName]", e)
        }
    }

    open suspend fun get(id: String): Entity? = withContext(Dispatchers.IO) {
        try {
            index.getDocument(id, entityClass.java)
        } catch (e: MeilisearchApiException) {
            if (e.code == "document_not_found") {
                null
            } else {
                logger.error("Failed to load document [$id] from index [$indexName]", e)
                null
            }
        }
        catch (e: Exception) {
            // Bug with kotlin jackson plugin, Meilisearch do not handle MissingKotlinParameterException correctly.
            null
        }
    }

    open suspend fun remove(id: String): Boolean = withContext(Dispatchers.IO) {
        try {
            index.deleteDocument(id)
            true
        } catch (e: Exception) {
            logger.error("Failed to remove document [$id] from index [$indexName]", e)
            false
        }
    }

    protected fun addSortableAttributes(attributes: Collection<String>) {
        val updated = sortableAttributes.addAll(attributes)
        if (updated) {
            index.updateSortableAttributesSettings(sortableAttributes.toTypedArray())
        }
    }

    protected fun <E: Enum<E>> SearchRequest.SearchRequestBuilder.orderBy(
        sort: Collection<Sort<E>>?,
        buildIdentifier: (Sort<E>) -> String
    ): SearchRequest.SearchRequestBuilder {
        if (sort.isNullOrEmpty()) return this

        val sortArray = sort.map {
            "${buildIdentifier(it)}:${if (it.ascending) "asc" else "desc"}"
        }.toTypedArray()

        return sort(sortArray)
    }
}
