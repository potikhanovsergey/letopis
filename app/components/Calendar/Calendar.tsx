import { FC } from "react";
import { Box, Container } from "@mantine/core";

import { CalendarDescriptionFeature } from "@/app/features/CalendarDescriptionFeature";
import { CalendarEndDateFeature } from "@/app/features/CalendarEndDateFeature";
import { CalendarStartDateFeature } from "@/app/features/CalendarStartDateFeature";
import { CalendarTitleFeature } from "@/app/features/CalendarTitleFeature";
import { TimespansLegendFeature } from "@/app/features/TimespansLegendFeature";
import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";

import { CalendarProps } from "./Calendar.typings";

export const Calendar: FC<CalendarProps> = ({ toolbar }) => {
  return (
    <Container>
      <CalendarTitleFeature />
      <CalendarStartDateFeature />
      <CalendarEndDateFeature />
      <CalendarDescriptionFeature />
      <Box mt="sm" mb="md">
        <TimespansLegendFeature />
      </Box>

      <YearsCalendarFeature />
      {toolbar}
    </Container>
  );
};
