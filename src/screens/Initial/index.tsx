import React, { useEffect } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Title } from "../../atomic/atoms";
import { RequestPermissions } from "../../utils";
import { useFetchLocation } from "../../hooks/useFetchLocation";
import { useReduxSelector } from "../../hooks";

import Loading from "../../components/Loading";
import Button from "../../components/Button";
import * as S from "./styles";
import * as theme from "../../styles/theme";
import * as Icons from "../../assets";

function Initial() {
  const { handleFetchLocation, statusLocation, handleGetWeather } =
    useFetchLocation();
  const { loading } = useReduxSelector((state) => state.weather);
  const { navigate } = useNavigation();

  useEffect(() => {
    RequestPermissions();
    async () => await handleFetchLocation();
  });

  const handleClickSingInButton = async () => {
    if (statusLocation === "denied") {
      Alert.alert(
        "Weather Forecast",
        "You need enabled location in this application!"
      );
    } else {
      await handleGetWeather();
      navigate("Home");
    }
  };

  if (loading) return <Loading />;

  return (
    <S.Container>
      <S.Logo source={Icons.sun} />
      <S.Content>
        <Title
          color={theme.default.colors.white}
          fontWeight="bold"
          fontSize={34}
          pt={8}
        >
          Weather
        </Title>
        <Title
          color={theme.default.colors.yellow}
          fontWeight="bold"
          fontSize={34}
          pt={8}
        >
          News & Feed
        </Title>
        <Title
          fontSize={14}
          pt={16}
          color={theme.default.colors.gray400}
          ml={15}
          mr={15}
        >
          How about checking the weather wherever you are? With Weather you can
          do all this and much more.
        </Title>

        <Button onPress={handleClickSingInButton} title="Get Started" />
      </S.Content>
    </S.Container>
  );
}

export default Initial;
