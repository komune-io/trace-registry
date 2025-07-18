import {g2Config, QueryParams, request, useAuthenticatedRequest, useQueryRequest, useQueryRequestArray} from "@komune-io/g2"
import {io} from "registry-platform-api-api-js-export";
import {useCallback} from "react";
import {useQuery} from "@tanstack/react-query";

export interface CatalogueGetQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetQueryDTO { }
export interface CatalogueGetResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetResultDTO { }

export const useCatalogueGetQuery = (params: QueryParams<CatalogueGetQuery, CatalogueGetResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueGetQuery, CatalogueGetResult>(
    "data/catalogueGet", requestProps, params
  )
}

export interface CataloguePageQuery extends io.komune.registry.f2.catalogue.domain.query.CataloguePageQueryDTO { }
export interface CataloguePageResult extends io.komune.registry.f2.catalogue.domain.query.CataloguePageResultDTO { }

export const useCataloguePageQuery = (params: QueryParams<CataloguePageQuery, CataloguePageResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CataloguePageQuery, CataloguePageResult>(
    "data/cataloguePage", requestProps, params
  )
}

export interface FacetDTO extends io.komune.registry.s2.commons.model.FacetDTO { }

export interface CatalogueSearchQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueSearchQueryDTO { }
export interface CatalogueSearchResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueSearchResultDTO { }

export const useCatalogueSearchQuery = (params: QueryParams<CatalogueSearchQuery, CatalogueSearchResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueSearchQuery, CatalogueSearchResult>(
    "data/catalogueSearch", requestProps, params
  )
}

export interface CatalogueRefSearchQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchQueryDTO { }
export interface CatalogueRefSearchResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefSearchResultDTO { }

export const useCatalogueRefSearchQuery = (params: QueryParams<CatalogueRefSearchQuery, CatalogueRefSearchResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueSearchQuery, CatalogueSearchResult>(
    "data/catalogueRefSearch", requestProps, params
  )
}


export interface CatalogueRefGetQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetQueryDTO { }
export interface CatalogueRefGetResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetResultDTO { }

export const useCatalogueRefGetQuery = (params: QueryParams<CatalogueRefGetQuery, CatalogueRefGetResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueRefGetQuery, CatalogueRefGetResult>(
    "data/catalogueRefGet", requestProps, params
  )
}

export interface CatalogueRefGetQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetQueryDTO { }
export interface CatalogueRefGetResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetResultDTO { }

export const useCatalogueRefListQuery = (params: QueryParams<CatalogueRefGetQuery[], CatalogueRefGetResult[]>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequestArray<CatalogueRefGetQuery, CatalogueRefGetResult>(
    "data/catalogueRefGet", requestProps, params
  )
}

export interface CatalogueRefGetTreeQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeQueryDTO { }
export interface CatalogueRefGetTreeResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefGetTreeResultDTO { }

export const useCatalogueRefGetTreeQuery = (params: QueryParams<CatalogueRefGetTreeQuery, CatalogueRefGetTreeResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueRefGetTreeQuery, CatalogueRefGetTreeResult>(
    "data/catalogueRefGetTree", requestProps, params
  )
}

export interface CatalogueListAvailableParentsQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsQueryDTO { }
export interface CatalogueListAvailableParentsResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableParentsResultDTO { }

export const useCatalogueListAvailableParentsQuery = (params: QueryParams<CatalogueListAvailableParentsQuery, CatalogueListAvailableParentsResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueListAvailableParentsQuery, CatalogueListAvailableParentsResult>(
    "data/catalogueListAvailableParents", requestProps, params
  )
}

export interface CatalogueListAvailableThemesQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesQueryDTO { }
export interface CatalogueListAvailableThemesResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableThemesResultDTO { }

export const useCatalogueListAvailableThemesQuery = (params: QueryParams<CatalogueListAvailableThemesQuery, CatalogueListAvailableThemesResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueListAvailableThemesQuery, CatalogueListAvailableThemesResult>(
    "data/catalogueListAvailableThemes", requestProps, params
  )
}

export interface CatalogueListAvailableOwnersQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersQueryDTO { }
export interface CatalogueListAvailableOwnersResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersResultDTO { }

export const useCatalogueListAvailableOwnersQuery = (params: QueryParams<CatalogueListAvailableOwnersQuery, CatalogueListAvailableOwnersResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueListAvailableOwnersQuery, CatalogueListAvailableOwnersResult>(
    "data/catalogueListAvailableOwners", requestProps, params
  )
}

export interface LicenseListQuery extends io.komune.registry.f2.license.domain.query.LicenseListQueryDTO { }
export interface LicenseListResult extends io.komune.registry.f2.license.domain.query.LicenseListResultDTO { }

