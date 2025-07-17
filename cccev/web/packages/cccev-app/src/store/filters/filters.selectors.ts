import { createSelector } from "reselect";
import { State } from "..";

const getFiltersState = (state: State) => state.filters;

export const getFilters = createSelector(
  [getFiltersState],
  (state) => state
);

export const getEvidence = createSelector(
  [getFiltersState],
  (state) => state.evidence
);

export const selectors = {
  filters: getFilters,
  evidence: getEvidence
};
