"use client";

import { Divider } from "@mantine/core";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EditCalendarLinkFeature } from "@/app/features/EditCalendarLinkFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import ToolbarMediaButtons from "@/app/c/features/ToolbarMediaButtons";

const ViewerToolbar = () => {
  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      <Divider orientation="vertical" />
      <ToolbarMediaButtons />
      <EditCalendarLinkFeature />
    </FloatingToolbar>
  );
};

export default ViewerToolbar;
