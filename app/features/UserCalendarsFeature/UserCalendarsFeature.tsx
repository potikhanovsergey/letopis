"use client";
import { FC } from "react";

import { CalendarsIncut } from "@/app/components/CalendarsIncut";
import { calendarCardSelect } from "@/app/validators";
import { useFindManyCalendar } from "@/db/hooks";

import { UserCalendarsFeatureProps } from "./UserCalendarsFeature.typings";

export const UserCalendarsFeature: FC<UserCalendarsFeatureProps> = ({
  user,
  title,
}) => {
  const { data: calendars, isLoading } = useFindManyCalendar({
    where: { userId: user.id },
    select: calendarCardSelect,
    orderBy: { updatedAt: "desc" },
  });

  return (
    <CalendarsIncut
      loading={isLoading}
      title={title}
      calendars={calendars ?? []}
    />
  );
};
