"use client";
import { useSelector } from "@legendapp/state/react";
import { Divider } from "@mantine/core";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EditInfoButtonFeature } from "@/app/features/EditInfoButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { SettingsButtonFeature } from "@/app/features/SettingsButtonFeature";
import { ShareCalendarFeature } from "@/app/features/ShareCalendarFeature";
import { calendarData$ } from "@/app/stores";

export const EditToolbarFeature = () => {
  const id = useSelector(calendarData$.id);

  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      <Divider orientation="vertical" />
      <EditInfoButtonFeature />
      <SettingsButtonFeature />
      <Divider orientation="vertical" />
      <ShareCalendarFeature id={id} />
    </FloatingToolbar>
  );
};
