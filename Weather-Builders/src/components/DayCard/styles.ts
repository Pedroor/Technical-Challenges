import styled from "styled-components/native";

export const Container = styled.View`
  width: 126px;
  height: 175px;
  margin: 0 4px;
  padding: 8px;

  background: ${(props) => props.theme.colors.blue600};
  border-radius: 8px;

  justify-content: space-between;
`;

export const BoxContainer = styled.View`
  justify-content: flex-end;
`;
