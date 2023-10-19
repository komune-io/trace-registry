package city.smartb.registry.f2.dataset.domain

import city.smartb.registry.f2.dataset.domain.query.DatasetDataFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetGetFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetPageFunction
import city.smartb.registry.f2.dataset.domain.query.DatasetRefListFunction

interface DatasetQueryApi {
    /** Get a page of dataset */
    fun datasetPage(): DatasetPageFunction
    fun datasetGet(): DatasetGetFunction
    fun datasetRefList(): DatasetRefListFunction
    fun datasetData(): DatasetDataFunction

}
