import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Text } from "@mantine/core";

import { calendarData$ } from "@/app/stores";

export const CalendarDescriptionFeature: FC = () => {
  const description = useSelector(calendarData$.description);

  return <Text c="dimmed">{description}</Text>;
};
