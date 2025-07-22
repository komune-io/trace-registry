import { createReducer } from "deox";
import { actions } from "./evidence.actions";
import { EvidenceTypeListDTO, EvidenceTypeDTO } from "datahub";
import { AsyncStatus } from "utils";

export interface EvidenceState {
  evidenceTypeAdded?: string
  evidenceTypeMapped?: Map<string, EvidenceTypeDTO>
  evidenceTypeLists?: EvidenceTypeListDTO[][]
  fetchStatus?: AsyncStatus
}

export const initialState: EvidenceState = {
  evidenceTypeAdded: undefined,
  evidenceTypeMapped: undefined,
  evidenceTypeLists: undefined,
  fetchStatus: "IDLE"
}

const setEvidenceTypeAdded = (state: EvidenceState, evidenceTypeId?: string): EvidenceState => ({ ...state, evidenceTypeAdded: evidenceTypeId })

const setFetchStatus = (state: EvidenceState, fetchStatus?: AsyncStatus): EvidenceState => ({ ...state, fetchStatus: fetchStatus })

const setEvidenceTypeLists = (state: EvidenceState, evidenceTypeLists?: EvidenceTypeListDTO[][]): EvidenceState => {
  const evidenceTypeMapped = new Map<string, EvidenceTypeDTO>()
  evidenceTypeLists?.forEach((el) => el.forEach((evidenceTypeList) => evidenceTypeList.specifiesEvidenceType.forEach((evidenceType: any) => {
    evidenceTypeMapped.set(evidenceType.identifier, evidenceType)
  })))
  return { ...state, evidenceTypeLists: evidenceTypeLists, evidenceTypeMapped: evidenceTypeMapped, fetchStatus: "SUCCESS" }
}

export const evidenceReducer = createReducer(initialState, (handleAction: any) => [
  handleAction(actions.setEvidenceTypeAdded, (state: EvidenceState, action: any) =>
    setEvidenceTypeAdded(state, action.payload.evidenceTypeId)
  ),
  handleAction(actions.setFetchStatus, (state: EvidenceState, action: any) =>
    setFetchStatus(state, action.payload.fetchStatus)
  ),
  handleAction(actions.setEvidenceTypeLists, (state: EvidenceState, action: any) =>
    setEvidenceTypeLists(state, action.payload.evidenceTypeLists)
  ),
]);
