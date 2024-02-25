"use client";
import { FC } from "react";

import { Calendar } from "@/app/components/calendar/Calendar";
import EditorToolbar from "@/app/c/features/EditorToolbar";
import { useInitCalendar } from "@/app/hooks/useInitCalendar";

import { EditorCalendarProps } from "./typings";

const EditorCalendar: FC<EditorCalendarProps> = ({ calendar }) => {
  useInitCalendar(calendar, "edit");

  return <Calendar toolbar={<EditorToolbar />} />;
};

export default EditorCalendar;
