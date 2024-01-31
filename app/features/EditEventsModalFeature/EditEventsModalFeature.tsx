import { FC, useCallback } from "react";
import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";

import { useCreateEventModal } from "@/app/hooks/useCreateEventModal";

export const EditEventsModalFeature: FC = () => {
  const openCreateEventModal = useCreateEventModal();

  const handleCreateClick = useCallback(() => {
    modals.close("edit-events");
    openCreateEventModal();
  }, [openCreateEventModal]);

  return (
    <div>
      <Button onClick={handleCreateClick} fullWidth variant="outline">
        Создать новое событие
      </Button>
    </div>
  );
};
