import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Text } from "@mantine/core";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { calendarData$, mode$ } from "@/app/stores";

export const EventsModalFeature: FC = () => {
  const events = useSelector(() => calendarData$.events.get());
  const mode = useSelector(mode$);

  if (events.length === 0)
    return <Text c="dimmed">В этом календаре еще нет промежутков.</Text>;

  return <EventsTimeline events={events} mode={mode} />;
};
