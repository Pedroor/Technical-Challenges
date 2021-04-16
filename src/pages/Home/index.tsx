import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GetCityByName } from "../../graphql/types";
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

export function Home() {
  const [displayValue, setDisplayValue] = useState("");
  const [cityName, setCityName] = useState("");

  const { favoriteCityList, handleAddCity } = useFavoriteCityList();

  const { data, error, loading } = useQuery<GetCityByName>(GET_CITY_BY_NAME, {
    variables: { cityName },
  });
  useEffect(() => {
    if (data !== undefined) handleAddCity(data.getCityByName);
  }, [data]);

  if (loading) {
    return (
      <Container>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Carregando...
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Aguarde
          </Text>
        </View>
      </Container>
    );
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
