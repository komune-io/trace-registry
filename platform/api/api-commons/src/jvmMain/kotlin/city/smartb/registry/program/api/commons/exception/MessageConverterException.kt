package city.smartb.registry.program.api.commons.exception

import com.fasterxml.jackson.databind.JsonMappingException
import com.fasterxml.jackson.databind.exc.MismatchedInputException
import com.fasterxml.jackson.module.kotlin.MissingKotlinParameterException
import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import org.springframework.http.HttpStatus

class MessageConverterException(cause: JsonMappingException): F2Exception(
    error = F2Error(
        code = HttpStatus.BAD_REQUEST.value(),
        message = computeMessage(cause),
    ),
    cause = cause
) {
    companion object {
        private fun computeMessage(exception: JsonMappingException): String {
            return when (exception) {
                is MissingKotlinParameterException -> "Missing parameter `${exception.parameter.name}`"
                is MismatchedInputException -> "Cannot convert parameter `${exception.path.first().fieldName}` " +
                        "to type `${exception.targetType.simpleName}`"
                else -> exception.message.orEmpty()
            }
        }
    }
}
