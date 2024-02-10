import { FC, useMemo } from "react";
import { useSelector } from "@legendapp/state/react";
import { Button } from "@mantine/core";

import { useCreateTimespanModal } from "@/app/hooks/useCreateTimespanModal";
import { clickedDates$ } from "@/app/stores/calendar/computed";

export const CreateTimespanInvoker: FC = () => {
  const clickedDates = useSelector(clickedDates$);

  const date = useMemo(() => {
    return clickedDates?.start?.toDate() || undefined;
  }, [clickedDates]);

  const openCreateTimespanModel = useCreateTimespanModal(date);

  return (
    <Button onClick={openCreateTimespanModel} size="compact-xs">
      Создать промежуток
    </Button>
  );
};
