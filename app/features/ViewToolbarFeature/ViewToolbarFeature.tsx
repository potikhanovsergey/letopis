"use client";

import { useSelector } from "@legendapp/state/react";
import { Divider } from "@mantine/core";

import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { BookmarkButtonFeature } from "@/app/features/BookmarkButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { ShareCalendarFeature } from "@/app/features/ShareCalendarFeature";
import { calendarData$ } from "@/app/stores";

export const ViewToolbarFeature = () => {
  const id = useSelector(calendarData$.id);

  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      <Divider orientation="vertical" />
      <BookmarkButtonFeature id={id} />
      <ShareCalendarFeature id={id} />
    </FloatingToolbar>
  );
};
