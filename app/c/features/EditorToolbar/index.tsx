"use client";
import { useSelector } from "@legendapp/state/react";
import { Divider } from "@mantine/core";

import { DotsActions } from "@/app/components/DotsActions";
import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { calendarData$ } from "@/app/stores";
import ToolbarMediaButtons from "@/app/c/features/ToolbarMediaButtons";

const EditorToolbar = () => {
  const id = useSelector(calendarData$.id);

  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      <Divider orientation="vertical" />
      <ToolbarMediaButtons />
      <Divider orientation="vertical" />
      <DotsActions />
    </FloatingToolbar>
  );
};

export default EditorToolbar;
