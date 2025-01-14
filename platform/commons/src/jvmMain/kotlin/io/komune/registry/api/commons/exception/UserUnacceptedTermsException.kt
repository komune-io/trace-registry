package io.komune.registry.api.commons.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class UserUnacceptedTermsException : F2HttpException(
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    code = ExceptionCodes.User.UNACCEPTED_TERMS,
    message = "The user must accept the terms of use and the chart of Objectif100M",
    cause = null
)
