import React from "react";
import {
  Montserrat_300Light,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { StatusBar } from "react-native";
import FlashMessage from "react-native-flash-message";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components";
import { ApolloProvider, from } from "@apollo/client";
import { FavoriteCityListProvider } from "./src/hooks/useFavoriteCityList";
import Routes from "./src/routes";
import { client } from "./src/services/apollo";
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
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.background}
            translucent={true}
            hidden={false}
          />
          <Routes />
          <FlashMessage ForwardRef="FlashMessage" />
        </ThemeProvider>
      </FavoriteCityListProvider>
    </ApolloProvider>
  );
}
