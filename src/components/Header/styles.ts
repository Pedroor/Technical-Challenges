import styled from "styled-components/native";

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

  width: 97%;
  background-color: ${props => props.theme.colors.inputBackground};
  height: 37px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => theme.textVariants.input};
  padding: 0 10px;
  width: 85%;
  color: ${props => props.theme.colors.white};
`;
