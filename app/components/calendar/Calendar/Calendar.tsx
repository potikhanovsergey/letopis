import { FC } from "react";
import { Container, Stack } from "@mantine/core";

import { CalendarDescriptionFeature } from "@/app/features/calendar/CalendarDescriptionFeature";
import { CalendarEndDateFeature } from "@/app/features/calendar/CalendarEndDateFeature";
import { CalendarPreviewFeature } from "@/app/features/calendar/CalendarPreviewFeature";
import { CalendarStartDateFeature } from "@/app/features/calendar/CalendarStartDateFeature";
import { CalendarTitleFeature } from "@/app/features/calendar/CalendarTitleFeature";
import { YearsCalendarFeature } from "@/app/features/calendar/YearsCalendarFeature";
import { TimespansLegendFeature } from "@/app/features/TimespansLegendFeature";

import { CalendarProps } from "./Calendar.typings";

export const Calendar: FC<CalendarProps> = ({ toolbar }) => {
  return (
    <Container>
      <Stack gap={4} mb="md">
        <CalendarTitleFeature />
        <CalendarPreviewFeature />
        <CalendarStartDateFeature />
        <CalendarEndDateFeature />
        <CalendarDescriptionFeature />

        <TimespansLegendFeature />
      </Stack>

      <YearsCalendarFeature />
      {toolbar}
    </Container>
  );
};
