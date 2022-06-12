import styled from "styled-components/native";

export const SignInButton = styled.TouchableOpacity`
  height: 56px;
  width: 320px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.yellow};
  justify-content: center;
  align-items: center;
`;
