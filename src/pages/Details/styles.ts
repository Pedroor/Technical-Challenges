import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

export const CityName = styled.Text`
  ${props => props.theme.textVariants.subtitle};
  color: ${props => props.theme.colors.white};
`;

export const TemperatureValue = styled.Text`
  ${props => props.theme.textVariants.title};
  color: ${props => props.theme.colors.white};
`;
