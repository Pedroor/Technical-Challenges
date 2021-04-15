import React from "react";
import { Feather } from "@expo/vector-icons";
import { Container, Input, InputArea } from "./styles";

export function Header() {
  return (
    <Container>
      <InputArea>
        <Feather name="search" size={24} color="#f1f2f3" />

        <Input
          placeholder="Adicionar uma nova Cidade..."
          placeholderTextColor="#f1f2f3"
        />

        <Feather
          name="trash"
          size={24}
          color="#f1f2f3"
          style={{ paddingRight: 36 }}
        />
      </InputArea>
    </Container>
  );
}
