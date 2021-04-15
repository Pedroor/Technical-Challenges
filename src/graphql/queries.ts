import React from "react";
import { gql } from "@apollo/client";

export const GET_CITY_BY_NAME = gql`
  {
    getCityByName(name: "Fo", config: { units: metric }) {
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

export function generateQueryGetCityByName(city: string) {
  const query = `
    {
        getCityByName(name: ${city}, config: { units: metric }) {
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

  return query;
}
