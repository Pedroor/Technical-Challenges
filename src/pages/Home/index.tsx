import React, { useEffect, useState, useRef } from "react";
import { View, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { City, GetCityByName } from "../../graphql/types";
import { GET_CITY_BY_NAME } from "../../graphql/queries";
import { useFavoriteCityList } from "../../hooks/useFavoriteCityList";
import { CityCard } from "../../components/CityCard";

import {
  Container,
  Input,
  InputArea,
  InputContainer,
  FavoriteListButton,
  ButtonText,
  CityList,
} from "./styles";

interface InputReference extends TextInput {
  value: string;
}

export function Home() {
  const inputRef = useRef(null);
  const [displayValue, setDisplayValue] = useState("");
  const [cityName, setCityName] = useState("");

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

  function handlePressButton() {
    setCityName(displayValue);
    if (data !== undefined) handleAddCity(data.getCityByName);
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
          handlePressButton();
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

      <CityList
        data={favoriteCityList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 12, paddingHorizontal: 12 }}
        keyExtractor={city => String(city.name)}
        numColumns={2}
        renderItem={({ item: city }) => {
          return <CityCard city={city} />;
        }}
      />
    </Container>
  );
}
