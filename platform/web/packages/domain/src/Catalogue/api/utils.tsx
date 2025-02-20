import {Catalogue} from "../model";
import {useMemo} from "react";

export const useCatalogueIdentifierNumber = (catalogue?: Catalogue)=> {
  return useMemo(() => extractCatalogueIdentifierNumber(catalogue?.identifier), [catalogue?.identifier])
}

export const extractCatalogueIdentifierNumber = (identifier?: string)=> {
  const id = identifier ?? ""
  return id.split("-").pop()
}
