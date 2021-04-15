import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { City } from "../graphql/types";
import { Alert } from "react-native";

type FavoriteCityListProviderProps = {
  children: ReactNode;
};

type FavoriteCityListContextData = {};

export const FavoriteCityContext = createContext<FavoriteCityListContextData>(
  {} as FavoriteCityListContextData
);

export function FavoriteCityListProvider({
  children,
}: FavoriteCityListProviderProps) {
  const [favoriteCityList, setFavoriteCityList] = useState<City[]>([]);

  async function setStore(favoriteCity: City[]) {
    await AsyncStorage.setItem(
      "@FavoriteCityList",
      JSON.stringify(favoriteCity)
    );
  }

  return (
    <FavoriteCityContext.Provider value={{}}>
      {children}
    </FavoriteCityContext.Provider>
  );
}

export function useFavoriteCityList() {
  const context = useContext(FavoriteCityContext);

  return context;
}
