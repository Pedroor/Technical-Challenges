export interface State {
  currentDay: CurrentDayProps;
  week: DayProps[];
  loading: boolean;
  error: boolean;
  errorMessage: string;
}

export interface GetLocationPayload {
  latitude: number;
  longitude: number;
}

export interface WeatherResponse {
  currentDay: CurrentDayProps;
  week: DayProps[];
}

export interface CurrentDayProps {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  name: string;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface DayProps {
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  moon_phase: number;
  moon_rise: number;
  dt: number;
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
