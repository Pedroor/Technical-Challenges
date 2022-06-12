import { useCallback, useEffect } from "react";
import { LocalizationService, RequestPermissions } from "../../utils";
import { useReduxDispatch } from "..";
import { getWeather } from "../../redux/thunk/getWeather";
import { actions as geolocationActions } from "../../redux/store/slices/geolocation";

export function useFetchLocation() {
  const dispatch = useReduxDispatch();

  useEffect(() => {
    async () => {
      await RequestPermissions();
    };
  });

  const handleFetchLocation = useCallback(async () => {
    const position = await LocalizationService.getCurrentPosition();
    dispatch(geolocationActions.setLocation(position));
  }, []);

  return {
    handleFetchLocation,
    RequestPermissions,
  };
}
