package city.smartb.registry.program.api.commons.utils

import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.DeserializationFeature
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import org.springframework.core.io.support.PathMatchingResourcePatternResolver

val jsonMapper = ObjectMapper()
    .enable(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES)
    .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
    .registerKotlinModule()

fun <T> String.parseJsonTo(targetClass: Class<T>): T {
    return this.parseTo(targetClass)
}

fun <T> String.parseJsonTo(targetClass: Class<Array<T>>): List<T> {
    val parsedValue = this.parseTo(targetClass)
    return listOf(*parsedValue)
}

private fun <T> String.parseTo(targetClass: Class<T>): T {
    return jsonMapper.readValue(this, targetClass)
}

fun <T> T.toJson(): String {
    val mapper = ObjectMapper()
        .registerKotlinModule()

    return mapper.writeValueAsString(this)
}

inline fun <reified R: Any> parseFile(path: String): R {
    val file = PathMatchingResourcePatternResolver().getResource(path)
    return jsonMapper.readValue(file.inputStream, R::class.java)
}
