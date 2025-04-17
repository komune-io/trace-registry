import { QueryParams, useAuthenticatedRequest, useQueryRequest } from "@komune-io/g2"
import { CatalogueSearchQuery, CatalogueSearchResult } from "domain-components"
import { io } from "registry-platform-api-api-js-export"

export interface CatalogueRefSearchQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchQueryDTO { }
export interface CatalogueRefSearchResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchResultDTO { }

export const useCatalogueRefSearchQuery = (params: QueryParams<CatalogueRefSearchQuery, CatalogueRefSearchResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueSearchQuery, CatalogueSearchResult>(
    "data/catalogueRefSearch", requestProps, params
  )
}
