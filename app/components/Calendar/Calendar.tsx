import { FC } from "react";
import { Container, Text, Title } from "@mantine/core";
import dayjs from "dayjs";

import { KeyValue } from "@/app/components/KeyValue";
import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";

import { CalendarProps } from "./Calendar.typings";

export const Calendar: FC<CalendarProps> = ({
  toolbar,
  title,
  description,
  startDate,
}) => {
  return (
    <Container size="xl">
      <Title order={1}>{title}</Title>
      <KeyValue
        k="Начало календаря"
        v={dayjs(startDate).format("DD.MM.YYYY")}
      />
      <Text c="dimmed" mb="md">
        {description}
      </Text>

      <YearsCalendarFeature />
      {toolbar}
    </Container>
  );
};
