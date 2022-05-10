import { Dispatch } from "redux";
import { actions as geolocationActions } from "../store/slices/geolocation";
import { OPEN_WEATHER_API_KEY } from "@env";
import { LocalizationService } from "../../utils";
import api from "../../services/api";

export function getWeather() {
  return async function middle(dispatch: Dispatch) {
    try {
      dispatch(geolocationActions.requestWeather());
      const { latitude, longitude } =
        await LocalizationService.getCurrentPosition();

      const response = await api.get(`/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
        },
      });
      if (response)
        dispatch(geolocationActions.requestWeatherSuccess(response.data));
    } catch (_e) {
      throw Error;
    }
  };
}
