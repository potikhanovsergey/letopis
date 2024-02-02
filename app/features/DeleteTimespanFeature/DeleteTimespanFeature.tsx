import { FC, useCallback } from "react";
import { Button } from "@mantine/core";

import { deleteTimespan } from "@/app/stores/calendar/actions";
import { useDeleteTimespan } from "@/db/hooks";

import { DeleteTimespanFeatureProps } from "./DeleteTimespanFeature.typings";

export const DeleteTimespanFeature: FC<DeleteTimespanFeatureProps> = ({
  id,
}) => {
  const { mutateAsync: deleteTimespanMutation, isPending } =
    useDeleteTimespan();

  const handleClick = useCallback(async () => {
    const timespan = await deleteTimespanMutation({
      where: { id },
      select: { id: true },
    });
    if (timespan) {
      deleteTimespan(timespan.id);
    }
  }, [id, deleteTimespanMutation]);

  return (
    <Button
      loading={isPending}
      onClick={handleClick}
      variant="subtle"
      size="compact-xs"
    >
      Удалить
    </Button>
  );
};
