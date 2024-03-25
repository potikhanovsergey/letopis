"use client";
import { FC } from "react";

import { CalendarsIncut } from "@/app/components/CalendarsIncut";
import { calendarCardSelect } from "@/app/validators";
import { useFindManyCalendar } from "@/db/hooks";

export const FeedWidget: FC = () => {
  const { data: calendars } = useFindManyCalendar({
    orderBy: { createdAt: "desc" },
    select: calendarCardSelect,
  });

  if (!calendars) return null;

  return <CalendarsIncut calendars={calendars} />;
};
