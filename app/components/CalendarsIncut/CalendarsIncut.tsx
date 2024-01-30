import { FC } from "react";
import { Title } from "@mantine/core";

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
      {calendars.map((calendar) => (
        <CalendarCard
          key={calendar.id}
          title={calendar.title}
          id={calendar.id}
        />
      ))}
    </div>
  );
};
