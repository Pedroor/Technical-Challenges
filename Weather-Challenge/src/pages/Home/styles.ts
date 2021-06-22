import styled from "styled-components/native";
import { FlatList } from "react-native";
import { City } from "../../graphql/types";

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

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 65px 15px 15px 15px;
`;

export const InputArea = styled.View`
  padding: 0 15px;
  flex-direction: row;
  align-items: center;

  width: 100%;
  background-color: ${props => props.theme.colors.inputBackground};
  height: 37px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => theme.textVariants.input};
  padding: 0 10px;
  width: 90%;
  color: ${props => props.theme.colors.white};
`;

export const FavoriteListButton = styled.TouchableOpacity`
  height: 48px;
  width: 70%;
  border-width: 0.5;
  border-color: ${props => props.theme.colors.background};
  border-radius: 24px;
  align-self: center;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.inputBackground};
  ${({ theme }) => theme.textVariants.text};
  text-align: center;
`;

export const CityList = styled(FlatList as new () => FlatList<City>)`
  flex: 1;
  margin: 8px;
`;
