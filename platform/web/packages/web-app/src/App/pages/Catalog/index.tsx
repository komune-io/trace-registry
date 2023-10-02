import {PageRoute} from "App/routes";
import {CatalogListPage} from "./CatalogListPage/CatalogListPage";
import { CatalogViewPage } from "./CatalogViewPage/CatalogViewPage";


export const catalogPages: PageRoute[] = [
  {
    path: "catalogs",
    element: <CatalogListPage />
  },
  {
    path: "catalogs/:catalogId/view/:tab?",
    element: <CatalogViewPage />
  },
]
