import { useCallback } from "react";
import { modals } from "@mantine/modals";
import { Timespan } from "@prisma/client";

import { UpdateTimespanFormFeature } from "@/app/features/UpdateTimespanFormFeature";

export const useUpdateTimespanModal = (timespan: Timespan) => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "upsert-timespan",
      title: "Редактировать промежуток",
      size: "lg",
      children: (
        <UpdateTimespanFormFeature
          timespan={timespan}
          onUpdated={modals.closeAll}
        />
      ),
    });
  }, [timespan]);

  return onClick;
};
