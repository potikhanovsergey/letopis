"use client";

import { useSelector } from "@legendapp/state/react";
import { Divider } from "@mantine/core";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EditCalendarLinkFeature } from "@/app/features/EditCalendarLinkFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { calendarData$ } from "@/app/stores";
import ToolbarMediaButtons from "@/app/c/features/ToolbarMediaButtons";

const ViewerToolbar = () => {
  const id = useSelector(calendarData$.id);

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
