import {Catalogue} from "../model";
import {useMemo} from "react";

export const useCatalogueIdentifierNumber = (catalogue?: Catalogue)=> {
  return useMemo(() => extractCatalogueIdentifierNumber(catalogue?.identifier), [catalogue?.identifier])
}

export const extractCatalogueIdentifierNumber = (identifier?: string)=> {
  const id = identifier ?? ""
  return id.split("-").pop()
}

export const useCatalogueCo2Counter = (catalogue?: Catalogue) => {
  return useMemo(() => {
    const counterAggregate = catalogue?.aggregators.find((agr) => agr.identifier === "100m-counter-co2e")
    return counterAggregate?.value ? Number(counterAggregate.value) : undefined
  }, [catalogue])
}
