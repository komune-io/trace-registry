import { createReducer } from "deox";
import { parse } from "qs";
import { actions } from "./filters.actions";

export interface FiltersState {
  evidence?: string
  category?: string[]
  search?: string
}

export const initialState = (): FiltersState => {
  const urlParams = parse(window.location.search, { ignoreQueryPrefix: true }) 
  return {
    evidence: typeof urlParams.evidence === "string" ? urlParams.evidence : undefined,
    category:  Array.isArray(urlParams.category) ? urlParams.category as string[] : typeof urlParams.category === "string" ? [urlParams.category] : undefined,
    search: typeof urlParams.search === "string" ? urlParams.search : undefined
  }
}

const setFilters = (filters: FiltersState): FiltersState => ({...filters})

const setEvidence = (state: FiltersState, evidence?: string): FiltersState => ({...state, evidence: evidence})

export const filtersReducer = createReducer(initialState(), (handleAction) => [
  //@ts-ignore
  handleAction(actions.setFilters, (state: FiltersState, action) =>
  setFilters(action.payload.filters)
  ),
  handleAction(actions.setEvidence, (state: FiltersState, action) =>
  setEvidence(state, action.payload.evidence)
  ),
]);
