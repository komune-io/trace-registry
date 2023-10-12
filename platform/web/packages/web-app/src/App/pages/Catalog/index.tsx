import {PageRoute} from "App/routes";
import { CatalogsRouter } from "./CatalogsRouter/CatalogsRouter";


export const catalogPages: PageRoute[] = [
  {
    path: "catalogs",
    element: <CatalogsRouter />
  },
  {
    path: "catalogs/*",
    element: <CatalogsRouter />
  },
]
