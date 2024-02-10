import { useCallback } from "react";
import { modals } from "@mantine/modals";
import { Event } from "@prisma/client";

import { UpdateEventFormFeature } from "@/app/features/UpdateEventFormFeature";

export const useUpdateEventModal = (event: Event) => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "upsert-event",
      title: "Редактировать событие",
      size: "lg",
      children: (
        <UpdateEventFormFeature event={event} onUpdated={modals.closeAll} />
      ),
    });
  }, [event]);

  return onClick;
};
