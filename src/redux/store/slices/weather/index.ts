import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, WeatherResponse } from "./types";

export const initialState = {
  data: {} as WeatherResponse,
  loading: false,
  error: false,
  errorMessage: "",
};

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

const weatherSlice = createSlice({
  name: "@weather",
  initialState,
  reducers: {
    requestWeather,
    requestWeatherSuccess,
    requestWeatherFailed,
  },
});

export const { actions } = weatherSlice;

export const weatherReducer = weatherSlice.reducer;
