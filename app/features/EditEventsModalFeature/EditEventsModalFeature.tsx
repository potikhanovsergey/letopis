import { FC, useCallback } from "react";
import { Button, Title } from "@mantine/core";
import { modals } from "@mantine/modals";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { useCreateEventModal } from "@/app/hooks/useCreateEventModal";
import { useCalendarStore } from "@/app/stores";

export const EditEventsModalFeature: FC = () => {
  const openCreateEventModal = useCreateEventModal();
  const events = useCalendarStore((state) => state.events);

  const handleCreateClick = useCallback(() => {
    modals.close("edit-events");
    openCreateEventModal();
  }, [openCreateEventModal]);

  return (
    <div>
      <Button onClick={handleCreateClick} fullWidth variant="outline">
        Создать новое событие
      </Button>
      <Title order={2} my="md">
        События
      </Title>
      <EventsTimeline events={events} />
    </div>
  );
};
