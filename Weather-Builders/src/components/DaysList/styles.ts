import styled from "styled-components/native";

export const FlatList = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: {
    alignItems: "flex-end",
  },
})`
  max-height: 200px;
  padding: 0 8px;
`;
