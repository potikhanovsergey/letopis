import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { TimespansModalFeature } from "@/app/features/TimespansModalFeature";

export const useTimespansModal = () => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "timespans-modal",
      title: "Промежутки",
      size: "lg",
      children: <TimespansModalFeature />,
    });
  }, []);

  return onClick;
};
