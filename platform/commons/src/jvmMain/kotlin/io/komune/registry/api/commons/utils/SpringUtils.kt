package io.komune.registry.api.commons.utils

import com.fasterxml.jackson.core.JsonProcessingException
import com.fasterxml.jackson.databind.JsonMappingException
import kotlinx.coroutines.reactive.awaitSingle
import org.springframework.http.HttpStatus
import org.springframework.http.codec.multipart.FilePart
import org.springframework.http.codec.multipart.Part
import org.springframework.util.MultiValueMap
import org.springframework.web.client.HttpClientErrorException

suspend inline fun <reified R> MultiValueMap<String, Part>.extractCommandPart(partName: String = "command"): R = try {
    this[partName]!!.first()
        .content()
        .awaitSingle()
        .asInputStream()
        .readAllBytes()
        .let(::String)
        .parseJsonTo<R>()
} catch (_: NullPointerException) {
    throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing command part")
} catch (_: NoSuchElementException) {
    throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing command part")
} catch (e: JsonProcessingException) {
    throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Invalid command part: ${e.message}")
} catch (e: JsonMappingException) {
    throw HttpClientErrorException(HttpStatus.BAD_REQUEST, "Invalid command part: ${e.message}")
}

fun MultiValueMap<String, Part>.extractFileParts(excludeKeys: Collection<String> = listOf("command")): Map<String, FilePart> {
    @Suppress("UNCHECKED_CAST")
    return mapValues { (key, potentialFiles) ->
        potentialFiles.firstNotNullOfOrNull { it as? FilePart }.takeIf { key !in excludeKeys }
    }.filterValues { file -> file != null } as Map<String, FilePart>
}
