import { FC, useCallback } from "react";
import { Button } from "@mantine/core";
import { modals } from "@mantine/modals";

import { useCreateTimespanModal } from "@/app/hooks/useCreateTimespanModal";
import { useCalendarStore } from "@/app/stores";

export const TimespansModalFeature: FC = () => {
  const openCreateTimespanModal = useCreateTimespanModal();
  // const events = useCalendarStore((state) => state.events);
  const mode = useCalendarStore((state) => state.mode);

  const handleCreateClick = useCallback(() => {
    modals.close("timespans-modal");
    openCreateTimespanModal();
  }, [openCreateTimespanModal]);

  return (
    <div>
      {mode === "edit" && (
        <Button onClick={handleCreateClick} mb="md" fullWidth variant="outline">
          Создать новый промежуток
        </Button>
      )}
      {/* <EventsTimeline events={events} mode={mode} /> */}
    </div>
  );
};
