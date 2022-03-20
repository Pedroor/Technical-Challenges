import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FavoriteList, Home } from '../screens';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Pokedex" component={Home} />
        <Stack.Screen name="FavoriteList" component={FavoriteList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
