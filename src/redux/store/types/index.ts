import { store } from "../slices/geolocation";

export type ReduxStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
