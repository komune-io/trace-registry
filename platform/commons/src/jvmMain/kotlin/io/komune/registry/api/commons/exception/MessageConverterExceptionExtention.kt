package io.komune.registry.api.commons.exception

import com.fasterxml.jackson.databind.JsonMappingException
import com.fasterxml.jackson.databind.exc.MismatchedInputException
import com.fasterxml.jackson.module.kotlin.MissingKotlinParameterException
import io.komune.registry.s2.commons.exception.MessageConverterException

fun JsonMappingException.asMessageConverterException(): MessageConverterException {
    val message = when (this) {
        is MissingKotlinParameterException -> "Missing parameter `${parameter.name}`"
        is MismatchedInputException -> "Cannot convert parameter `${path.first().fieldName}` " +
                "to type `${targetType.simpleName}`"
        else -> message.orEmpty()
    }
    return MessageConverterException(message, this)
}
