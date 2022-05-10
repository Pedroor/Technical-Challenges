import React, { useCallback, useEffect } from "react";

import { useNavigation } from "@react-navigation/core";
import { Title } from "../../atomic/atoms";
import { RequestPermissions, LocalizationService } from "../../utils";
import { actions as geolocationActions } from "../../redux/store/slices/geolocation";
import { useReduxDispatch, useReduxSelector } from "../../hooks";
import { getWeather } from "../../redux/thunk/getWeather";

import Loading from "../../components/Loading";
import Button from "../../components/Button";
import * as S from "./styles";
import * as theme from "../../styles/theme";
import * as Icons from "../../assets";

function Initial() {
  const dispatch = useReduxDispatch();
  const { loading } = useReduxSelector((state) => state.geolocation);
  const { navigate } = useNavigation();

  useEffect(() => {
    RequestPermissions();
    async () => await handleFetchLocation();
  });

  const handleFetchLocation = useCallback(async () => {
    const position = await LocalizationService.getCurrentPosition();
    dispatch(geolocationActions.setLocation(position));
  }, []);

  const handleClickSingInButton = async () => {
    await dispatch(getWeather());
    navigate("Home");
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
