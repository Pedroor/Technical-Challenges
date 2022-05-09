import React from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

function Button({ loading = false, title, ...rest }: ButtonProps) {
  return (
    <S.ButtonContainer>
      <S.SignInButton {...rest}>
        {loading ? (
          <S.ButtonLabel>Loading...</S.ButtonLabel>
        ) : (
          <S.ButtonLabel>{title}</S.ButtonLabel>
        )}
      </S.SignInButton>
    </S.ButtonContainer>
  );
}

export default Button;
