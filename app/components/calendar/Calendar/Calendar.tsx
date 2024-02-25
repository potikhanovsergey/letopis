import { FC } from "react";
import { Container, Stack, Title } from "@mantine/core";

import CalendarDescription from "@/app/c/features/CalendarDescription";
import CalendarEndDate from "@/app/c/features/CalendarEndDate";
import CalendarPreview from "@/app/c/features/CalendarPreview";
import CalendarStartDate from "@/app/c/features/CalendarStartDate";
import CalendarTitle from "@/app/c/features/CalendarTitle";
import YearsCalendar from "@/app/c/features/YearsCalendar";
import { TimespansLegendFeature } from "@/app/features/TimespansLegendFeature";

import { CalendarProps } from "./Calendar.typings";
import CalendarComponents from "@/app/c/features/CalendarComments";

export const Calendar: FC<CalendarProps> = ({ toolbar }) => {
  return (
    <Container>
      <Stack gap={4} mb="md">
        <CalendarTitle />
        <CalendarPreview />
        <CalendarStartDate />
        <CalendarEndDate />
        <CalendarDescription />

        <TimespansLegendFeature />
      </Stack>

      <YearsCalendar />

      <CalendarComponents mt="md" />
      {toolbar}
    </Container>
  );
};
