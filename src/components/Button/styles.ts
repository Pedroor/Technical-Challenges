import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  margin: 80px 15px 0px 15px;
  justify-content: center;
  align-items: center;
`;

export const SignInButton = styled.TouchableOpacity`
  height: 56px;
  width: 320px;
  border-radius: 6px;

  background-color: ${(props) => props.theme.colors.yellow};
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  font-weight: bold;
`;
