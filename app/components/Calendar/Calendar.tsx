import { FC } from "react";
import { Container, Text, Title } from "@mantine/core";

import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";

import { CalendarProps } from "./Calendar.typings";

export const Calendar: FC<CalendarProps> = ({
  toolbar,
  title,
  description,
}) => {
  return (
    <Container size="xl">
      <Title order={1}>{title}</Title>
      <Text c="dimmed" mb="md">
        {description}
      </Text>

      <YearsCalendarFeature />
      {toolbar}
    </Container>
  );
};
