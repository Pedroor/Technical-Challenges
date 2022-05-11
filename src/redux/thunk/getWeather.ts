import { Dispatch } from "redux";
import { actions as geolocationActions } from "../store/slices/geolocation";
import { LocalizationService } from "../../utils";
import api from "../../services/api";

export function getWeather() {
  return async function middle(dispatch: Dispatch) {
    try {
      dispatch(geolocationActions.requestWeather());
      const { latitude, longitude } =
        await LocalizationService.getCurrentPosition();

      const response = await api.get(`/onecall`, {
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
