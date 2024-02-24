"use client";
import { FC } from "react";
import { Menu, Stack } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";

import { IconButton } from "@/app/components/IconButton";
import { DeleteCalendarButtonFeature } from "@/app/features/calendar/modals/DeleteCalendarButtonFeature";
import { EditInfoButtonFeature } from "@/app/features/calendar/modals/EditInfoButtonFeature";
import { SettingsButtonFeature } from "@/app/features/SettingsButtonFeature";

export const DotsActions: FC = () => {
  return (
    <Menu>
      <Menu.Target>
        <IconButton label="Действия с календарем" icon={IconDotsVertical} />
      </Menu.Target>
      <Menu.Dropdown>
        <Stack gap={4}>
          <SettingsButtonFeature />
          <EditInfoButtonFeature />
          <DeleteCalendarButtonFeature />
        </Stack>
      </Menu.Dropdown>
    </Menu>
  );
};
