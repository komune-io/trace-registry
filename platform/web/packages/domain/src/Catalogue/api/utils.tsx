import {Catalogue} from "../model";
import {useMemo} from "react";

export const useCatalogueIdentifierNumber = (catalogue?: Catalogue)=> {
  return useMemo(() => extractCatalogueIdentifierNumber(catalogue), [catalogue?.identifier])
}

export const extractCatalogueIdentifierNumber = (catalogue?: Catalogue)=> {
  const identifier = catalogue?.identifier ?? ""
  return identifier.split("-").pop()
}
