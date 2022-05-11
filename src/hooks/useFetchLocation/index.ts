import { useCallback, useEffect, useState } from "react";
import { PermissionStatus } from "react-native-permissions";
import { LocalizationService, RequestPermissions } from "../../utils";
import { useReduxDispatch } from "..";
import { getWeather } from "../../redux/thunk/getWeather";
import { actions as geolocationActions } from "../../redux/store/slices/geolocation";

export function useFetchLocation() {
  const [statusLocation, setStatusLocation] = useState<PermissionStatus>();
  const dispatch = useReduxDispatch();

  useEffect(() => {
    async () => {
      const status = await RequestPermissions();
      setStatusLocation(status);
    };
  });

  const handleFetchLocation = useCallback(async () => {
    const position = await LocalizationService.getCurrentPosition();
    dispatch(geolocationActions.setLocation(position));
  }, []);

  const handleGetWeather = useCallback(async () => {
    dispatch(getWeather());
  }, []);

  return { handleFetchLocation, statusLocation, handleGetWeather };
}
