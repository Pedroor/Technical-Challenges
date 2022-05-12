import React, { useCallback } from "react";
import { ListRenderItemInfo } from "react-native";
import { DayProps } from "../../redux/store/slices/weather/types";
import { DayCard } from "../DayCard";
import * as S from "./styles";

interface Props {
  data: DayProps[];
}

export function DaysList({ data }: Props) {
  const renderCard = useCallback(
    ({ item }: ListRenderItemInfo<DayProps>) => (
      <DayCard
        timestamp={item.dt}
        minTemp={item.temp.min}
        maxTemp={item.temp.max}
      />
    ),
    []
  );

  return (
    <S.FlatList
      data={data}
      renderItem={renderCard}
      showsHorizontalScrollIndicator={false}
    />
  );
}
