import React, { useEffect } from "react";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { useFavoriteCityList } from "../../hooks/useFavoriteCityList";
import { City } from "../../graphql/types";
import { View, Alert } from "react-native";

import { Container, RemoveCityFromListButton, ButtonText } from "./styles";
type ParamList = {
  Details: {
    city: City;
  };
};

export function Details() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Details">>();
  const city = route.params.city;
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

  return (
    <Container>
      <RemoveCityFromListButton onPress={() => handleToggleButton()}>
        <ButtonText>Remover cidade da lista</ButtonText>
      </RemoveCityFromListButton>
    </Container>
  );
}
