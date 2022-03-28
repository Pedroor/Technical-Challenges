import styled from 'styled-components/native';
import { s, ms } from 'react-native-size-matters';

type TitleProps = {
  color: boolean;
};

export const Container = styled.View``;
export const Card = styled.View`
  width: 90%;
  height: ${s(240)};

  flex-direction: row;

  border-radius: ${s(40)};
  margin-bottom: ${ms(10)};
  margin-left: ${ms(10)};
`;

export const CardContent = styled.View`
  width: 50%;
  height: 50%;

  margin-top: 10%;

  justify-content: center;
  align-items: center;
`;

export const TitleName = styled.Text<TitleProps>`
  ${({ theme }) => theme.textVariants.body1};
  color: ${props =>
    props.color ? props.theme.colors.blue : props.theme.colors.black}
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
