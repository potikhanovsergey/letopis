import { FC, useTransition } from "react";
import { useSelector } from "@legendapp/state/react";
import { IconEye } from "@tabler/icons-react";
import { Route } from "next";
import Link from "next/link";

import { IconButton } from "@/app/components/IconButton";
import { calendarData$ } from "@/app/stores";

export const ViewCalendarLinkFeature: FC = () => {
  const id = useSelector(calendarData$.id);
  const [loading, start] = useTransition();

  const handleClick = () => start(() => {});

  return (
    <IconButton
      label="На страницу календаря"
      icon={IconEye}
      component={Link}
      onClick={handleClick}
      loading={loading}
      href={`/c/${id}` as Route}
    />
  );
};
