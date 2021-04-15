import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Montserrat_300Light,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import FlashMessage from "react-native-flash-message";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import { ApolloProvider, from } from "@apollo/client";
import { FavoriteCityListProvider } from "./src/hooks/useFavoriteCityList";
import Routes from "./src/routes";
import { client, errorLink } from "./src/services/apollo";
import { GetCityByName } from "./src/hooks/getCityByName";
import { Text, View } from "react-native";
import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });
  if (!fontsLoaded) return null;
  return (
    <ApolloProvider client={client}>
      <FavoriteCityListProvider>
        <ThemeProvider theme={theme}>
          <Routes />
          <FlashMessage ForwardRef="FlashMessage" />
        </ThemeProvider>
      </FavoriteCityListProvider>
    </ApolloProvider>
  );
}
