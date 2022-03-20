import styled from 'styled-components/native';
import { s } from 'react-native-size-matters';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PaginateButton = styled.TouchableOpacity``;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const PaginateLabel = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  padding-top: ${s(60)};
  padding-left: ${s(10)};
  font-weight: bold;
`;
