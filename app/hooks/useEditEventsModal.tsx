import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { EditEventsModalFeature } from "@/app/features/EditEventsModalFeature";

export const useEditEventsModal = () => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "edit-events",
      title: "События",
      size: "lg",
      children: <EditEventsModalFeature />,
    });
  }, []);

  return onClick;
};
