import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GetLocationPayload {
  latitude: number;
  longitude: number;
}

interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  name: string;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}
interface State {
  latitude: number;
  longitude: number;
  data: WeatherResponse;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export const initialState = {
  latitude: 0,
  longitude: 0,
  data: {} as WeatherResponse,
  loading: false,
  error: false,
  errorMessage: "",
};

const setLocation = (
  state: State,
  action: PayloadAction<GetLocationPayload>
) => ({
  ...state,
  latitude: action?.payload?.latitude,
  longitude: action?.payload?.longitude,
});

const requestWeather = (state: State) => ({
  ...state,
  loading: true,
  error: false,
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
    setLocation,
    requestWeather,
    requestWeatherSuccess,
    requestWeatherFailed,
  },
});

export const { actions } = geolocationSlice;

export const geolocationReducer = geolocationSlice.reducer;
