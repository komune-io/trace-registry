import {io} from "registry-platform-api-api-js-export";

export * from "./RelatedCatalogue"
export * from "./utils"

export interface Catalogue extends io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO {
}
export interface CatalogueRef extends io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO {}

export interface CatalogueRefTree extends io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO {}

export type CatalogueFormContext = "edition" | "creation" | "readOnly"
