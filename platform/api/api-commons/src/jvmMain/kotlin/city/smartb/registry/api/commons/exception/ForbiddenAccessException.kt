package city.smartb.registry.api.commons.exception

import f2.dsl.cqrs.error.F2Error
import f2.dsl.cqrs.exception.F2Exception
import org.springframework.http.HttpStatus

class ForbiddenAccessException(
    action: String
): F2Exception(
    F2Error(
        code = HttpStatus.FORBIDDEN.value(),
        message = "You are not authorized to $action",
    ),
    cause = null
)
