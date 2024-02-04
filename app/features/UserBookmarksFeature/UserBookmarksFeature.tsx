"use client";
import { FC, useMemo } from "react";
import { useSession } from "next-auth/react";

import { CalendarsIncut } from "@/app/components/CalendarsIncut";
import { calendarCardSelect } from "@/app/validators";
import { useFindManyBookmark } from "@/db/hooks";

export const UserBookmarksFeature: FC = () => {
  const session = useSession();

  const { data: bookmarks } = useFindManyBookmark(
    {
      where: { userId: session.data?.user.id },
      orderBy: { createdAt: "desc" },
      select: {
        calendar: {
          select: calendarCardSelect,
        },
      },
    },
    { enabled: Boolean(session.data) }
  );

  const calendars = useMemo(
    () => bookmarks?.map((b) => b.calendar),
    [bookmarks]
  );

  if (!session.data) return null;

  if (!calendars) return null;

  return <CalendarsIncut title="Мои закладки" calendars={calendars} />;
};
