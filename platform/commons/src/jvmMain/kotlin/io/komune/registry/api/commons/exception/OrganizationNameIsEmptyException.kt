package io.komune.registry.api.commons.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class OrganizationNameIsEmptyException : F2HttpException(
    status = HttpStatus.CONFLICT,
    code = ExceptionCodes.User.EMPTY_ORGANIZATION_NAME,
    message = "Organization name is empty",
    cause = null
)
