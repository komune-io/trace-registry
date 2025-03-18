import { g2Config, QueryParams, request, useAuthenticatedRequest, useQueryRequest } from "@komune-io/g2"
import { io } from "registry-platform-api-api-js-export";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Catalogue } from "../model";
import { useQuery } from "@tanstack/react-query";
import { parseCsv } from "raw-graph";
import { useTranslation } from "react-i18next";

export interface CatalogueGetQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetQueryDTO { }
export interface CatalogueGetResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetResultDTO { }

export const useCatalogueGetQuery = (params: QueryParams<CatalogueGetQuery, CatalogueGetResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueGetQuery, CatalogueGetResult>(
    "data/catalogueGet", requestProps, params
  )
}

export interface CatalogueGetByIdentifier extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierQueryDTO { }
export interface CatalogueGetByIdentifierResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueGetByIdentifierResultDTO { }

export const useCatalogueGetByIdentifierQuery = (params: QueryParams<CatalogueGetByIdentifier, CatalogueGetByIdentifierResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueGetByIdentifier, CatalogueGetByIdentifierResult>(
    "data/catalogueGetByIdentifier", requestProps, params
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

export interface CatalogueSearchQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueSearchQueryDTO { }
export interface CatalogueSearchResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueSearchResultDTO { }

export interface FacetDistribution extends io.komune.registry.s2.catalogue.domain.model.FacetDistributionDTO { }

export const useCatalogueSearchQuery = (params: QueryParams<CatalogueSearchQuery, CatalogueSearchResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueSearchQuery, CatalogueSearchResult>(
    "data/catalogueSearch", requestProps, params
  )
}


export interface CatalogueRefListQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefListQueryDTO { }
export interface CatalogueRefListResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueRefListResultDTO { }

export const useCatalogueRefListQuery = (params: QueryParams<CatalogueRefListQuery, CatalogueRefListResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueRefListQuery, CatalogueRefListResult>(
    "data/catalogueRefList", requestProps, params
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
    [datasetId, distributionId],
  )

  return useQuery({
    queryKey: ["data/datasetDownloadDistribution", { id: datasetId, distributionId }],
    queryFn: distributionContentQuery,
    enabled: !!datasetId && !!distributionId
  })
}

export const useLexicalDownloadDistribution = (catalogue?: Catalogue) => {
  const dataSet = useMemo(() => {
    if (!catalogue) return
    return findLexicalDataset(catalogue)
  }, [catalogue])

  const query = useDownloadDistribution<any>(dataSet?.distribution.mediaType === "application/json" ? "json" : "text", dataSet?.dataSet.id, dataSet?.distribution.id)

  return {
    query,
    dataSet
  }
}

export const useCsvDownloadDistribution = (datasetId?: string, distributionId?: string) => {
  const [parsed, setParsed] = useState<{
    dataset: any;
    dataTypes: any;
    errors: any;
  } | undefined>(undefined)
  const {i18n} = useTranslation()

  const query = useDownloadDistribution<Blob>("blob", datasetId, distributionId)

  useEffect(() => {
    if (query.data) {
      parseCsv(query.data, i18n.language).then((res) => {
        setParsed(res)
      })
    }
  }, [query.data, i18n.language])

  return {
    query,
    parsed
  }
}

export const findLexicalDataset = (catalogue: Catalogue) => {
  const dataSet = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")
  const distribution = dataSet?.distributions?.find((distribution) => distribution.mediaType === "application/json")

  if (dataSet && distribution) return {
    dataSet,
    distribution
  }

  const markdownDataSet = catalogue?.datasets?.find((dataSet) => dataSet.type === "lexical")

  const markdownDistribution = markdownDataSet?.distributions?.find((distribution) => distribution.mediaType === "text/markdown")

  if (markdownDataSet && markdownDistribution) return {
    dataSet: markdownDataSet,
    distribution: markdownDistribution
  }

  return undefined
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


export interface CatalogueListAvailableOwnersQuery extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersQueryDTO { }
export interface CatalogueListAvailableOwnersResult extends io.komune.registry.f2.catalogue.domain.query.CatalogueListAvailableOwnersResultDTO { }

export const useCatalogueListAvailableOwnersQuery = (params: QueryParams<CatalogueListAvailableOwnersQuery, CatalogueListAvailableOwnersResult>) => {
  const requestProps = useAuthenticatedRequest()
  return useQueryRequest<CatalogueListAvailableOwnersQuery, CatalogueListAvailableOwnersResult>(
    "data/catalogueListAvailableOwners", requestProps, params
  )
}
