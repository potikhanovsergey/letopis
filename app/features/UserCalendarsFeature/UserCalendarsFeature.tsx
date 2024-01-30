"use client";
import { FC } from "react";

import { CalendarsIncut } from "@/app/components/CalendarsIncut";
import { useFindManyCalendar } from "@/db/hooks";

import { UserCalendarsFeatureProps } from "./UserCalendarsFeature.typings";

export const UserCalendarsFeature: FC<UserCalendarsFeatureProps> = ({
  user,
  title,
}) => {
  const { data: calendars } = useFindManyCalendar({
    where: { userId: user.id },
  });

  if (!calendars) return null;

  return <CalendarsIncut title={title} calendars={calendars} />;
};
