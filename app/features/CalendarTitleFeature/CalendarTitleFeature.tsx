import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Title } from "@mantine/core";

import { calendarData$ } from "@/app/stores";

export const CalendarTitleFeature: FC = () => {
  const title = useSelector(calendarData$.title);

  return <Title order={1}>{title}</Title>;
};
