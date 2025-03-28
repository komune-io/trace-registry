import {QueryParams, useQueryRequest} from "@komune-io/g2-utils"
import {io} from "registry-platform-api-api-js-export";
import {useNoAuthenticatedRequest} from "@komune-io/g2";

export interface AssetTransactionPageQuery extends io.komune.registry.f2.asset.pool.domain.query.AssetTransactionPageQueryDTO { }
export interface AssetTransactionPageResult extends io.komune.registry.f2.asset.pool.domain.query.AssetTransactionPageResultDTO { }

export const useAssetTransactionPage = (params: QueryParams<AssetTransactionPageQuery, AssetTransactionPageResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetTransactionPageQuery, AssetTransactionPageResult>(
        "project/assetTransactionPage", requestProps, params
    )
}


export interface AssetGetQuery extends io.komune.registry.f2.asset.pool.domain.query.AssetStatsGetQueryDTO { }
export interface AssetGetResult extends io.komune.registry.f2.asset.pool.domain.query.AssetStatsGetResultDTO { }

export const useAssetGetQuery = (params: QueryParams<AssetGetQuery, AssetGetResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetGetQuery, AssetGetResult>(
        "project/assetStatsGet", requestProps, params
    )
}
export interface AssetTransactionGetQuery extends io.komune.registry.f2.asset.pool.domain.query.AssetTransactionGetQueryDTO { }
export interface AssetTransactionGetResult extends io.komune.registry.f2.asset.pool.domain.query.AssetTransactionGetResultDTO { }

export const useAssetTransactionGetQuery = (params: QueryParams<AssetTransactionGetQuery, AssetTransactionGetResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetTransactionGetQuery, AssetTransactionGetResult>(
        "project/assetTransactionGet", requestProps, params
    )
}

