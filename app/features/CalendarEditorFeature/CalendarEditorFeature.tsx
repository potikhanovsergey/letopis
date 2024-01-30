"use client";
import { FC, useEffect } from "react";

import { Calendar } from "@/app/components/Calendar";
import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";
import { useCalendarStore } from "@/app/stores";

import { CalendarEditorFeatureProps } from "./CalendarEditorFeature.typings";

export const CalendarEditorFeature: FC<CalendarEditorFeatureProps> = ({
  calendar,
}) => {
  useEffect(() => {
    useCalendarStore.setState({ data: calendar });
  }, [calendar]);

  const title = useCalendarStore((state) => state.data.title);
  const description = useCalendarStore((state) => state.data.description);

  return (
    <Calendar
      title={title}
      description={description}
      toolbar={<EditToolbarFeature />}
    />
  );
};
