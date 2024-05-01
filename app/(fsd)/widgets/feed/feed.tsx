"use client";
import { FC, useEffect } from "react";

import { CalendarsIncut } from "@/app/components/CalendarsIncut";
import { calendarCardSelect } from "@/app/validators";
import { useFindManyCalendar } from "@/db/hooks";
import { useSelector } from "@legendapp/state/react";
import { feedFilter$ } from "@/app/stores/feed";
import { Stack } from "@mantine/core";
import { SearchFeature } from "@/app/(fsd)/features/search";
import { useSearchParams } from "next/navigation";

export const FeedWidget: FC = () => {
  const filter = useSelector(feedFilter$);

  const { data: calendars, isPending } = useFindManyCalendar({
    orderBy: { createdAt: "desc" },
    select: calendarCardSelect,
    where: filter,
  });

  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  useEffect(() => {
    feedFilter$.set({
      title: {
        contains: search,
        mode: "insensitive",
      },
    });
  }, [search]);

  return (
    <Stack>
      <SearchFeature />
      <CalendarsIncut loading={isPending} calendars={calendars ?? []} />
    </Stack>
  );
};
