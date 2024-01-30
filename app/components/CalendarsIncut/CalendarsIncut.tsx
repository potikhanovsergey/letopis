import { FC } from "react";
import { Title } from "@mantine/core";

import { CalendarsIncutProps } from "./CalendarsIncut.typings";

export const CalendarsIncut: FC<CalendarsIncutProps> = ({
  title,
  calendars,
}) => {
  return (
    <div>
      <Title order={2} mb="md">
        {title}
      </Title>
      {calendars.map((calendar) => (
        <div key={calendar.id}>{calendar.title}</div>
      ))}
    </div>
  );
};
