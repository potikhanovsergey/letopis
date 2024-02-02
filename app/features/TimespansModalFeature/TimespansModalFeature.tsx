import { FC } from "react";
import { Text } from "@mantine/core";

import { Timespans } from "@/app/components/Timespans";
import { useCreateTimespanModal } from "@/app/hooks/useCreateTimespanModal";
import { useCalendarStore } from "@/app/stores";

export const TimespansModalFeature: FC = () => {
  const openCreateTimespanModal = useCreateTimespanModal();
  const timespans = useCalendarStore((state) => state.timespans);
  const mode = useCalendarStore((state) => state.mode);

  // const handleCreateClick = useCallback(() => {
  //   modals.close("timespans-modal");
  //   openCreateTimespanModal();
  // }, [openCreateTimespanModal]);

  return (
    <div>
      {timespans.length === 0 ? (
        <Text c="dimmed">В этом календаре еще нет промежутков.</Text>
      ) : (
        <Timespans timespans={timespans} mode={mode} />
      )}
    </div>
  );
};
