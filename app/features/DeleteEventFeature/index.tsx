import { FC, useCallback } from "react";
import { Button } from "@mantine/core";

import { deleteCellEvent } from "@/app/stores/calendar/actions";
import { useDeleteEvent } from "@/db/hooks";

import { DeleteEventFeatureProps } from "./typings";

const DeleteEventFeature: FC<DeleteEventFeatureProps> = ({ id }) => {
  const { mutateAsync: deleteEvent } = useDeleteEvent();

  const handleClick = useCallback(async () => {
    const event = await deleteEvent({ where: { id }, select: { id: true } });
    if (event) {
      deleteCellEvent(event.id);
    }
  }, [id, deleteEvent]);

  return (
    <Button onClick={handleClick} size="compact-sm">
      Удалить
    </Button>
  );
};

export default DeleteEventFeature;
