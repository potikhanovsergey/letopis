import { FC } from "react";
import {
  SimpleGrid,
  SimpleGridProps,
  Skeleton,
  Text,
  Title,
} from "@mantine/core";

import { CalendarCard } from "@/app/components/CalendarCard";

import { CalendarsIncutProps } from "./CalendarsIncut.typings";
import { range } from "@mantine/hooks";

const cols: SimpleGridProps["cols"] = { base: 1, sm: 2, lg: 4 };

export const CalendarsIncut: FC<CalendarsIncutProps> = ({
  title,
  calendars,
  loading,
}) => {
  if (loading) {
    return (
      <SimpleGrid cols={cols}>
        {range(0, 16).map((item) => (
          <Skeleton visible h={200} key={item} />
        ))}
      </SimpleGrid>
    );
  }

  return (
    <div>
      {title && (
        <Title order={2} mb="xs">
          {title}
        </Title>
      )}
      {calendars.length > 0 ? (
        <SimpleGrid cols={cols}>
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
      ) : (
        <Text c="dimmed">Ничего не нашлось</Text>
      )}
    </div>
  );
};
