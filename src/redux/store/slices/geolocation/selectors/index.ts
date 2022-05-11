import { ReduxStore } from "../../../types/index";

export const selectLatitudeValue = (state: ReduxStore) =>
  state.geolocation.latitude;
export const selectLongitudeValue = (state: ReduxStore) =>
  state.geolocation.longitude;

export {};
