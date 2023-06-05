import {QueryParams, useQueryRequest} from "@smartb/g2-utils"
import {city} from "verified-emission-reduction-registry-asset-f2-domain"
import {useNoAuthenticatedRequest} from "../../config"

export interface AssetTransactionPageQuery extends city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageQueryDTO { }
export interface AssetTransactionPageResult extends city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageResultDTO { }

export const useAssetTransactionPage = (params: QueryParams<AssetTransactionPageQuery, AssetTransactionPageResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetTransactionPageQuery, AssetTransactionPageResult>(
        "assetTransactionPage", requestProps, params
    )
}


export interface AssetGetQuery extends city.smartb.registry.program.f2.asset.domain.query.AssetStatsGetQueryDTO { }
export interface AssetGetResult extends city.smartb.registry.program.f2.asset.domain.query.AssetStatsGetResultDTO { }

export const useAssetGetQuery = (params: QueryParams<AssetGetQuery, AssetGetResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetGetQuery, AssetGetResult>(
        "assetStatsGet", requestProps, params
    )
}
export interface AssetTransactionGetQuery extends city.smartb.registry.program.f2.asset.domain.query.AssetTransactionGetQueryDTO { }
export interface AssetTransactionGetResult extends city.smartb.registry.program.f2.asset.domain.query.AssetTransactionGetResultDTO { }

export const useAssetTransactionGetQuery = (params: QueryParams<AssetTransactionGetQuery, AssetTransactionGetResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetTransactionGetQuery, AssetTransactionGetResult>(
        "assetTransactionGet", requestProps, params
    )
}

