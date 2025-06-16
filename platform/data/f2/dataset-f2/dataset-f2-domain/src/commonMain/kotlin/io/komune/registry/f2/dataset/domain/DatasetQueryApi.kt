package io.komune.registry.f2.dataset.domain

import io.komune.registry.f2.dataset.domain.query.DatasetDataFunction
import io.komune.registry.f2.dataset.domain.query.DatasetExistsFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGetByIdentifierFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGetFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGraphSearchFunction
import io.komune.registry.f2.dataset.domain.query.DatasetListLanguagesFunction
import io.komune.registry.f2.dataset.domain.query.DatasetPageFunction

interface DatasetQueryApi {
    /** Get a page of dataset */
    fun datasetPage(): DatasetPageFunction
    fun datasetGet(): DatasetGetFunction
    fun datasetGetByIdentifier(): DatasetGetByIdentifierFunction
    fun datasetExists(): DatasetExistsFunction
    fun datasetData(): DatasetDataFunction
    fun datasetListLanguages(): DatasetListLanguagesFunction
    fun datasetGraphSearch(): DatasetGraphSearchFunction
}
