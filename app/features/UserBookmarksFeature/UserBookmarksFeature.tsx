"use client";
import { FC, useMemo } from "react";

import { CalendarsIncut } from "@/app/components/CalendarsIncut";
import { calendarCardSelect } from "@/app/validators";
import { useFindManyBookmark } from "@/db/hooks";
import { withSession } from "@/app/(fsd)/app/hocs";
import { WithSessionProps } from "@/app/(fsd)/app/types";

export const UserBookmarksFeatureBase: FC<WithSessionProps> = ({ user }) => {
  const { data: bookmarks, isLoading } = useFindManyBookmark({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    select: {
      calendar: {
        select: calendarCardSelect,
      },
    },
  });

  const calendars = useMemo(
    () => bookmarks?.map((b) => b.calendar) ?? [],
    [bookmarks]
  );

  return <CalendarsIncut loading={isLoading} calendars={calendars} />;
};

export const UserBookmarksFeature = withSession(UserBookmarksFeatureBase);
