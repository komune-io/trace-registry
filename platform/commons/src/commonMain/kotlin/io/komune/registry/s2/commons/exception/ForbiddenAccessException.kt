package io.komune.registry.s2.commons.exception

import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import io.ktor.http.HttpStatusCode

class ForbiddenAccessException(
    action: String
): F2Exception(
    F2Error(
        code = HttpStatusCode.Forbidden.value,
        message = "You are not authorized to $action",
    ),
    cause = null
)
