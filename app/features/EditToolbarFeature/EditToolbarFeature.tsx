"use client";
import { Divider, Group } from "@mantine/core";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EditInfoButtonFeature } from "@/app/features/EditInfoButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { SettingsButtonFeature } from "@/app/features/SettingsButtonFeature";

export const EditToolbarFeature = () => {
  return (
    <FloatingToolbar>
      <Group gap="xs">
        <TimespansButtonFeature />
        <EventsButtonFeature />
        <Divider orientation="vertical" />
        <EditInfoButtonFeature />
        <SettingsButtonFeature />
      </Group>
    </FloatingToolbar>
  );
};
