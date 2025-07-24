import { useMemo, useCallback } from "react"
import { insertObjectIdsInsideRoutes, RecordRouteCamelCase } from "./types"
import { PathsOfObj } from "./utils"
import { Policies } from "./auth"

type PoliciesPaths = PathsOfObj<Policies> | "open" | "logged"

export const strictRoutesAuthorizations = {
  "": "open"  as PoliciesPaths,
  "projects": "open" as PoliciesPaths,
  "projects/:projectId/view/:tab?/*": "open" as PoliciesPaths,
  "projects/:projectId/transactions/:transactionId/view": "open" as PoliciesPaths,
  "projects/create/:step": "open" as PoliciesPaths,
  "transactions/:transactionId": "open" as PoliciesPaths,
  "transactions": "open" as PoliciesPaths,
  "catalogues": "open" as PoliciesPaths,
  "catalogues/create/:type": "catalogue.canCreate" as PoliciesPaths,
  "catalogues/toVerify": "draft.canSeePublished" as PoliciesPaths,
  "catalogues/contributions": "logged" as PoliciesPaths,
  "catalogues/myOrganization": "catalogue.canSeeMyOrganization" as PoliciesPaths,
  "catalogues/search": "open" as PoliciesPaths,
  "catalogues/:catalogueId/drafts/:draftId/:tab?": "logged" as PoliciesPaths,
  "catalogues/:catalogueId/drafts/:draftId/verify/:tab?": "logged" as PoliciesPaths,
  "catalogues/:catalogueId/:draftId/:datasetId/graph": "logged" as PoliciesPaths,
  "catalogues/:catalogueId/:draftId/graph": "logged" as PoliciesPaths,
  "catalogues/:catalogueId/:draftId/:tabId/:subCatalogueId/linkSubCatalogue": "logged" as PoliciesPaths,
  "catalogues/*": "open" as PoliciesPaths,
  "referential": "logged" as PoliciesPaths,
} as const

export type Routes = keyof typeof strictRoutesAuthorizations

export type RoutesAuthorizations = typeof strictRoutesAuthorizations


type RoutesDefinitions = RecordRouteCamelCase<Routes, (...objectIds: string[]) => string>

//@ts-ignore
let routesDefinitions: RoutesDefinitions = {}

for (let route in strictRoutesAuthorizations) {
  const camelCasedRoute = route
    .replaceAll("?", "")
    .replaceAll("*", "All")
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
  //@ts-ignore
  routesDefinitions[camelCasedRoute] = (...objectIds: string[]) => "/" + insertObjectIdsInsideRoutes(route, ...objectIds)
}

export type CatalogueAll = (...objectIds: string[]) => string

export const useRoutesDefinition = () => {
  const cataloguesAll: CatalogueAll = useCallback(
    (...objectIds: string[]) => {
      return "/" + insertObjectIdsInsideRoutes("catalogues/*", ...objectIds)
    },
    [],
  )
  const cataloguesTab = useCallback(
    (tab?: string, ...objectIds: string[]) => {
      const ends = `#${tab ? tab : ""}`
      return "/" + insertObjectIdsInsideRoutes("catalogues/*", ...objectIds) + ends
    },
    [],
  )

  const draftPage = useCallback(
    (validation: boolean, catalogueId: string, draftId: string, tab?: string) => {
      if (validation) {
        return routesDefinitions.cataloguesCatalogueIdDraftsDraftIdVerifyTab(catalogueId, draftId, tab!)
      }
      return routesDefinitions.cataloguesCatalogueIdDraftsDraftIdTab(catalogueId, draftId, tab!)
    },
    [],
  )

  return useMemo(() => ({
    ...routesDefinitions,
    cataloguesAll,
    cataloguesTab,
    draftPage
  }), [cataloguesAll, cataloguesTab, draftPage])
}
