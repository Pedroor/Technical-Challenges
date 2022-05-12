import { Dispatch } from "redux";
import { actions as weatherActions } from "../store/slices/weather";
import { LocalizationService } from "../../utils";
import api from "../../services/api";

export function getWeather() {
  return async function middle(dispatch: Dispatch) {
    try {
      dispatch(weatherActions.requestWeather());
      const { latitude, longitude } =
        await LocalizationService.getCurrentPosition();

      const currentDay = await api.get(`/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
        },
      });

      const week = await api.get(`/onecall`, {
        params: {
          lat: latitude,
          lon: longitude,
          units: "metric",
          lang: "pt-br",
          exclude: "hourly,minutely,alerts",
        },
      });

      console.log("currentDay", currentDay);
      if (currentDay && week) {
        dispatch(
          weatherActions.requestWeatherSuccess({
            currentDay: currentDay.data,
            week: week.data.daily.slice(1, -1),
          })
        );
      }
    } catch (_e) {
      dispatch(weatherActions.requestWeatherFailed());
      throw Error;
    }
  };
}
