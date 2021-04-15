import { StatusBar } from "expo-status-bar";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client, errorLink } from "./src/services/apollo";
import { GetCityByName } from "./src/hooks/getCityByName";
import { Text, View } from "react-native";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <GetCityByName />
      </View>
    </ApolloProvider>
  );
}
