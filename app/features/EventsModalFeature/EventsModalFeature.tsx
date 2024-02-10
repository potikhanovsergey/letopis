import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { calendarData$, mode$ } from "@/app/stores";

export const EventsModalFeature: FC = () => {
  const events = useSelector(() => calendarData$.events.get());
  const mode = useSelector(mode$);

  return <EventsTimeline events={events} mode={mode} />;
};
