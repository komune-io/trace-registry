package io.komune.registry.f2.catalogue.api.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.catalogue.domain.automate.CatalogueId
import io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftId
import io.komune.registry.s2.commons.exception.ExceptionCodes
import io.komune.registry.s2.commons.model.Language
import org.springframework.http.HttpStatus

class CatalogueDraftInvalidException(
    draftId: CatalogueDraftId,
    catalogueId: CatalogueId,
    language: Language,
) : F2HttpException(
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    code = ExceptionCodes.Catalogue.DRAFT_DOES_NOT_MATCH,
    message = "Draft [$draftId] does not match the requested catalogue [$catalogueId] and language [$language]",
    cause = null
)
