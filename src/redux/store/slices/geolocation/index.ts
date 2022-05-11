import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, GetLocationPayload, WeatherResponse } from "./types";

export const initialState = {
  latitude: 0,
  longitude: 0,
  data: {} as WeatherResponse,
  loading: false,
  error: false,
  errorMessage: "",
};

const getLocation = (
  state: State,
  action: PayloadAction<GetLocationPayload>
) => ({
  ...state,
  latitude: action.payload.latitude,
  longitude: action.payload.longitude,
});

const requestWeather = (state: State) => ({
  ...state,
  loading: true,
  error: false,
  errorMessage: "",
});

const requestWeatherSuccess = (
  state: State,
  action: PayloadAction<WeatherResponse>
) => ({
  ...state,
  data: action.payload,
  loading: false,
  error: false,
});

const requestWeatherFailed = (state: State, action: PayloadAction<string>) => ({
  ...state,
  error: true,
  loading: false,
  errorMessage: action.payload,
});

const geolocationSlice = createSlice({
  name: "@geolocation",
  initialState,
  reducers: {
    getLocation,
    requestWeather,
    requestWeatherSuccess,
    requestWeatherFailed,
  },
});

export const { actions } = geolocationSlice;

export const geolocationReducer = geolocationSlice.reducer;
