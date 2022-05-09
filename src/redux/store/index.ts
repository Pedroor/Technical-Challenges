import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose, createStore } from "redux";
import { geolocationReducer } from "./slices/geolocation";

import Reactotron from "../../config/reactotron";

export const store = configureStore({
  reducer: {
    geolocation: geolocationReducer,
  },
  enhancers: [applyMiddleware(thunk), Reactotron.createEnhancer()],
});
