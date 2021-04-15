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

type FavoriteCityListContextData = {
  favoriteCityList: City[];
  handleAddCity: (city: City) => void;
};

export const FavoriteCityContext = createContext<FavoriteCityListContextData>(
  {} as FavoriteCityListContextData
);

export function FavoriteCityListProvider({
  children,
}: FavoriteCityListProviderProps) {
  const [favoriteCityList, setFavoriteCityList] = useState<City[]>([]);

  useEffect(() => {
    getStore();
  }, [favoriteCityList]);

  async function setStore(favoriteCity: City[]) {
    await AsyncStorage.setItem(
      "@FavoriteCityList",
      JSON.stringify(favoriteCity)
    );
  }
  async function getStore() {
    let cityList = await AsyncStorage.getItem("@FavoriteCityList");

    if (cityList) {
      setFavoriteCityList(JSON.parse(cityList));
    } else {
      return;
    }
  }

  async function handleAddCity(city: City) {
    let existingCity = favoriteCityList.find(
      cityInList => cityInList.name === city.name
    );
    if (existingCity) {
      setFavoriteCityList([...favoriteCityList, city]);
      setStore(favoriteCityList);
    } else {
      alert("Essa cidade ja foi adicionada!");
    }
  }

  return (
    <FavoriteCityContext.Provider value={{ handleAddCity, favoriteCityList }}>
      {children}
    </FavoriteCityContext.Provider>
  );
}

export function useFavoriteCityList() {
  const context = useContext(FavoriteCityContext);

  return context;
}
