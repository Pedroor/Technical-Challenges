import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding-top: 75px;
`;

export const CityName = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({ theme }) => theme.textVariants.title};
  padding-top: 8px;
  text-align: center;
`;
export const CountryName = styled.Text`
  color: ${props => props.theme.colors.skeleton};
  ${({ theme }) => theme.textVariants.title};
  padding-top: 8px;
  text-align: center;
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

export const ChangeTemperatureButton = styled(RemoveCityFromListButton)`
  background-color: ${props => props.theme.colors.white};
  width: 70%;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  ${({ theme }) => theme.textVariants.text};
  text-align: center;
`;

export const Temperature = styled.Text`
  ${({ theme }) => theme.textVariants.temperatureDetails};
  color: ${props => props.theme.colors.white};
  padding-top: 50%;
  font-weight: bold;
  text-align: center;
`;
export const DetailsText = styled.Text`
  font-size: 20px;
  padding: 8px 20px 88px 20px;
  color: ${props => props.theme.colors.white};
`;
