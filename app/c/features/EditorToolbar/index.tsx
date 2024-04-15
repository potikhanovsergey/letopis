"use client";
import { Divider } from "@mantine/core";

import { DotsActions } from "@/app/components/DotsActions";
import { FloatingToolbar } from "@/app/components/FloatingToolbar";
import { TimespansButtonFeature } from "@/app/features//TimespansButtonFeature";
import { EventsButtonFeature } from "@/app/features/EventsButtonFeature";
import ToolbarMediaButtons from "@/app/c/features/ToolbarMediaButtons";
import { GptInvoker } from "@/app/c/features/GptInvoker";

const EditorToolbar = () => {
  return (
    <FloatingToolbar>
      <TimespansButtonFeature />
      <EventsButtonFeature />
      <GptInvoker />
      <Divider orientation="vertical" />
      <ToolbarMediaButtons />
      <Divider orientation="vertical" />
      <DotsActions />
    </FloatingToolbar>
  );
};

export default EditorToolbar;
