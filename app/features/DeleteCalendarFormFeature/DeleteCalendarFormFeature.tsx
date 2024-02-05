import { FC, useCallback } from "react";
import { Button, Text } from "@mantine/core";
import { closeAllModals } from "@mantine/modals";
import { useRouter } from "next/navigation";

import { ModalActions } from "@/app/components/ModalActions";
import { useDeleteCalendar } from "@/db/hooks";

import { DeleteCalendarFormFeatureProps } from "./DeleteCalendarFormFeature.typings";

export const DeleteCalendarFormFeature: FC<DeleteCalendarFormFeatureProps> = ({
  id,
}) => {
  const { mutateAsync: deleteCalendar, isPending } = useDeleteCalendar();
  const router = useRouter();

  const handleClick = useCallback(async () => {
    await deleteCalendar({ where: { id } });
    router.push("/");
    closeAllModals();
  }, [deleteCalendar, id, router]);

  return (
    <div>
      <Text size="sm" c="dimmed">
        Вы действительно хотите удалить календарь? Это действие необратимо.
      </Text>
      <ModalActions>
        <Button
          onClick={handleClick}
          loading={isPending}
          variant="filled"
          color="red"
        >
          Удалить календарь
        </Button>
      </ModalActions>
    </div>
  );
};
