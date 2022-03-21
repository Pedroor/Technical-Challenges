import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-top: 40px;
  background-color: #fff;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 15px;
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

export const Loading = styled.Image`
  width: 360px;
  height: 360px;
`;

export const LoadingContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin-top: 40px;
  align-self: center;
`;
