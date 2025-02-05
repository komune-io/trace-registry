import { QueryParams, useQueryRequest } from "@komune-io/g2"
import { io } from "registry-platform-api-api-js-export";
import { useNoAuthenticatedRequest } from "../../config"

export interface CatalogueGetQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetQueryDTO {}
export interface CatalogueGetResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetResultDTO {}

export const useCatalogueGetQuery = (params: QueryParams<CatalogueGetQuery, CatalogueGetResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueGetQuery, CatalogueGetResult>(
      "data/catalogueGet", requestProps, params
    )
}

export interface CatalogueGetByIdentifier extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQueryDTO {}
export interface CatalogueGetByIdentifierResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierResultDTO {}

export const useCatalogueGetByIdentifierQuery = (params: QueryParams<CatalogueGetByIdentifier, CatalogueGetByIdentifierResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueGetByIdentifier, CatalogueGetByIdentifierResult>(
      "data/catalogueGetByIdentifier", requestProps, params
    )
}

export interface CataloguePageQuery extends io.komune.registry.f2.catalogue.domain.query.CataloguePageQueryDTO {}
export interface CataloguePageResult extends io.komune.registry.f2.catalogue.domain.query.CataloguePageResultDTO {}

export const useCataloguePageQuery = (params: QueryParams<CataloguePageQuery, CataloguePageResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CataloguePageQuery, CataloguePageResult>(
      "data/cataloguePage", requestProps, params
    )
}


export interface CatalogueRefListQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefListQueryDTO {}
export interface CatalogueRefListResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefListResultDTO {}

export const useCatalogueRefListQuery = (params: QueryParams<CatalogueRefListQuery, CatalogueRefListResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueRefListQuery, CatalogueRefListResult>(
      "data/catalogueRefList", requestProps, params
    )
}

export interface CatalogueRefGetTreeQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeQueryDTO {}
export interface CatalogueRefGetTreeResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeResultDTO {}

export const useCatalogueRefGetTreeQuery = (params: QueryParams<CatalogueRefGetTreeQuery, CatalogueRefGetTreeResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueRefGetTreeQuery, CatalogueRefGetTreeResult>(
      "data/catalogueRefGetTree", requestProps, params
    )
}

export interface CatalogueListAvailableParentsQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsQueryDTO {}
export interface CatalogueListAvailableParentsResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsResultDTO {}

export const useCatalogueListAvailableParentsQuery = (params: QueryParams<CatalogueListAvailableParentsQuery, CatalogueListAvailableParentsResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueListAvailableParentsQuery, CatalogueListAvailableParentsResult>(
      "data/catalogueListAvailableParents", requestProps, params
    )
}

export interface CatalogueListAvailableThemesQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesQueryDTO {}
export interface CatalogueListAvailableParentsResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsResultDTO {}

export const useCatalogueListAvailableThemesQuery = (params: QueryParams<CatalogueListAvailableThemesQuery, CatalogueListAvailableParentsResult>) => {
    const requestProps = useNoAuthenticatedRequest()
    return useQueryRequest<CatalogueListAvailableThemesQuery, CatalogueListAvailableParentsResult>(
      "data/catalogueListAvailableThemes", requestProps, params
    )
}

