import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { mode$ } from "@/app/stores";
import { events$ } from "@/app/stores/calendar/computed";

export const EventsModalFeature: FC = () => {
  const events = useSelector(events$);
  const mode = useSelector(mode$);

  return (
    <div>
      <EventsTimeline events={events} mode={mode} />
    </div>
  );
};
