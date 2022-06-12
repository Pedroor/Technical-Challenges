import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.blue800};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const Title = styled.Text`
  padding-top: 32px;
  font-size: 36px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.yellow};
`;
