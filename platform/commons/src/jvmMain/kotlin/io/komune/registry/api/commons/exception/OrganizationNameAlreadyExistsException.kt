package io.komune.registry.api.commons.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class OrganizationNameAlreadyExistsException(
    name: String
) : F2HttpException(
    status = HttpStatus.CONFLICT,
    code = ExceptionCodes.User.ORGANIZATION_EXISTS,
    message = "Organization with name [$name] already exists",
    cause = null
)
