import styled from 'styled-components/native';
import { s, ms } from 'react-native-size-matters';

export const Container = styled.View``;
export const Card = styled.View`
  width: 90%;
  height: ${s(240)};

  border-radius: ${s(40)};
  margin-bottom: ${ms(30)};
  margin-left: ${ms(10)};
`;

export const CardContent = styled.View`
  width: 100%;
  height: 100%;
`;

export const TitleName = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  text-align: center;
  padding: 20px 10px 10px 10px;
  font-weight: bold;
`;

export const Label = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  padding-top: ${s(60)};
  padding-left: ${s(10)};
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageCard = styled.Image`
  width: ${s(180)};
  height: ${s(220)};
  border-radius: 15px;
`;

export const DetailsButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  bottom: ${s(0)};
  top: ${s(-15)};
`;
