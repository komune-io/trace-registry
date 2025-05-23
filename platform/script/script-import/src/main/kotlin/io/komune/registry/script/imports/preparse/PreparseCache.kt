package io.komune.registry.script.imports.preparse

import com.fasterxml.jackson.module.kotlin.readValue
import io.komune.registry.api.commons.utils.jsonMapper
import io.komune.registry.s2.commons.model.Language
import io.komune.registry.script.imports.model.ConceptInitData
import org.apache.tika.mime.MimeTypes
import s2.spring.utils.logger.Logger
import java.io.File
import java.io.IOException
import java.net.HttpURLConnection
import java.net.URL
import java.util.concurrent.ConcurrentHashMap

class PreparseCache(
    private val directory: File
): AutoCloseable {
    private val logger by Logger()

    private val cache: Cache

    companion object {
        private const val CACHE_FILE = "cache.json"
    }

    init {
        if (!directory.exists()) {
            directory.mkdirs()
        }
        if (!directory.isDirectory) {
            throw IllegalArgumentException("Cache directory [$directory] is not a directory")
        }

        val cacheFile = File(directory, CACHE_FILE)
        cache = if (cacheFile.exists()) {
            jsonMapper.readValue<Cache>(cacheFile)
        } else {
            Cache()
        }
    }

    override fun close() {
        val cacheFile = File(directory, CACHE_FILE)
        if (!cacheFile.exists()) {
            cacheFile.createNewFile()
        }
        jsonMapper.writeValue(cacheFile, cache)
    }

    fun downloadFile(url: String): File? {
        if (cache.filesByUrl.containsKey(url)) {
            return File(directory, cache.filesByUrl[url]!!)
        }

        val filename = url.hashCode().toUInt().toString()

        val connection = URL(url).openConnection() as HttpURLConnection
        connection.requestMethod = "GET"

        return try {
            connection.connect()

            val actualFilename = connection.getHeaderField("Content-Type")?.let {
                "${filename.substringBeforeLast(".")}${MimeTypes.getDefaultMimeTypes().forName(it).extension}"
            } ?: filename

            val outputFile = File(directory, actualFilename)
            connection.inputStream.use { input ->
                outputFile.outputStream().use { output ->
                    input.copyTo(output)
                }
            }
            outputFile.also {
                cache.filesByUrl[url] = actualFilename
            }
        } catch (e: IOException) {
            logger.warn("Failed to download file [$url]: ${connection.responseCode} ${connection.responseMessage}")
            null
        } finally {
            connection.disconnect()
        }
    }

    fun saveConcept(id: String, scheme: String, language: Language, name: String): ConceptInitData {
        val key = "$scheme:$id"
        val concept = cache.concepts.getOrPut(key) {
            ConceptInitData(
                identifier = "$scheme-${id.hashCode().toUInt()}",
                prefLabels = emptyMap(),
                definitions = emptyMap(),
                schemes = listOf(scheme)
            )
        }

        return concept.copy(
            prefLabels = concept.prefLabels + (language to name),
        ).also { cache.concepts[key] = it }
    }

    fun savedConcepts(): Collection<ConceptInitData> = cache.concepts.values

    private class Cache {
        val filesByUrl = ConcurrentHashMap<String, String>()
        val concepts = ConcurrentHashMap<String, ConceptInitData>()
    }
}
