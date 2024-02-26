import { FC, useCallback } from "react";
import { Button } from "@mantine/core";

import { deleteCellEvent } from "@/app/stores/calendar/actions";
import { useDeleteEvent } from "@/db/hooks";

import { DeleteEventFeatureProps } from "./DeleteEventFeature.typings";

export const DeleteEventFeature: FC<DeleteEventFeatureProps> = ({ id }) => {
  const { mutateAsync: deleteEvent, isPending } = useDeleteEvent();

  const handleClick = useCallback(async () => {
    const event = await deleteEvent({ where: { id }, select: { id: true } });
    if (event) {
      deleteCellEvent(event.id);
    }
  }, [id, deleteEvent]);

  return (
    <Button
      size="compact-sm"
      loading={isPending}
      onClick={handleClick}
      variant="subtle"
    >
      Удалить
    </Button>
  );
};
