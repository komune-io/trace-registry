package io.komune.registry.s2.commons.exception

import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import io.ktor.http.HttpStatusCode

class MessageConverterException(message: String, cause: Throwable): F2Exception(
    error = F2Error(
        code = HttpStatusCode.BadRequest.value,
        message = message,
    ),
    cause = cause
)
