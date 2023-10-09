import {PageRoute} from "App/routes";
import {CatalogListPage} from "./CatalogListPage/CatalogListPage";
import { CatalogsRouter } from "./CatalogsRouter/CatalogsRouter";


export const catalogPages: PageRoute[] = [
  {
    path: "catalogs",
    element: <CatalogListPage />
  },
  {
    path: "catalogs/*",
    element: <CatalogsRouter />
  },
]
