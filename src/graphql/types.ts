export interface GetCityByName {
  getCityByName: City;
}

export interface City {
  name: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };

  weather: {
    timestamp: number;
    summary: Summary;
    temperature: Temperature;
    wind: Winds;
    clouds: Clouds;
  };
}

interface Clouds {
  all: number;
  visibility: number;
  humidity: number;
}

interface Summary {
  title: string;
  description: string;
  icon: string;
}
interface Winds {
  speed: number;
  deg: number;
}

interface Temperature {
  actual: number;
  feelsLike: number;
  min: number;
  max: number;
}
