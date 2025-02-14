import {PageRoute} from "App/routes";
import { CataloguesRouter } from "./CataloguesRouter/CataloguesRouter";
import { CatalogueCreationPage } from "./CatalogueCreationPage/CatalogueCreationPage";
import { CatalogueEditionPage } from "./CatalogueEditionPage/CatalogueEditionPage";
import { CatalogueToValidateListPage } from "./CatalogueToValidateListPage/CatalogueToValidateListPage";
import { CatalogueValidationPage } from "./CatalogueValidationPage/CatalogueValidationPage";
import { ContributionListPage } from "./ContributionListPage/ContributionListPage";
import { CatalogueSearchPage } from "./CatalogueSearchPage/CatalogueSearchPage";


export const catalogPages: PageRoute[] = [
  {
    path: "catalogues",
    element: <CataloguesRouter root="standards" />
  },
  {
    path: "catalogues/create/solution",
    element: <CatalogueCreationPage type="100m-solution" />
  },
  {
    path: "catalogues/create/system",
    element: <CatalogueCreationPage type="100m-system" />
  },
  {
    path: "catalogues/create/sector",
    element: <CatalogueCreationPage type="100m-sector" />
  },
  {
    path: "catalogues/:catalogueId/:draftId/edit",
    element: <CatalogueEditionPage  />
  },
  {
    path: "catalogues/:catalogueId/verify",
    element: <CatalogueValidationPage  />
  },
  {
    path: "catalogues/toVerify",
    element: <CatalogueToValidateListPage  />
  },
  {
    path: "catalogues/contributions",
    element: <ContributionListPage  />
  },
  {
    path: "catalogues/search",
    element: <CatalogueSearchPage  />
  },
  {
    path: "catalogues/*",
    element: <CataloguesRouter root="standards" />
  }
]
