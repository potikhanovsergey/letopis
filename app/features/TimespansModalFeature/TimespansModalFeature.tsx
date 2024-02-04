import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Text } from "@mantine/core";

import { Timespans } from "@/app/components/Timespans";
import { mode$ } from "@/app/stores";
import { timespans$ } from "@/app/stores/calendar/computed";

export const TimespansModalFeature: FC = () => {
  const timespans = useSelector(timespans$);
  const mode = useSelector(mode$);

  return (
    <div>
      {timespans.length === 0 ? (
        <Text c="dimmed">В этом календаре еще нет промежутков.</Text>
      ) : (
        <Timespans timespans={timespans} mode={mode} />
      )}
    </div>
  );
};
