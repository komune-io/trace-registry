package io.komune.registry.api.commons.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class UserEmailAlreadyExistsException(
    email: String
) : F2HttpException(
    status = HttpStatus.CONFLICT,
    code = ExceptionCodes.User.EMAIL_EXISTS,
    message = "User with email [$email] already exists",
    cause = null
)
