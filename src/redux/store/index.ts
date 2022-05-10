import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { geolocationReducer } from "./slices/geolocation";

import Reactotron from "../../config/ReactotronConfig";

export const store = configureStore({
  reducer: {
    geolocation: geolocationReducer,
  },
  enhancers: [applyMiddleware(thunk), Reactotron.createEnhancer!()],
});
