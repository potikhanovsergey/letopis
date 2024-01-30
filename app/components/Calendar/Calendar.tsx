import { FC } from "react";
import { Container } from "@mantine/core";

import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";

import { CalendarProps } from "./Calendar.typings";

export const Calendar: FC<CalendarProps> = ({ toolbar }) => {
  return (
    <Container size="xl">
      <YearsCalendarFeature />
      {toolbar}
    </Container>
  );
};
