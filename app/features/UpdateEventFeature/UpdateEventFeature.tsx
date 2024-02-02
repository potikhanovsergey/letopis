import { FC, useCallback } from "react";
import { Button } from "@mantine/core";

import { useUpdateEventModal } from "@/app/hooks/useUpdateEventModal";

import { UpdateEventFeatureProps } from "./UpdateEventFeature.typings";

export const UpdateEventFeature: FC<UpdateEventFeatureProps> = ({ event }) => {
  const updateEventModal = useUpdateEventModal(event);

  const handleClick = useCallback(() => {
    updateEventModal();
  }, [updateEventModal]);

  return (
    <Button onClick={handleClick} variant="subtle" size="compact-xs">
      Редактировать
    </Button>
  );
};
