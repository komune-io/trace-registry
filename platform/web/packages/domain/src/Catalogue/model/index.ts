import {io} from "registry-platform-api-api-js-export";

export * from "./RelatedCatalogue"
export * from "./utils"

export interface Catalogue extends io.komune.registry.f2.catalogue.domain.dto.CatalogueDTO {
}
export interface CatalogueRef extends io.komune.registry.f2.catalogue.domain.dto.CatalogueRefDTO {}

export interface CatalogueRefTree extends io.komune.registry.f2.catalogue.domain.dto.CatalogueRefTreeDTO {}

export interface CatalogueDraft extends io.komune.registry.f2.catalogue.draft.domain.model.CatalogueDraftDTO {
}

export interface InformationConcept extends io.komune.registry.f2.cccev.domain.concept.model.InformationConceptComputedDTO  {
    
}

export interface ConceptTranslated extends io.komune.registry.f2.concept.domain.model.ConceptTranslatedDTO {}
export interface InformationConceptTranslated extends io.komune.registry.f2.cccev.domain.concept.model.InformationConceptTranslatedDTO {}

export type CatalogueStatus = io.komune.registry.s2.catalogue.domain.automate.CatalogueState

export const catalogueStatus: CatalogueStatus[] = ["ACTIVE", "DELETED"]

export type DraftStatus = io.komune.registry.s2.catalogue.draft.domain.CatalogueDraftState

export const draftStatus: DraftStatus[] = ["DRAFT", "REJECTED", "SUBMITTED", "UPDATE_REQUESTED", "VALIDATED"]

export type DataUnitType =  io.komune.registry.s2.cccev.domain.model.DataUnitType

export const buildRangeValue = io.komune.registry.f2.dataset.domain.SupportedValueUtils.buildRangeValue

export const parseRangeValue = io.komune.registry.f2.dataset.domain.SupportedValueUtils.parseRangeValue

export type CatalogueFormContext = "edition" | "creation" | "readOnly"
