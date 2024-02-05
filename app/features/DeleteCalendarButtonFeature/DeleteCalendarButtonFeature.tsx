import { FC, useCallback } from "react";
import { useSelector } from "@legendapp/state/react";
import { MenuItem } from "@mantine/core";
import { modals } from "@mantine/modals";

import { DeleteCalendarFormFeature } from "@/app/features/DeleteCalendarFormFeature";
import { calendarData$ } from "@/app/stores";

import { DELETE_CALENDAR_TITLE } from "./DeleteCalendarButtonFeature.const";

export const DeleteCalendarButtonFeature: FC = () => {
  const id = useSelector(calendarData$.id);

  const handleClick = useCallback(() => {
    modals.open({
      title: DELETE_CALENDAR_TITLE,
      children: <DeleteCalendarFormFeature id={id} />,
    });
  }, [id]);

  return (
    <MenuItem onClick={handleClick} color="red">
      {DELETE_CALENDAR_TITLE}
    </MenuItem>
  );
};
