import { FC } from "react";
import { Container, Stack } from "@mantine/core";

import { CalendarDescriptionFeature } from "@/app/features/CalendarDescriptionFeature";
import { CalendarEndDateFeature } from "@/app/features/CalendarEndDateFeature";
import { CalendarPreviewFeature } from "@/app/features/CalendarPreviewFeature";
import { CalendarStartDateFeature } from "@/app/features/CalendarStartDateFeature";
import { CalendarTitleFeature } from "@/app/features/CalendarTitleFeature";
import { TimespansLegendFeature } from "@/app/features/TimespansLegendFeature";
import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";

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
