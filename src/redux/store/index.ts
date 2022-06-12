import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { geolocationReducer } from "./slices/geolocation";
import { weatherReducer } from "./slices/weather";

import Reactotron from "../../config/Reactotron.config";

export const store = configureStore({
  reducer: {
    geolocation: geolocationReducer,
    weather: weatherReducer,
  },
  enhancers: [applyMiddleware(thunk), Reactotron.createEnhancer!()],
});
