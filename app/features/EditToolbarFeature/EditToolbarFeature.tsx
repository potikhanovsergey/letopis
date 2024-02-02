"use client";
import { Divider, Group } from "@mantine/core";
import { IconGridDots } from "@tabler/icons-react";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { IconButton } from "@/app/components/IconButton";
import { EditInfoButtonFeature } from "@/app/features/EditInfoButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { SettingsButtonFeature } from "@/app/features/SettingsButtonFeature";

export const EditToolbarFeature = () => {
  return (
    <FloatingToolbar>
      <Group gap="xs">
        <IconButton icon={IconGridDots} label="Добавить промежуток" />
        <EventsButtonFeature />
        <Divider orientation="vertical" />
        <EditInfoButtonFeature />
        <SettingsButtonFeature />
      </Group>
    </FloatingToolbar>
  );
};
