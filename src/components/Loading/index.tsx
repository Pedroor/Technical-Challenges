import React from "react";
import * as S from "./styles";
import * as Icons from "../../assets";
import theme from "../../styles/theme";
import { Title } from "../../atomic/atoms";

function Loading() {
  return (
    <S.Container>
      <S.Logo source={Icons.weather} />
      <Title
        pt={32}
        fontSize={36}
        fontWeight="bold"
        color={theme.colors.yellow}
      >
        Loading...
      </Title>
    </S.Container>
  );
}

export default Loading;
