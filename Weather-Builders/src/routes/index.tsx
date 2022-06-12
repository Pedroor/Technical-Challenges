import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Initial } from "../screens";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
