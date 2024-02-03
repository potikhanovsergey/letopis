import { useCallback } from "react";
import { useSelector } from "@legendapp/state/react";
import { modals } from "@mantine/modals";

import { CreateIconButton } from "@/app/components/CreateIconButton";
import { ModalTitle } from "@/app/components/ModalTitle";
import { TimespansModalFeature } from "@/app/features/TimespansModalFeature";
import { mode$ } from "@/app/stores";

import { useCreateTimespanModal } from "./useCreateTimespanModal";

export const useTimespansModal = () => {
  const openCreateTimespanModal = useCreateTimespanModal();
  const mode = useSelector(mode$);

  const handleCreateClick = useCallback(() => {
    modals.close("timespans-modal");
    openCreateTimespanModal();
  }, [openCreateTimespanModal]);

  const onClick = useCallback(() => {
    const createButton =
      mode === "edit" ? (
        <CreateIconButton onClick={handleCreateClick} />
      ) : undefined;

    modals.open({
      modalId: "timespans-modal",
      title: <ModalTitle rightSection={createButton}>Промежутки</ModalTitle>,
      size: "lg",
      children: <TimespansModalFeature />,
    });
  }, [handleCreateClick, mode]);

  return onClick;
};
