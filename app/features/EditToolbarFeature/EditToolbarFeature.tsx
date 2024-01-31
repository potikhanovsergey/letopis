"use client";
import { Divider, Group } from "@mantine/core";
import { IconGridDots } from "@tabler/icons-react";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { IconButton } from "@/app/components/IconButton";
import { EditEventsButtonFeature } from "@/app/features/EditEventsButtonFeature";
import { EditInfoButtonFeature } from "@/app/features/EditInfoButtonFeature";
import { SettingsButtonFeature } from "@/app/features/SettingsButtonFeature";

export const EditToolbarFeature = () => {
  return (
    <FloatingToolbar>
      <Group gap="xs">
        <IconButton icon={IconGridDots} label="Добавить промежуток" />
        <EditEventsButtonFeature />
        <Divider orientation="vertical" />
        <EditInfoButtonFeature />
        <SettingsButtonFeature />
      </Group>
    </FloatingToolbar>
  );
};
