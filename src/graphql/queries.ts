import React from "react";
import { useQuery, gql } from "@apollo/client";

interface City {
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

const GET_CITY_BY_NAME = gql`
  {
    getCityByName(name: "Fortaleza", config: { units: metric }) {
      name
      country
      coord {
        lon
        lat
      }
      weather {
        timestamp
        summary {
          title
          description
          icon
        }
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
      }
    }
  }
`;
