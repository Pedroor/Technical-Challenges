import Config from "react-native-config";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    appid: Config.OPEN_WEATHER_API_KEY,
  },
});

export default api;
