"use client";

import { useSelector } from "@legendapp/state/react";
import { Divider } from "@mantine/core";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import {
  BookmarkButtonFeature,
  ShareCalendarFeature,
} from "@/app/features/calendar/common";
import { EditCalendarLinkFeature } from "@/app/features/EditCalendarLinkFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { calendarData$ } from "@/app/stores";

const ViewerToolbar = () => {
  const id = useSelector(calendarData$.id);

  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      <Divider orientation="vertical" />
      <BookmarkButtonFeature id={id} />
      <ShareCalendarFeature id={id} />
      <EditCalendarLinkFeature />
    </FloatingToolbar>
  );
};

export default ViewerToolbar;
