import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Button as ButtonComponent, ButtonTitle } from './styles';
interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isRemoved: false;
}

const Button: React.FC<ButtonProps> = ({ isRemoved, title, ...rest }) => {
  return (
    <ButtonComponent isRemoved={isRemoved} {...rest}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonComponent>
  );
};

export default Button;
