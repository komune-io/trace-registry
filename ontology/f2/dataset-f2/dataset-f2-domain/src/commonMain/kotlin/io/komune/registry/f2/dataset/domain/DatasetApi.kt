package io.komune.registry.f2.dataset.domain

import DatasetCommandApi
import io.komune.registry.f2.dataset.domain.DatasetQueryApi

/**
 * @d2 api
 * @parent [D2DatasetF2Page]
 */
interface DatasetApi: DatasetCommandApi, DatasetQueryApi
