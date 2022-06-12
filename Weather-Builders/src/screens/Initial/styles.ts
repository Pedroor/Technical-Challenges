import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.blue800};
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 240px;
  height: 220px;
`;

export const Content = styled.View`
  padding-top: 80px;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  padding-top: 16px;
  margin: 0 15px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray400};
`;
