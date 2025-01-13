package io.komune.registry.f2.dataset.domain

import io.komune.registry.f2.dataset.domain.query.DatasetDataFunction
import io.komune.registry.f2.dataset.domain.query.DatasetGetFunction
import io.komune.registry.f2.dataset.domain.query.DatasetPageFunction
import io.komune.registry.f2.dataset.domain.query.DatasetRefListFunction

interface DatasetQueryApi {
    /** Get a page of dataset */
    fun datasetPage(): DatasetPageFunction
    fun datasetGet(): DatasetGetFunction
    fun datasetRefList(): DatasetRefListFunction
    fun datasetData(): DatasetDataFunction

}
