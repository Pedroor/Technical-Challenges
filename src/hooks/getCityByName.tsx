import React, { useEffect } from "react";
import { View } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { errorLink } from "../services/apollo";
import { GET_CITY_BY_NAME } from "../graphql/queries";
import { City } from "../graphql/types";

export function GetCityByName() {
  const { error, loading, data } = useQuery<City>(GET_CITY_BY_NAME);

  useEffect(() => {
    console.log(data);
    console.log(errorLink);
    console.log("ERROR", error?.message);
  }, [data]);

  return <View />;
}
