import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.blue800};
`;

export const CardContainer = styled.View`
  margin: 15px 15px 15px 15px;
  height: 300px;
  width: 92%;
  background-color: ${(props) => props.theme.colors.blue600};
  border-radius: 20px;
`;
export const Logo = styled.Image`
  width: 90px;
  height: 90px;
`;
export const Icon = styled.Image`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  margin-top: 6px;
`;
export const Touchable = styled.TouchableOpacity``;