export const useLicenseListQuery = (params: QueryParams<LicenseListQuery, LicenseListResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<LicenseListQuery, LicenseListResult>(
    "data/licenseList", requestProps, params
  )
}

export const useDownloadDistribution = <T>(returnType: "json" | "text" | "objectUrl" | "blob", datasetId?: string, distributionId?: string) => {
  const distributionContentQuery = useCallback(
    async () => {
      if (!datasetId || !distributionId) return
      const res = await request<T>({
        url: `${g2Config().platform.url}/data/datasetDownloadDistribution/${datasetId}/${distributionId}`,
        method: "GET",
        returnType
        // errorHandler: errorHandler(path),
      });
      return res
    },
    [returnType, datasetId, distributionId],
  )

  return useQuery({
    queryKey: ["data/datasetDownloadDistribution", { id: datasetId, distributionId }],
    queryFn: distributionContentQuery,
    enabled: !!datasetId && !!distributionId
  })
}

export interface CatalogueDraftPageQuery extends io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftPageQueryDTO { }
export interface CatalogueDraftPageResult extends io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftPageResultDTO { }

export const useCatalogueDraftPageQuery = (params: QueryParams<CatalogueDraftPageQuery, CatalogueDraftPageResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueDraftPageQuery, CatalogueDraftPageResult>(
    "data/catalogueDraftPage", requestProps, params
  )
}

export interface CatalogueDraftGetQuery extends io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetQueryDTO { }
export interface CatalogueDraftGetResult extends io.komune.registry.f2.catalogue.draft.domain.query.CatalogueDraftGetResultDTO { }

export const useCatalogueDraftGetQuery = (params: QueryParams<CatalogueDraftGetQuery, CatalogueDraftGetResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueDraftGetQuery, CatalogueDraftGetResult>(
    "data/catalogueDraftGet", requestProps, params
  )
}

export interface InformationConceptListQuery extends io.komune.registry.f2.cccev.domain.concept.query.InformationConceptListQueryDTO  { }
export interface InformationConceptListResult extends io.komune.registry.f2.cccev.domain.concept.query.InformationConceptListResultDTO { }

export const useInformationConceptListQuery = (params: QueryParams<InformationConceptListQuery, InformationConceptListResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<InformationConceptListQuery, InformationConceptListResult>(
    "data/informationConceptList", requestProps, params
  )
}

export interface DataUnitListQuery extends io.komune.registry.f2.cccev.domain.unit.query.DataUnitListQueryDTO { }
export interface DataUnitListResult extends io.komune.registry.f2.cccev.domain.unit.query.DataUnitListResultDTO { }

export const useDataUnitListQuery = (params: QueryParams<DataUnitListQuery, DataUnitListResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<DataUnitListQuery, DataUnitListResult>(
    "data/dataUnitList", requestProps, params
  )
}

export interface EntityRefGetQuery extends io.komune.registry.f2.entity.domain.query.EntityRefGetQueryDTO { }
export interface EntityRefGetQueryResult extends io.komune.registry.f2.entity.domain.query.EntityRefGetQueryResultDTO { }

export const useEntityRefGetQuery = (params: QueryParams<EntityRefGetQuery, EntityRefGetQueryResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<EntityRefGetQuery, EntityRefGetQueryResult>(
    "global/entityRefGet", requestProps, params
  )
}

export interface InformationConceptGetGlobalValueQuery extends io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetGlobalValueQueryDTO { }
export interface InformationConceptGetGlobalValueResult extends io.komune.registry.f2.cccev.domain.concept.query.InformationConceptGetGlobalValueResultDTO { }

export const useInformationConceptGetGlobalValueQuery = (params: QueryParams<InformationConceptGetGlobalValueQuery, InformationConceptGetGlobalValueResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<InformationConceptGetGlobalValueQuery, InformationConceptGetGlobalValueResult>(
    "data/informationConceptGetGlobalValue", requestProps, params
  )
}

export interface CatalogueGetStructureQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetStructureQueryDTO { }
export interface CatalogueGetStructureResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetStructureResultDTO { }

export const useCatalogueGetStructureQuery = (params: QueryParams<CatalogueGetStructureQuery, CatalogueGetStructureResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueGetStructureQuery, CatalogueGetStructureResult>(
    "data/catalogueGetStructure", requestProps, params
  )
}


export interface CatalogueGetBlueprintsQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetBlueprintsQueryDTO { }
export interface CatalogueGetBlueprintsResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetBlueprintsResultDTO { }

export const useCatalogueGetBlueprintsQuery = (params: QueryParams<CatalogueGetBlueprintsQuery, CatalogueGetBlueprintsResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueGetBlueprintsQuery, CatalogueGetBlueprintsResult>(
    "data/catalogueGetBlueprints", requestProps, params
  )
}
