import React from "react";
import { View } from "react-native";
import { City } from "../../graphql/types";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  Container,
  CardContainer,
  CityName,
  Temperature,
  CountryName,
  DetailsText,
} from "./styles";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Container>
      <CardContainer>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <CityName>{city.name}</CityName>
          <CityName>, </CityName>
          <CountryName>{city.country}</CountryName>
        </View>
        <Temperature>
          {city.weather.temperature.actual.toFixed()}° C
        </Temperature>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="water"
              size={18}
              color="black"
              style={{ paddingTop: 8 }}
            />
            <DetailsText>{city.weather.wind.deg.toFixed()}%</DetailsText>
          </View>
          <View style={{ flexDirection: "row" }}>
            <DetailsText>{city.weather.wind.speed.toFixed()}km/h</DetailsText>
            <Feather
              name="wind"
              size={18}
              color="black"
              style={{ paddingTop: 8, paddingRight: 3 }}
            />
          </View>
        </View>
      </CardContainer>
    </Container>
  );
}
