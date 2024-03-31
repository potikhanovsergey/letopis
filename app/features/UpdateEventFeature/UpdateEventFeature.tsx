import { FC } from "react";
import { Button } from "@mantine/core";

import { useUpdateEventModal } from "@/app/hooks/useUpdateEventModal";

import { UpdateEventFeatureProps } from "./UpdateEventFeature.typings";

export const UpdateEventFeature: FC<UpdateEventFeatureProps> = ({ event }) => {
  const openUpdateEventModal = useUpdateEventModal(event);

  return (
    <Button size="compact-sm" onClick={openUpdateEventModal}>
      Редактировать
    </Button>
  );
};
