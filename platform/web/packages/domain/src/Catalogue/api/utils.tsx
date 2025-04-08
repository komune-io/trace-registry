import {Catalogue, CatalogueRef} from "../model";
import {useMemo} from "react";

export const useCatalogueIdentifierNumber = (catalogue?: Catalogue | CatalogueRef)=> {
  return useMemo(() => extractCatalogueIdentifierNumber(catalogue?.identifier), [catalogue?.identifier])
}

export const extractCatalogueIdentifier = (identifier?: string): string | undefined => {
  return identifier ? identifier.split("-").pop() : undefined
}
export const extractCatalogueIdentifierNumber = (identifier?: string): number | undefined => {
  const value = extractCatalogueIdentifier(identifier)
  return value && !isNaN(Number(value)) ? Number(value) : undefined
}
export const orderByCatalogueIdentifierNumber= (a: Catalogue|CatalogueRef, b: Catalogue|CatalogueRef): number => {
  const identifierA = extractCatalogueIdentifierNumber(a.identifier) ?? 0
  const identifierB = extractCatalogueIdentifierNumber(b.identifier) ?? 0
  return identifierB - identifierA
}

export const useCatalogueCo2Counter = (catalogue?: Catalogue) => {
  return useMemo(() => {
    const counterAggregate = catalogue?.aggregators.find((agr) => agr.identifier === "counter-co2eluc@")
    return counterAggregate?.value ? Number(counterAggregate.value) : undefined
  }, [catalogue])
}
