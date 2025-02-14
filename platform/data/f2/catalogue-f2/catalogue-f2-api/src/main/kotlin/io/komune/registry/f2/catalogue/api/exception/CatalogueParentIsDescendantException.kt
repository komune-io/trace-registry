package io.komune.registry.f2.catalogue.api.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.commons.exception.ExceptionCodes
import org.springframework.http.HttpStatus

class CatalogueParentIsDescendantException(
    catalogueId: CatalogueId,
    parentId: CatalogueId
) : F2HttpException(
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    code = ExceptionCodes.Catalogue.PARENT_IS_DESCENDANT,
    message = "Catalogue [$parentId] is a descendant of catalogue [$catalogueId] and thus cannot be its parent",
    cause = null
)
