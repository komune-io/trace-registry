import {PageRoute} from "App/routes";
import {CatalogList} from "./CatalogList/CatalogList";
import { CatalogView } from "./CatalogView/CatalogView";


export const catalogPages: PageRoute[] = [
  {
    path: "catalogs",
    element: <CatalogList />
  },
  {
    path: "catalogs/:catalogId/view/:tab?",
    element: <CatalogView />
  },
]
