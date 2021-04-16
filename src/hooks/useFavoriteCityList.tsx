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
import { showMessage } from "react-native-flash-message";

type FavoriteCityListProviderProps = {
  children: ReactNode;
};

type FavoriteCityListContextData = {
  favoriteCityList: City[];
  handleAddCity: (city: City) => void;
  handleRemoveCity: (city: City) => void;
  isCityOnTheList: (cityName: string) => boolean;
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
  }, []);

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

  function isCityOnTheList(cityName: string) {
    let existingCity = favoriteCityList.find(
      cityInList => cityInList.name === cityName
    );

    if (!existingCity) {
      return false;
    } else {
      return true;
    }
  }

  async function handleAddCity(city: City) {
    console.log(city.name);
    let existingCity = favoriteCityList.find(
      cityInList => cityInList.name === city.name
    );
    if (!existingCity) {
      setFavoriteCityList([...favoriteCityList, city]);
      setStore(favoriteCityList);
      showMessage({
        message: `A cidade de ${city.name} foi adicionada a sua lista`,
        description: "Que tal consultar sua lista de cidades?",
        type: "success",
        icon: "auto",
        floating: true,
        duration: 3000,
        position: "top",
      });
    } else {
      showMessage({
        message: `A cidade de ${city.name} ja foi adicionada a sua lista!`,
        description: "Que tal consultar sua lista de cidades?",
        type: "warning",
        icon: "auto",
        floating: true,
        duration: 3000,
        position: "bottom",
      });
    }
  }

  function handleRemoveCity(city: City) {
    let newList: City[] = [];

    newList = favoriteCityList.filter(
      cityOnTheList => cityOnTheList.name !== city.name
    );
    AsyncStorage.setItem("@FavoriteCityList", JSON.stringify(newList));
    setFavoriteCityList(newList);

    showMessage({
      message: `A cidade de ${city.name} foi removida da sua`,
      description: "Que tal consultar sua lista de cidades?",
      type: "danger",
      icon: "auto",
      floating: true,
      duration: 3000,
      position: "top",
    });
  }

  return (
    <FavoriteCityContext.Provider
      value={{
        handleAddCity,
        isCityOnTheList,
        handleRemoveCity,
        favoriteCityList,
      }}
    >
      {children}
    </FavoriteCityContext.Provider>
  );
}

export function useFavoriteCityList() {
  const context = useContext(FavoriteCityContext);

  return context;
}
