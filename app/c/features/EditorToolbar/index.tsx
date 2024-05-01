"use client";
import { Divider } from "@mantine/core";

import { DotsActions } from "@/app/components/DotsActions";
import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import { GptInvoker } from "@/app/c/features/GptInvoker";
import { ViewCalendarLinkFeature } from "@/app/features/ViewCalendarLinkFeature";

const EditorToolbar = () => {
  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      <GptInvoker />
      <Divider orientation="vertical" />
      <ViewCalendarLinkFeature />
      <DotsActions />
    </FloatingToolbar>
  );
};

export default EditorToolbar;
