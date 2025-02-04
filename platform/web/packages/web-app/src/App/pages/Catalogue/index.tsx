import {PageRoute} from "App/routes";
import { CataloguesRouter } from "./CataloguesRouter/CataloguesRouter";
import { CatalogueCreationPage } from "./CatalogueCreationPage/CatalogueCreationPage";
import { CatalogueEditionPage } from "./CatalogueEditionPage/CatalogueEditionPage";
import { CatalogueToValidateListPage } from "./CatalogueToValidateListPage/CatalogueToValidateListPage";
import { CatalogueValidationPage } from "./CatalogueValidationPage/CatalogueValidationPage";


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
    path: "catalogues/:catalogueId/edit",
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
    path: "catalogues/*",
    element: <CataloguesRouter root="standards" />
  }
]
