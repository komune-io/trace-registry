import {PageRoute} from "App/routes";
import {CatalogueCreationPage} from "./Catalogue/CatalogueCreationPage/CatalogueCreationPage";
import {DraftPage} from "./Draft/DraftPage/DraftPage";
import {DraftToValidateListPage} from "./Draft/DraftToValidateListPage/DraftToValidateListPage";
import {ContributionListPage} from "./Catalogue/ContributionListPage/ContributionListPage";
import {OrganizationCataloguesPage} from "./Catalogue/OrganizationCataloguesPage/OrganizationCataloguesPage";
import {CatalogueSearchPage} from "./Catalogue/CatalogueSearchPage/CatalogueSearchPage";
import {GraphCreationPage} from "./Graph/GraphCreationPage/GraphCreationPage";
import {CataloguesStructureRouter} from "./Structure/CataloguesStructureRouter/CataloguesRouter";
import { CatalogueLinkPage } from "./SubCatalogue/CatalogueLinkPage/CatalogueLinkPage";
import { ProtocolFillingPage } from "./Protocol/ProtocolFillingPage/ProtocolFillingPage";
import { ProtocolVerificationPage } from "./Protocol/ProtocolVerificationPage/ProtocolVerificationPage";
import { ProtocolsToValidateListPage } from "./Protocol/ProtocolsToValidateListPage/ProtocolsToValidateListPage";

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
    path: "catalogues/create/:type",
    element: <CatalogueCreationPage />
  },
  {
    path: "catalogues/:catalogueId/drafts/:draftId/verify/:tab?",
    element: <DraftPage validation />
  },
  {
    path: "catalogues/:catalogueId/drafts/:draftId/:tab?",
    element: <DraftPage  />
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
    path: "catalogues/:catalogueId/:draftId/:tab/:subCatalogueId/linkSubCatalogue",
    element: <CatalogueLinkPage  />
  },
  {
    path: "catalogues/:catalogueId/:draftId/:tab/:protocolId/protocol",
    element: <ProtocolFillingPage />
  },
  {
    path: "protocols/:protocolId/verify",
    element: <ProtocolVerificationPage />
  },
  {
    path: "protocols/toVerify",
    element: <ProtocolsToValidateListPage />
  }
]
