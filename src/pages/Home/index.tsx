import React, { useEffect, useState, useRef } from "react";
import { View, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { City, GetCityByName } from "../../graphql/types";
import { GET_CITY_BY_NAME } from "../../graphql/queries";
import { useFavoriteCityList } from "../../hooks/useFavoriteCityList";

import {
  Container,
  Input,
  InputArea,
  InputContainer,
  FavoriteListButton,
  ButtonText,
} from "./styles";

interface InputReference extends TextInput {
  value: string;
}

export function Home() {
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState("");
  const [cityName, setCityName] = useState("Madrid");
  const {
    favoriteCityList,
    handleAddCity,
    isCityOnTheList,
  } = useFavoriteCityList();

  const { data, error, loading } = useQuery<GetCityByName>(GET_CITY_BY_NAME, {
    variables: { cityName },
  });

  if (loading) {
    console.log("LOADING...");
  }

  useEffect(() => {
    console.log("LISTA", favoriteCityList);
    if (data !== undefined) handleAddCity(data.getCityByName);
    console.log("DISPLAY", displayValue);
  }, [data]);

  function handlePressButton(cityName: string) {
    let conditional = isCityOnTheList(cityName);
    console.log(conditional);

    if (conditional) {
      alert("Essa cidade ja foi adicionada!");
    } else {
      setCityName(displayValue);
    }
  }

  return (
    <Container>
      <InputContainer>
        <InputArea>
          <Input
            ref={inputRef}
            value={displayValue}
            placeholder="Nome da cidade"
            placeholderTextColor="#f1f2f3"
            onChangeText={value => setDisplayValue(value)}
          />
        </InputArea>
      </InputContainer>
      <FavoriteListButton
        onPress={() => {
          handlePressButton(data?.getCityByName.name || "");
        }}
      >
        <ButtonText>Adicionar cidade</ButtonText>
        <FontAwesome5
          name="city"
          size={24}
          color="#423784"
          style={{ paddingLeft: 10 }}
        />
      </FavoriteListButton>
    </Container>
  );
}
