export interface GetLocationPayload {
  latitude: number;
  longitude: number;
}

export interface WeatherResponse {
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
export interface State {
  latitude: number;
  longitude: number;
}
