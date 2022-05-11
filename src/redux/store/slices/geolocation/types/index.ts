export interface GetLocationPayload {
  latitude: number;
  longitude: number;
}

export interface WeatherResponse {
  week: Week[];
  currentDay: CurrentDay;
}
export interface State {
  latitude: number;
  longitude: number;
  data: WeatherResponse;
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

interface Week {
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  moon_phase: number;
  moon_rise: number;
  moonset: number;
  pop: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}
export interface CurrentDay {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  rain: {
    [key: string]: number;
  };
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
