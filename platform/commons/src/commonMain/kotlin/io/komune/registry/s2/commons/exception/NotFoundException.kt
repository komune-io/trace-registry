package io.komune.registry.s2.commons.exception

import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import io.ktor.http.HttpStatusCode

class NotFoundException(
    val name: String,
    val id: String
): F2Exception(
    error = F2Error(
        code = HttpStatusCode.NotFound.value,
        message = "$name [$id] not found",
    ),
    cause = null
)
