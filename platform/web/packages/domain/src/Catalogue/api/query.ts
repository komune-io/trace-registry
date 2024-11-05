import { QueryParams, useQueryRequest } from "@komune-io/g2"
import {io} from "registry-platform-api-api-js-export";
import { useNoAuthenticatedRequest } from "../../config"

export interface CatalogueGetQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetQueryDTO {}

export interface CatalogueGetResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetResultDTO {}

export const useCatalogueGetQuery = (params: QueryParams<CatalogueGetQuery, CatalogueGetResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueGetQuery, CatalogueGetResult>(
      "catalogueGet", requestProps, params
    )
}

export interface CataloguePageQuery extends io.komune.registry.f2.catalogue.domain.query.CataloguePageQueryDTO {}

export interface CataloguePageResult extends io.komune.registry.f2.catalogue.domain.query.CataloguePageResultDTO {}

export const useCataloguePageQuery = (params: QueryParams<CataloguePageQuery, CataloguePageResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CataloguePageQuery, CataloguePageResult>(
      "cataloguePage", requestProps, params
    )
}


export interface CatalogueRefListQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefListQueryDTO {}

export interface CatalogueRefListResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefListResultDTO {}

export const useCatalogueRefListQuery = (params: QueryParams<CatalogueRefListQuery, CatalogueRefListResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueRefListQuery, CatalogueRefListResult>(
      "catalogueRefList", requestProps, params
    )
}

