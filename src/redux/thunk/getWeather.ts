import { Dispatch } from "redux";
import { actions as weatherActions } from "../store/slices/weather";
import { LocalizationService } from "../../utils";
import api from "../../services/api";

export function getWeather() {
  return async function middle(dispatch: Dispatch) {
    try {
      console.log("ALO");
      dispatch(weatherActions.requestWeather());
      const { latitude, longitude } =
        await LocalizationService.getCurrentPosition();

      const response = await api.get(`/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
        },
      });

      console.log("RESPONSE", response);
      if (response)
        dispatch(weatherActions.requestWeatherSuccess(response.data));
    } catch (_e) {
      dispatch(weatherActions.requestWeatherFailed("Failed GetLocation"));
      throw Error;
    }
  };
}
