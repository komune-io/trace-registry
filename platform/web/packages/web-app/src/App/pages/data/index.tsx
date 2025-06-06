import {PageRoute} from "App/routes";
import {CatalogueCreationPage} from "./Catalogue/CatalogueCreationPage/CatalogueCreationPage";
import {DraftEditionPage} from "./Draft/DraftEditionPage/DraftEditionPage";
import {DraftViewPage} from "./Draft/DraftViewPage/DraftViewPage";
import {DraftValidationPage} from "./Draft/DraftValidationPage/DraftValidationPage";
import {DraftToValidateListPage} from "./Draft/DraftToValidateListPage/DraftToValidateListPage";
import {ContributionListPage} from "./Catalogue/ContributionListPage/ContributionListPage";
import {OrganizationCataloguesPage} from "./Catalogue/OrganizationCataloguesPage/OrganizationCataloguesPage";
import {CatalogueSearchPage} from "./Catalogue/CatalogueSearchPage/CatalogueSearchPage";
import {GraphCreationPage} from "./Graph/GraphCreationPage/GraphCreationPage";
import {CataloguesStructureRouter} from "./Structure/CataloguesStructureRouter/CataloguesRouter";

export const catalogPages: PageRoute[] = [
  {
    path: "",
    element: <CataloguesStructureRouter />
  },
  {
    path: "catalogues",
    element: <CataloguesStructureRouter />
  },
  {
    path: "catalogues/*",
    element: <CataloguesStructureRouter />
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
    path: "catalogues/create/project",
    element: <CatalogueCreationPage type="100m-project" />
  },
  {
    path: "catalogues/:catalogueId/:draftId/edit/:tab?",
    element: <DraftEditionPage  />
  },
  {
    path: "catalogues/:catalogueId/:draftId/view/:tab?",
    element: <DraftViewPage  />
  },
  {
    path: "catalogues/:catalogueId/:draftId/verify/:tab?",
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
  }
]
