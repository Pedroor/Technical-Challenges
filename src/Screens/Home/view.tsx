import React from "react";
import { Text } from "react-native";
import { HomeViewProps } from "./model";
import { Header, EnterpriseCard } from "../../components";
import * as S from "./styles";
import enterprise from "../../redux/ducks/enterprise";

export function HomeView({
  enterprises,
  filteredEnterprises,
  isLoading,
  isError,
  isFilter,
  isFilterError,
  fetchEnterprises,
  fetchEnterpriseById,
  fetchEnterprisesByFilter,
}: HomeViewProps) {
  return (
    <S.SafeContainer>
      <Header />
      <S.EnterpriseList
        data={enterprises}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 12, paddingHorizontal: 12 }}
        keyExtractor={(enterprise) => String(enterprise.id)}
        numColumns={2}
        renderItem={({ item: enterprise }) => {
          return (
            <EnterpriseCard
              enterprise={enterprise}
              getDetails={fetchEnterpriseById}
              isLoading={isLoading}
            />
          );
        }}
      />
    </S.SafeContainer>
  );
}
