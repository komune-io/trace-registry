import {io} from "registry-platform-api-api-js-export";

export interface Catalogue extends io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO {
}
export interface CatalogueRef extends io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO {}

export interface CatalogueRefTree extends io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO {}

export interface CatalogueDraft extends io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO {
}

export interface Distribution extends io.komune.registry.f2.dataset.domain.dto.DistributionDTO {
}

export type CatalogueTypes = "100m-sector" | "100m-solution" | "100m-system" | "100m-project"

export const catalogueTypes: CatalogueTypes[] = ["100m-sector", "100m-solution", "100m-system", "100m-project"]

export type CatalogueStatus = io.komune.registry.s2.catalogue.domain.automate.CatalogueState

export const catalogueStatus: CatalogueStatus[] = ["ACTIVE", "DELETED"]

export type DraftStatus = io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState

export const draftStatus: DraftStatus[] = ["DRAFT", "REJECTED", "SUBMITTED", "UPDATE_REQUESTED", "VALIDATED", "DELETED"]
