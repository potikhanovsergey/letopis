import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Text } from "@mantine/core";

import { Timespans } from "@/app/components/Timespans";
import { calendarData$, mode$ } from "@/app/stores";

export const TimespansModalFeature: FC = () => {
  const timespans = useSelector(() => calendarData$.timespans.get());
  const mode = useSelector(mode$);

  if (timespans.length === 0)
    return <Text c="dimmed">В этом календаре еще нет промежутков.</Text>;

  return <Timespans timespans={timespans} mode={mode} />;
};
