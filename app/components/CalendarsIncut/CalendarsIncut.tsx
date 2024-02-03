import { FC } from "react";
import { SimpleGrid, Title } from "@mantine/core";

import { CalendarCard } from "@/app/components/CalendarCard";

import { CalendarsIncutProps } from "./CalendarsIncut.typings";

export const CalendarsIncut: FC<CalendarsIncutProps> = ({
  title,
  calendars,
}) => {
  return (
    <div>
      <Title order={2} mb="xs">
        {title}
      </Title>
      <SimpleGrid cols={4}>
        {calendars.map((calendar) => (
          <CalendarCard
            key={calendar.id}
            title={calendar.title}
            id={calendar.id}
            startDate={calendar.startDate}
            endDate={calendar.endDate}
            updatedAt={calendar.updatedAt}
            previewUrl={calendar.previewUrl}
            user={calendar.user}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};
