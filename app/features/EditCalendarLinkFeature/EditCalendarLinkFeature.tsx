import { FC, useTransition } from "react";
import { useSelector } from "@legendapp/state/react";
import { Divider } from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { Route } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { IconButton } from "@/app/components/IconButton";
import { calendarData$ } from "@/app/stores";

export const EditCalendarLinkFeature: FC = () => {
  const { data } = useSession();
  const id = useSelector(calendarData$.id);
  const userId = useSelector(calendarData$.userId);

  const [loading, start] = useTransition();

  const handleClick = () => start(() => {});

  if (!data || data.user.id !== userId) return null;

  return (
    <>
      <Divider orientation="vertical" />
      <IconButton
        label="Редактировать календарь"
        icon={IconEdit}
        component={Link}
        onClick={handleClick}
        loading={loading}
        href={`/c/${id}/edit` as Route}
      />
    </>
  );
};
