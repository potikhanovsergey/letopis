import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { CreateTimespanFormFeature } from "@/app/features/CreateTimespanFormFeature";

export const useCreateTimespanModal = (date?: Date) => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "upsert-timespan",
      title: "Создать промежуток",
      size: "lg",
      children: (
        <CreateTimespanFormFeature date={date} onCreated={modals.closeAll} />
      ),
    });
  }, [date]);

  return onClick;
};
