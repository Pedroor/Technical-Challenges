import React from "react";
import * as S from "./styles";
import * as Icons from "../../assets";

function Loading() {
  return (
    <S.Container>
      <S.Logo source={Icons.weather} />
      <S.Title>Carregando...</S.Title>
    </S.Container>
  );
}

export default Loading;
