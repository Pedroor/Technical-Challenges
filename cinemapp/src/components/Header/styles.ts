import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputArea = styled.View`
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  width: 92%;
  background-color: ${props => props.theme.colors.lowGrey};
  height: 37px;
  border-radius: 10px;
`;

export const Input = styled.TextInput`
  ${({ theme }) => theme.textVariants.input};
  padding: 0 10px;
  width: 90%;
`;
