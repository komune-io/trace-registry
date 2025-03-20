import {PageRoute} from "App/routes";
import { CatalogueCreationPage } from "./CatalogueCreationPage/CatalogueCreationPage";
import { DraftEditionPage } from "./DraftEditionPage/DraftEditionPage";
import { DraftToValidateListPage } from "./DraftToValidateListPage/DraftToValidateListPage";
import { DraftValidationPage } from "./DraftValidationPage/DraftValidationPage";
import { ContributionListPage } from "./ContributionListPage/ContributionListPage";
import { CatalogueSearchPage } from "./CatalogueSearchPage/CatalogueSearchPage";
import { DraftViewPage } from "./DraftViewPage/DraftViewPage";
import { GraphCreationPage } from "./GraphCreationPage/GraphCreationPage";
import { OrganizationCataloguesPage } from "./OrganizationCataloguesPage/OrganizationCataloguesPage";

import {CataloguesRouter} from "./CataloguesRouter/CataloguesRouter";

export const catalogPages: PageRoute[] = [
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
    path: "catalogues/create/project",
    element: <CatalogueCreationPage type="100m-project" />
  },
  {
    path: "catalogues/:catalogueId/:draftId/edit",
    element: <DraftEditionPage  />
  },
  {
    path: "catalogues/:catalogueId/:draftId/view",
    element: <DraftViewPage  />
  },
  {
    path: "catalogues/:catalogueId/:draftId/verify",
    element: <DraftValidationPage  />
  },
  {
    path: "catalogues/toVerify",
    element: <DraftToValidateListPage  />
  },
  {
    path: "catalogues/contributions",
    element: <ContributionListPage  />
  },
  {
    path: "catalogues/myOrganization",
    element: <OrganizationCataloguesPage  />
  },
  {
    path: "catalogues/search",
    element: <CatalogueSearchPage  />
  },
  {
    path: "catalogues/:catalogueId/:draftId/:datasetId/graph",
    element: <GraphCreationPage  />
  },
  {
    path: "catalogues/:catalogueId/:draftId/graph",
    element: <GraphCreationPage  />
  },
  {
    path: "catalogues",
    element: <CataloguesRouter />
  },
  {
    path: "catalogues/*",
    element: <CataloguesRouter />
  }
]
