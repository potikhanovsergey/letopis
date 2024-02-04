import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Skeleton } from "@mantine/core";

import { TimespansLegend } from "@/app/components/TimespansLegend";
import { hasInitialized$ } from "@/app/stores";
import { timespans$ } from "@/app/stores/calendar/computed";

export const TimespansLegendFeature: FC = () => {
  const timespans = useSelector(timespans$);
  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton h={24} w={300} />;

  return <TimespansLegend timespans={timespans} />;
};
