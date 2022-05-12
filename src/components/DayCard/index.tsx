import React from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import * as S from "./styles";
import { formatTemperature } from "../../utils";
import { Box, Title } from "../../atomic/atoms";
import theme from "../../styles/theme";

interface Props {
  timestamp: number;
  minTemp: number;
  maxTemp: number;
}

export function DayCard({ timestamp, minTemp, maxTemp }: Props) {
  return (
    <S.Container>
      <Title color={theme.colors.white} align="center" fontWeight="bold">
        {format(timestamp * 1000, "EEEE", { locale: enUS })}
      </Title>

      <S.BoxContainer>
        <Box paddingT={4} paddingB={4}>
          <Title
            color={theme.colors.white}
            align="center"
            fontWeight="bold"
            fontSize={14}
          >
            min
          </Title>
          <Title
            color={theme.colors.white}
            align="center"
            fontWeight="bold"
            fontSize={28}
            mb={8}
            ml={12}
          >
            {formatTemperature(minTemp)}
          </Title>
        </Box>

        <Box paddingT={4} paddingB={4}>
          <Title
            color={theme.colors.white}
            align="center"
            fontWeight="bold"
            fontSize={14}
          >
            max
          </Title>
          <Title
            color={theme.colors.white}
            align="center"
            fontWeight="bold"
            fontSize={28}
            ml={12}
          >
            {formatTemperature(maxTemp)}
          </Title>
        </Box>
      </S.BoxContainer>
    </S.Container>
  );
}
