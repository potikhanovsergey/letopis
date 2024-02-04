import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Button, Divider } from "@mantine/core";
import { Route } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { calendarData$ } from "@/app/stores";

export const EditCalendarLinkFeature: FC = () => {
  const { data } = useSession();
  const id = useSelector(calendarData$.id);
  const userId = useSelector(calendarData$.userId);

  if (!data || data.user.id !== userId) return null;

  return (
    <>
      <Divider orientation="vertical" />
      <Button
        size="compact-sm"
        component={Link}
        href={`/c/${id}/edit` as Route}
      >
        Редактировать
      </Button>
    </>
  );
};
