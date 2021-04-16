import React, { useEffect, useState } from "react";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { useFavoriteCityList } from "../../hooks/useFavoriteCityList";
import { City } from "../../graphql/types";
import { View, Alert, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  RemoveCityFromListButton,
  ButtonText,
  CityName,
  CountryName,
  Temperature,
  DetailsText,
  ChangeTemperatureButton,
} from "./styles";
type ParamList = {
  Details: {
    city: City;
  };
};

export function Details() {
  const navigation = useNavigation();
  const [isCelsius, setIsCelsius] = useState(true);
  const route = useRoute<RouteProp<ParamList, "Details">>();
  const city = route.params.city;

  const [celsius, setCelsius] = useState(city.weather.temperature.actual);
  const [fah, setFah] = useState(0);
  const { handleRemoveCity } = useFavoriteCityList();

  useEffect(() => {
    console.log(route.params.city);
  }, []);

  function handleToggleButton() {
    Alert.alert(
      `Vocẽ deseja remover a cidade ${city.name} ?`,
      "",

      [
        {
          text: "Não",
        },
        {
          text: "Sim",
          onPress: () => {
            handleRemoveCity(city), navigation.goBack();
          },
        },
      ],
      { cancelable: true }
    );
  }

  function handleChangeTemperatureToC(temperature: number) {
    setIsCelsius(true);
    let c = ((temperature - 32) * 5) / 9;
    setCelsius(c);
  }

  function handleChangeTemperatureToF(temperature: number) {
    setIsCelsius(false);
    let f = (temperature * 9) / 5 + 32;
    setFah(f);
  }

  return (
    <Container>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AntDesign
          name="arrowleft"
          size={28}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CityName>{city.name}</CityName>
          <CityName>, </CityName>
          <CountryName>{city.country}</CountryName>
        </View>
        <View />
      </View>
      {isCelsius ? (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Temperature>{celsius.toFixed()}° C</Temperature>
          <ChangeTemperatureButton
            onPress={() => handleChangeTemperatureToF(celsius)}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Alternar Temperatura
            </Text>
          </ChangeTemperatureButton>
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Temperature>{fah.toFixed()}° F</Temperature>
          <ChangeTemperatureButton
            onPress={() => handleChangeTemperatureToC(fah)}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Alternar Temperatura
            </Text>
          </ChangeTemperatureButton>
        </View>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          paddingTop: 80,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="water"
            size={24}
            color="white"
            style={{ paddingTop: 8 }}
          />
          <DetailsText>{city.weather.wind.deg.toFixed()}%</DetailsText>
        </View>
        <View style={{ flexDirection: "row" }}>
          <DetailsText>{city.weather.wind.speed.toFixed()}km/h</DetailsText>
          <Feather
            name="wind"
            size={24}
            color="white"
            style={{ paddingTop: 8, paddingRight: 8 }}
          />
        </View>
      </View>
      <RemoveCityFromListButton onPress={() => handleToggleButton()}>
        <ButtonText>Remover cidade da lista</ButtonText>
      </RemoveCityFromListButton>
    </Container>
  );
}
