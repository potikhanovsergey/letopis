import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { CreateEventFormFeature } from "@/app/features/CreateEventFormFeature";

export const useCreateEventModal = (date?: Date) => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "upsert-event",
      title: "Создать событие",
      size: "lg",
      children: (
        <CreateEventFormFeature date={date} onCreated={modals.closeAll} />
      ),
    });
  }, [date]);

  return onClick;
};
