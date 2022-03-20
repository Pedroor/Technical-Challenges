import styled from 'styled-components/native';

type ButtonProps = {
  isRemoved: boolean;
};

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 90%;
  height: 60px;
  align-items: center;
  justify-content: center;

  margin-top: 15px;
  margin-bottom: 15px;
  border-width: 0.5;
  border-radius: 28px;
  background-color: ${props =>
    props.isRemoved ? props?.theme?.colors?.title : props?.theme?.colors?.blue};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => theme.textVariants.body2};
  font-size: 18px;
  color: ${props => props.theme.colors?.white};
`;
