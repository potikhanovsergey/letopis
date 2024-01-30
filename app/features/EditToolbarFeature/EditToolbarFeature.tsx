import { Divider, Group } from "@mantine/core";
import { IconCalendar, IconGridDots } from "@tabler/icons-react";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { Icon } from "@/app/components/Icon";
import { IconButton } from "@/app/components/IconButton";
import { EditInfoButtonFeature } from "@/app/features/EditInfoButtonFeature";
import { SettingsButtonFeature } from "@/app/features/SettingsButtonFeature";

export const EditToolbarFeature = () => {
  return (
    <FloatingToolbar>
      <Group gap="xs">
        <IconButton label="Добавить промежуток">
          <Icon As={IconGridDots} />
        </IconButton>
        <IconButton label="Добавить событие">
          <Icon As={IconCalendar} />
        </IconButton>
        <Divider orientation="vertical" />
        <EditInfoButtonFeature />
        <SettingsButtonFeature />
      </Group>
    </FloatingToolbar>
  );
};
