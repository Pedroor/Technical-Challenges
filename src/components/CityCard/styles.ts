import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const CardContainer = styled.View`
  width: 95%;
  height: 100px;
  margin: 8px;
  border-radius: 12px;
  border-width: 0.5px;
  background-color: ${props => props.theme.colors.white};
`;

export const CityName = styled.Text`
  color: ${props => props.theme.colors.background};
  ${({ theme }) => theme.textVariants.text};
  padding-top: 8px;
  text-align: center;
`;
export const CountryName = styled.Text`
  color: ${props => props.theme.colors.skeleton};
  ${({ theme }) => theme.textVariants.text};
  padding-top: 8px;
  text-align: center;
`;

export const Temperature = styled.Text`
  ${({ theme }) => theme.textVariants.subtitle};
  color: ${props => props.theme.colors.background};
  padding-top: 16px;
  font-weight: bold;
  text-align: center;
`;

export const DetailsText = styled.Text`
  font-size: 14px;
  padding: 8px 5px 0 0;
`;
