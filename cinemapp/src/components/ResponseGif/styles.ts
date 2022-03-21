import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Gif = styled.Image`
  width: 260px;
  height: 260px;
  margin-top: 100px;
`;

export const Title = styled.Text`
  ${({ theme }) => theme.textVariants.body1};
  text-align: center;
  padding: 20px 10px 10px 10px;
  font-weight: bold;
`;
