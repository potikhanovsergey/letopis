import { FC } from "react";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { useCalendarStore } from "@/app/stores";

export const EventsModalFeature: FC = () => {
  const events = useCalendarStore((state) => state.events);
  const mode = useCalendarStore((state) => state.mode);

  return (
    <div>
      <EventsTimeline events={events} mode={mode} />
    </div>
  );
};
