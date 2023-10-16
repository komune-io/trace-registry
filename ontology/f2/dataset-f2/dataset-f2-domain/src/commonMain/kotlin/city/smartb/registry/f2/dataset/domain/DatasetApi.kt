package city.smartb.registry.f2.dataset.domain

import DatasetCommandApi
import city.smartb.registry.f2.dataset.domain.DatasetQueryApi

/**
 * @d2 api
 * @parent [D2DatasetF2Page]
 */
interface DatasetApi: DatasetCommandApi, DatasetQueryApi
