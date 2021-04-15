import React from "react";
import { gql } from "@apollo/client";

export const GET_CITY_BY_NAME = gql`
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
