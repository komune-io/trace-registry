package io.komune.registry.f2.catalogue.api.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class CatalogueParentTypeInvalidException(
    catalogueType: String,
    parentType: String
) : F2HttpException(
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    code = ExceptionCodes.Catalogue.INVALID_PARENT_TYPE,
    message = "Catalogue of type [$catalogueType] cannot have parent of type [$parentType]",
    cause = null
)
