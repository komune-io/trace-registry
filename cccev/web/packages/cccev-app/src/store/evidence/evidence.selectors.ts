import { createSelector } from "reselect";
import { State } from "..";

const getEvidenceState = (state: State) => state.evidence;

export const getEvidenceTypeAdded = createSelector(
  [getEvidenceState],
  (state) => state.evidenceTypeAdded
);

export const getEvidenceTypeLists = createSelector(
  [getEvidenceState],
  (state) => state.evidenceTypeLists
);

export const getFetchStatus = createSelector(
  [getEvidenceState],
  (state) => state.fetchStatus
);

export const getEvidenceTypeMapped = createSelector(
  [getEvidenceState],
  (state) => state.evidenceTypeMapped
);

export const selectors = {
  evidenceTypeAdded: getEvidenceTypeAdded,
  evidenceTypeMapped: getEvidenceTypeMapped,
  fetchStatus: getFetchStatus,
  evidenceTypeLists: getEvidenceTypeLists
};
