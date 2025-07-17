import { EvidenceTypeListDTO, getEvidenceTypeLists } from "datahub";
import { createActionCreator } from "deox";
import { Dispatch } from "redux";
import { State } from "store";
import { AsyncStatus } from "utils";

const setEvidenceTypeAdded = createActionCreator(
  "SET_EVIDENCETYPE_ADDED",
  (resolve) => (evidenceTypeId?: string) => resolve({ evidenceTypeId: evidenceTypeId })
);

const setFetchStatus = createActionCreator(
  "SET_EVIDENCETYPELIST_FETCHSTATUS",
  (resolve) => (fetchStatus?: AsyncStatus) => resolve({ fetchStatus: fetchStatus })
);

const setEvidenceTypeLists = createActionCreator(
  "SET_EVIDENCETYPELIST_FETCHSTATUS",
  (resolve) => (evidenceTypeLists?: EvidenceTypeListDTO[][]) => resolve({ evidenceTypeLists: evidenceTypeLists })
);

const addEvidenceType = (
  evidenceTypeId?: string
) => {
  return async (dispatch: Dispatch) => {
    dispatch(setEvidenceTypeAdded(evidenceTypeId));
    const input = document.getElementById("evidenceBar-dropzoneInput") as HTMLInputElement
    if (input) {
      input.click()
    }
  };
}

const fetchEvidenceTypeLists = (
) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState()
    //@ts-ignore
    if (state.evidence.fetchStatus !== "PENDING") {
      dispatch(setFetchStatus("PENDING"))
      const evidenceTypeLists = (await getEvidenceTypeLists()).evidenceTypeLists
      //@ts-ignore
      dispatch(setEvidenceTypeLists(evidenceTypeLists))
    }
  };
}

export const actions = {
  setEvidenceTypeAdded: setEvidenceTypeAdded,
  setFetchStatus: setFetchStatus,
  setEvidenceTypeLists: setEvidenceTypeLists,
  addEvidenceType: addEvidenceType,
  fetchEvidenceTypeLists: fetchEvidenceTypeLists,
};
