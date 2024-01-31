import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { label } from "@/app/features/EditEventsButtonFeature/EditEventsButtonFeature.const";
import { EditEventsModalFeature } from "@/app/features/EditEventsModalFeature";

export const useEditEventsModal = () => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "edit-events",
      title: label,
      size: "lg",
      children: <EditEventsModalFeature />,
    });
  }, []);

  return onClick;
};
