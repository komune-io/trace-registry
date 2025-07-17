import { createActionCreator } from "deox";
import { Dispatch } from "redux";
import { State } from "store";
import { router } from "store/router";
import { FiltersState } from "./filters.reducer";

const setFilters = createActionCreator(
  "FILTERS_SET",
  (resolve) => (filters: FiltersState) => resolve({ filters: filters })
);

const setEvidence = createActionCreator(
  "FILTERS_EVIDENCE_SET",
  (resolve) => (evidence?: string) => resolve({ evidence: evidence })
);

const changeFilters = (
  filters: FiltersState
) => {
  return async (dispatch: Dispatch) => {
    dispatch(setFilters(filters));
    dispatch(router.goto.certificateFiller(filters));
  };
}

const changeEvidence = (
  evidence?: string
) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState()
    dispatch(setEvidence(evidence));
    dispatch(router.goto.certificateFiller({...state.filters, evidence: evidence}));
  };
}

export const actions = {
  setFilters: setFilters,
  setEvidence: setEvidence,
  changeFilters: changeFilters,
  changeEvidence: changeEvidence
};
