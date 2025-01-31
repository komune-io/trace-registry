import {PageRoute} from "App/routes";
import { CataloguesRouter } from "./CataloguesRouter/CataloguesRouter";
import { CatalogueCreationPage } from "./CatalogueCreationPage/CatalogueCreationPage";
import { CatalogueEditionPage } from "./CatalogueEditionPage/CatalogueEditionPage";
import { CatalogueToValidateListPage } from "./CatalogueToValidateListPage/CatalogueToValidateListPage";


export const catalogPages: PageRoute[] = [
  {
    path: "catalogues",
    element: <CataloguesRouter root="standards" />
  },
  {
    path: "catalogues/create/solution",
    element: <CatalogueCreationPage type="solution" />
  },
  {
    path: "catalogues/create/system",
    element: <CatalogueCreationPage type="system" />
  },
  {
    path: "catalogues/create/sector",
    element: <CatalogueCreationPage type="sector" />
  },
  {
    path: "catalogues/:catalogueId/edit",
    element: <CatalogueEditionPage  />
  },
  {
    path: "catalogues/toVerify",
    element: <CatalogueToValidateListPage  />
  },
  {
    path: "catalogues/*",
    element: <CataloguesRouter root="standards" />
  }
]
