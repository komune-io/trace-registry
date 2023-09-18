package city.smartb.registry.api.commons.exception

import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import org.springframework.http.HttpStatus

class ConflictException(
    entity: String,
    property: String,
    value: String
): F2Exception(
    F2Error(
        code = HttpStatus.CONFLICT.value(),
        message = "$entity with $property [$value] already exists",
    ),
    cause = null
)
