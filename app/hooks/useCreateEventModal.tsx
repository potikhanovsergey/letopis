import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { CreateEventFormFeature } from "@/app/features/CreateEventFormFeature";

export const useCreateEventModal = () => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "create",
      title: "Создать событие",
      size: "lg",
      children: <CreateEventFormFeature onCreated={modals.closeAll} />,
    });
  }, []);

  return onClick;
};
