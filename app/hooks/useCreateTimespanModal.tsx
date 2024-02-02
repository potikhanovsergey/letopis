import { useCallback } from "react";
import { modals } from "@mantine/modals";

import { CreateTimespanFormFeature } from "@/app/features/CreateTimespanFormFeature";

export const useCreateTimespanModal = () => {
  const onClick = useCallback(() => {
    modals.open({
      modalId: "create-timespan",
      title: "Создать промежуток",
      size: "lg",
      children: <CreateTimespanFormFeature onCreated={modals.closeAll} />,
    });
  }, []);

  return onClick;
};
