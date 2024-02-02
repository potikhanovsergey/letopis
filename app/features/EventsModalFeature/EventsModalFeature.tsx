import { FC, useCallback } from "react";
import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { useCreateEventModal } from "@/app/hooks/useCreateEventModal";
import { useCalendarStore } from "@/app/stores";

export const EventsModalFeature: FC = () => {
  const openCreateEventModal = useCreateEventModal();
  const events = useCalendarStore((state) => state.events);
  const mode = useCalendarStore((state) => state.mode);

  const handleCreateClick = useCallback(() => {
    modals.close("events-modal");
    openCreateEventModal();
  }, [openCreateEventModal]);

  return (
    <div>
      {mode === "edit" && (
        <Button onClick={handleCreateClick} mb="md" fullWidth variant="outline">
          Создать новое событие
        </Button>
      )}
      <EventsTimeline events={events} mode={mode} />
    </div>
  );
};
