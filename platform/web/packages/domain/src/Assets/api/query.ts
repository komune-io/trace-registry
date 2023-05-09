import { QueryParams, useQueryRequest } from "@smartb/g2-utils"
import { city } from "verified-emission-reduction-registry-asset-f2-domain"
import { useNoAuthenticatedRequest } from "../../config"

export interface AssetPageQuery extends city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageQueryDTO { }
export interface AssetPageResult extends city.smartb.registry.program.f2.asset.domain.query.AssetTransactionPageResultDTO { }

export const useAssetPageQuery = (params: QueryParams<AssetPageQuery, AssetPageResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetPageQuery, AssetPageResult>(
        "assetTransactionPage", requestProps, params
    )
}


export interface AssetGetQuery extends city.smartb.registry.program.f2.asset.domain.query.AssetGetStatsQueryDTO { }
export interface AssetGetResult extends city.smartb.registry.program.f2.asset.domain.query.AssetGetStatsResultDTO { }

export const useAssetGetQuery = (params: QueryParams<AssetGetQuery, AssetGetResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<AssetGetQuery, AssetGetResult>(
        "assetGetStats", requestProps, params
    )
}

