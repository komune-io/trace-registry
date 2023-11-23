package city.smartb.registry.f2.dcs.api.validator

import f2.spring.exception.F2HttpException
import org.springframework.http.HttpStatus

data class DcsValidationException(
    val errors: List<DcsValidationError>
): F2HttpException(
    status = HttpStatus.BAD_REQUEST,
    message = errors.joinToString("\n") { error -> error.message },
    cause = null
)
