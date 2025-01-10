package io.komune.registry.s2.commons.exception

import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import io.ktor.http.HttpStatusCode

class ConflictException(
    entity: String,
    property: String,
    value: String
): F2Exception(
    F2Error(
        code = HttpStatusCode.Conflict.value,
        message = "$entity with $property [$value] already exists",
    ),
    cause = null
)
