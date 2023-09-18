package city.smartb.registry.api.commons.exception

import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import org.springframework.http.HttpStatus

class NotFoundException(
    val name: String,
    val id: String
): F2Exception(
    error = F2Error(
        code = HttpStatus.NOT_FOUND.value(),
        message = "$name [$id] not found",
    ),
    cause = null
)
