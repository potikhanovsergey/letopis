"use client";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";

export const ViewToolbarFeature = () => {
  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      {/* <Divider orientation="vertical" />
      <EditInfoButtonFeature />
      <SettingsButtonFeature /> */}
    </FloatingToolbar>
  );
};
