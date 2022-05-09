import { store } from "../store";
import { actions as geolocationActions } from "../store/slices/geolocation";
import api from "../../../services/api";

export function getWeather() {
  return async function middle(dispatch) {
    try {
      const {
        geolocation: { latitude, longitude },
      } = store.getState();

      dispatch(geolocationActions.requestWeather());
      const response = await api.get(
        `/weather?lat=${latitude}&lon=${longitude}&appid=69e8e056ba6961ac370664ab3345f166&units=metric`
      );
      if (response)
        dispatch(geolocationActions.requestWeatherSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(geolocationActions.requestWeatherFailed(error.message));
    }
  };
}
