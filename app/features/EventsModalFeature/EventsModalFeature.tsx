import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { events$, mode$ } from "@/app/stores";

export const EventsModalFeature: FC = () => {
  const events = useSelector(() => events$.get());
  const mode = useSelector(mode$);

  return (
    <div>
      <EventsTimeline events={events} mode={mode} />
    </div>
  );
};
