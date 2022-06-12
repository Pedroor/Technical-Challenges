import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, GetLocationPayload, WeatherResponse } from "./types";

export const initialState = {
  latitude: 0,
  longitude: 0,
};

const setLocation = (
  state: State,
  action: PayloadAction<GetLocationPayload>
) => ({
  ...state,
  latitude: action.payload.latitude,
  longitude: action.payload.longitude,
});

const geolocationSlice = createSlice({
  name: "@geolocation",
  initialState,
  reducers: {
    setLocation,
  },
});

export const { actions } = geolocationSlice;

export const geolocationReducer = geolocationSlice.reducer;
