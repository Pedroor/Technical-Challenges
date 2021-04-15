import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { useQuery } from "@apollo/client";
import { City } from "../../graphql/types";
import { GET_CITY_BY_NAME } from "../../graphql/queries";
import { useFavoriteCityList } from "../../hooks/useFavoriteCityList";

import { Container } from "./styles";

export function Home() {
  const [cityName, setciName] = useState("Pernambuco");

  const { data, error, loading } = useQuery<City>(GET_CITY_BY_NAME, {
    variables: { cityName },
  });

  useEffect(() => {
    console.log("DATA", data);
  }, [data]);

  return (
    <Container>
      <Header />
    </Container>
  );
}
