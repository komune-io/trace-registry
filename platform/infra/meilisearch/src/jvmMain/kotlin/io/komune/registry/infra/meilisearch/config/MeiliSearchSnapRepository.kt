package io.komune.registry.infra.meilisearch.config

import com.meilisearch.sdk.Client
import com.meilisearch.sdk.Index
import com.meilisearch.sdk.exceptions.MeilisearchApiException
import com.meilisearch.sdk.model.Settings
import org.springframework.beans.factory.InitializingBean
import org.springframework.beans.factory.annotation.Autowired
import s2.spring.utils.logger.Logger
import kotlin.reflect.KClass
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

abstract class MeiliSearchSnapRepository<Entity: Any>(
    protected val indexName: String,
    protected val entityClass: KClass<Entity>,
) : InitializingBean {

    @Autowired
    protected lateinit var meiliClient: Client

    protected val logger by Logger()

    protected val index: Index by lazy { meiliClient.index(indexName) }

    abstract val searchableAttributes: Array<String>
    abstract val filterableAttributes: Array<String>
    abstract val sortableAttributes: Array<String>

    override fun afterPropertiesSet() {
        try {
            val settings = Settings().also {
                it.searchableAttributes = searchableAttributes
                it.filterableAttributes = filterableAttributes
                it.sortableAttributes = sortableAttributes
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
}
