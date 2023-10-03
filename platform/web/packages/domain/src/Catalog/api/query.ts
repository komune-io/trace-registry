import { QueryParams, useAuthenticatedRequest, useQueryRequest } from "@smartb/g2"
import {city} from "registry-catalogue-f2-domain"

export interface CatalogueGetQuery extends city.smartb.registry.f2.catalogue.domain.query.CatalogueGetQueryDTO {}

export interface CatalogueGetResult extends city.smartb.registry.f2.catalogue.domain.query.CatalogueGetResultDTO {}

export const useCatalogueGetQuery = (params: QueryParams<CatalogueGetQuery, CatalogueGetResult>) => {
    const requestProps = useAuthenticatedRequest()
    return useQueryRequest<CatalogueGetQuery, CatalogueGetResult>(
      "catalogueGet", requestProps, params
    )
}

export interface CataloguePageQuery extends city.smartb.registry.f2.catalogue.domain.query.CataloguePageQueryDTO {}

export interface CataloguePageResult extends city.smartb.registry.f2.catalogue.domain.query.CataloguePageResultDTO {}

export const useCataloguePageQuery = (params: QueryParams<CataloguePageQuery, CataloguePageResult>) => {
    const requestProps = useAuthenticatedRequest()
    return useQueryRequest<CataloguePageQuery, CataloguePageResult>(
      "cataloguePage", requestProps, params
    )
}
