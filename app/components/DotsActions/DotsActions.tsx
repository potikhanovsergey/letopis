"use client";
import { FC } from "react";
import { Popover } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

import { DeleteCalendarButton } from "@/app/components/DeleteCalendarButton";
import { IconButton } from "@/app/components/IconButton";

export const DotsActions: FC = () => {
  return (
    <Popover>
      <Popover.Target>
        <IconButton label="Действия с календарем" icon={IconDotsVertical} />
      </Popover.Target>
      <Popover.Dropdown p={4}>
        <DeleteCalendarButton />
      </Popover.Dropdown>
    </Popover>
  );
};
