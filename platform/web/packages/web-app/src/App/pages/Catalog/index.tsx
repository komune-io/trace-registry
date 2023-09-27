import {PageRoute} from "App/routes";
import {CatalogList} from "./CatalogList/CatalogList";


export const catalogPages: PageRoute[] = [
  {
    path: "catalogs",
    element: <CatalogList />
  },
]
