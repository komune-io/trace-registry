package io.komune.registry.f2.dataset.api.exception

import f2.spring.exception.F2HttpException
import io.komune.registry.s2.catalogue.domain.command.DatasetId
import io.komune.registry.s2.commons.exception.ExceptionCodes
import io.komune.registry.s2.commons.model.CatalogueDraftId
import org.springframework.http.HttpStatus

class DatasetDraftInvalidException(
    draftId: CatalogueDraftId,
    datasetId: DatasetId,
) : F2HttpException(
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    code = ExceptionCodes.Dataset.DRAFT_DOES_NOT_MATCH,
    message = "Draft [$draftId] does not contain the requested dataset [$datasetId]",
    cause = null
)
