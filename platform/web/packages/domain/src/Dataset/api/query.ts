import { QueryParams, useQueryRequest } from "@komune-io/g2"
import {city} from "registry-dataset-f2-domain"
import { useNoAuthenticatedRequest } from "../../config"

export interface DatasetDataQuery extends io.komune.registry.f2.dataset.domain.query.DatasetDataQueryDTO {}

export interface DatasetDataResult extends io.komune.registry.f2.dataset.domain.query.DatasetDataResultDTO {}

export const useDatasetDataQuery = (params: QueryParams<DatasetDataQuery, DatasetDataResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<DatasetDataQuery, DatasetDataResult>(
      "datasetData", requestProps, params
    )
}
