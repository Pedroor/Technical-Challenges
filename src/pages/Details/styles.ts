import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const CityName = styled.Text`
  ${props => props.theme.textVariants.subtitle};
  color: ${props => props.theme.colors.white};
`;

export const TemperatureValue = styled.Text`
  ${props => props.theme.textVariants.title};
  color: ${props => props.theme.colors.white};
`;

export const RemoveCityFromListButton = styled.TouchableOpacity`
  height: 48px;
  width: 90%;
  border-width: 0.5;
  border-color: ${props => props.theme.colors.background};
  border-radius: 24px;
  align-self: center;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #bd190d;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({ theme }) => theme.textVariants.text};
  text-align: center;
`;
