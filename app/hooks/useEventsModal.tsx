import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { EventsModalFeature } from "@/app/features/EventsModalFeature";

export const useEventsModal = () => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "events-modal",
      title: "События",
      size: "lg",
      children: <EventsModalFeature />,
    });
  }, []);

  return onClick;
};
