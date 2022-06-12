import React from "react";
import { Title, Box } from "../../atomic/atoms";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

function Button({ loading = false, title, ...rest }: ButtonProps) {
  return (
    <Box
      marginT={80}
      marginL={15}
      marginR={15}
      marginB={0}
      justify="center"
      alignItems="center"
    >
      <S.SignInButton {...rest}>
        {loading ? (
          <Title fontSize={18} fontWeight="bold">
            Loading...
          </Title>
        ) : (
          <Title>{title}</Title>
        )}
      </S.SignInButton>
    </Box>
  );
}

export default Button;
