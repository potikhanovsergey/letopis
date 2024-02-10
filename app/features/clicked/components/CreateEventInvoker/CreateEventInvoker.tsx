import { FC, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";
import { Button } from "@mantine/core";

import { useCreateEventModal } from "@/app/hooks/useCreateEventModal";
import { clickedDates$ } from "@/app/stores/calendar/computed";

export const CreateEventInvoker: FC = () => {
  const clickedDates = useSelector(clickedDates$);

  const date = useMemo(() => {
    return clickedDates?.start?.toDate() || undefined;
  }, [clickedDates]);

  const openCreateEventModal = useCreateEventModal(date);

  return (
    <Button onClick={openCreateEventModal} size="compact-xs">
      Создать событие
    </Button>
  );
};
