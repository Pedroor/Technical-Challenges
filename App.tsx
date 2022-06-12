import React from "react";
import { View, Text } from "react-native";
import { ThemeProvider } from "styled-components";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import Routes from "./src/routes";
import theme from "./src/styles/theme";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
