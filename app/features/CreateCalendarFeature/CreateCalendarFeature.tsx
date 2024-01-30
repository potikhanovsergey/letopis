import { FC, useCallback } from "react";
import { Button } from "@mantine/core";

import { useCreateCalendar } from "@/db/hooks";

import { CreateCalendarFeatureProps } from "./CreateCalendarFeature.typings";

export const CreateCalendarFeature: FC<CreateCalendarFeatureProps> = ({
  user,
  onCalendarCreated,
}) => {
  const { mutateAsync: createCalendar, isPending } = useCreateCalendar();

  const handleClick = useCallback(async () => {
    const calendar = await createCalendar({
      data: {
        title: "Новый календарь",
        description: "Описание календаря",
        visiiblity: "hidden",
        userId: user.id,
        rows: 60,
      },
    });
    if (calendar && onCalendarCreated) {
      onCalendarCreated(calendar);
    }
  }, [createCalendar, user.id, onCalendarCreated]);

  return (
    <Button loading={isPending} onClick={handleClick}>
      Создать календарь
    </Button>
  );
};
