import { useCallback } from "react";
import { useSelector } from "@legendapp/state/react";
import { modals } from "@mantine/modals";

import { CreateIconButton } from "@/app/components/CreateIconButton";
import { ModalTitle } from "@/app/components/ModalTitle";
import { EventsModalFeature } from "@/app/features/calendar/modals";
import { mode$ } from "@/app/stores";

import { useCreateEventModal } from "./useCreateEventModal";

export const useEventsModal = () => {
  const openCreateEventModal = useCreateEventModal();
  const mode = useSelector(mode$);

  const handleCreateClick = useCallback(() => {
    modals.close("event-modal");
    openCreateEventModal();
  }, [openCreateEventModal]);

  const onClick = useCallback(() => {
    const createButton =
      mode === "edit" ? (
        <CreateIconButton onClick={handleCreateClick} />
      ) : undefined;

    modals.open({
      modalId: "events-modal",
      title: <ModalTitle rightSection={createButton}>События</ModalTitle>,
      size: "lg",
      children: <EventsModalFeature />,
    });
  }, [handleCreateClick, mode]);

  return onClick;
};
