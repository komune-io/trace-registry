import { QueryParams, useNoAuthenticatedRequest, useQueryRequest } from "@komune-io/g2"
import { io } from "registry-platform-api-api-js-export";

export interface DatasetDataQuery extends io.komune.registry.f2.dataset.domain.query.DatasetDataQueryDTO {}

export interface DatasetDataResult extends io.komune.registry.f2.dataset.domain.query.DatasetDataResultDTO {}

export const useDatasetDataQuery = (params: QueryParams<DatasetDataQuery, DatasetDataResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<DatasetDataQuery, DatasetDataResult>(
      "data/datasetData", requestProps, params
    )
}

export interface DatasetGraphSearchQuery extends io.komune.registry.f2.dataset.domain.query.DatasetGraphSearchQueryDTO {}
export interface DatasetGraphSearchResult extends io.komune.registry.f2.dataset.domain.query.DatasetGraphSearchResultDTO {}

export const useDatasetGraphSearchQuery = (params: QueryParams<DatasetGraphSearchQuery, DatasetGraphSearchResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<DatasetGraphSearchQuery, DatasetGraphSearchResult>(
      "data/datasetGraphSearch", requestProps, params
    )
}


