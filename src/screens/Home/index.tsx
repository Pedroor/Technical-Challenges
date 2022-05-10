import React from "react";
import { useReduxSelector, useReduxDispatch } from "../../hooks";
import { useNavigation } from "@react-navigation/core";
import { getWeather } from "../../redux/thunk/getWeather";
import { formatTemperature } from "../../utils";
import { Title, Box } from "../../atomic/atoms";
import Button from "../../components/Button";

import * as S from "./styles";
import * as theme from "../../styles/theme";
import * as Icons from "../../assets";

function Home() {
  const dispatch = useReduxDispatch();
  const { goBack } = useNavigation();
  const {
    sys: { country },
    main,
    name,
  } = useReduxSelector((state) => state.geolocation.data);
  const { loading } = useReduxSelector((state) => state.geolocation);

  const handleCallRefresh = async () => await dispatch(getWeather());

  return (
    <S.Container>
      <Box justify="space-between" marginT={15}>
        <S.Touchable onPress={goBack}>
          <S.Icon source={Icons.leftarrow} />
        </S.Touchable>
        <Title
          pt={10}
          fontSize={28}
          text-align="center"
          color={theme.default.colors.purple400}
          fontWeight="bold"
        >
          Weather Forecast
        </Title>
        <Title />
      </Box>

      <Box
        margin={15}
        height={300}
        width="92%"
        radius={20}
        bgColor={theme.default.colors.blue600}
        direction={true}
      >
        <Title
          pt={15}
          ml={25}
          fontSize={30}
          color={theme.default.colors.white}
          fontWeight="bold"
        >
          Today
        </Title>
        <Box justify="space-around" marginT={30} marginL={30}>
          <Title
            mr={25}
            pt={20}
            fontSize={44}
            color={theme.default.colors.white}
            fontWeight="bold"
          >
            {formatTemperature({ temperature: main.temp })}
          </Title>

          <S.Logo source={Icons.sun} />
        </Box>
        <Box marginT={40}>
          <S.Icon source={Icons.location} />
          <Title
            pt={14}
            ml={10}
            fontSize={22}
            color={theme.default.colors.white}
          >
            {name} {country && `, ${country}`}
          </Title>
        </Box>
      </Box>
      <Button title="Refresh" onPress={handleCallRefresh} loading={loading} />
    </S.Container>
  );
}

export default Home;
