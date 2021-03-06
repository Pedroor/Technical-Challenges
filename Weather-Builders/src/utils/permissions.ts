import {
  PERMISSIONS,
  check,
  request,
  RESULTS,
  PermissionStatus,
} from "react-native-permissions";
import { Platform } from "react-native";

async function RequestPermissions() {
  let res: PermissionStatus = "unavailable";

  if (Platform.OS === "ios") {
    res = await check(PERMISSIONS?.IOS.LOCATION_WHEN_IN_USE);

    if (res !== RESULTS.GRANTED) {
      res = await request(PERMISSIONS?.IOS.LOCATION_WHEN_IN_USE);
    }
  }
  if (Platform.OS === "android") {
    console.log("OLA MUNDO");
    res = await check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION);
    console.log("RESS", res);
    if (res === RESULTS.DENIED) {
      res = await request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION, {
        title: "Location Permission",
        message: "Allow Location Permission.",
        buttonPositive: "OK",
      });
    }
  }

  return res;
}

export default RequestPermissions;
