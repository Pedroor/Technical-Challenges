import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { State, WeatherResponse, DayProps, CurrentDayProps } from "./types";

export const initialState = {
  currentDay: {} as CurrentDayProps,
  week: [{} as DayProps],
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

  currentDay: action.payload.currentDay,
  week: action.payload.week,
  loading: false,
  error: false,
});

const requestWeatherFailed = (state: State) => ({
  ...state,
  error: true,
  loading: false,
});

const weatherSlice = createSlice({
  name: "@weather",
  initialState,
  reducers: {
    requestWeatherSuccess,
    requestWeather,
    requestWeatherFailed,
  },
});

export const { actions } = weatherSlice;

export const weatherReducer = weatherSlice.reducer;
