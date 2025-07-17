import { State } from "../index";
//@ts-ignore
import { createSelector } from "reselect";
//@ts-ignore
const getState = (state: State) => state.router;

const getCurrentLocation = createSelector(
  [getState],
  //@ts-ignore
  (state) => state.location
);

export const selectors = {
  getCurrentLocation: getCurrentLocation,
};
