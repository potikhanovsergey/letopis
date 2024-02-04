import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { TimespansLegend } from "@/app/components/TimespansLegend";
import { timespans$ } from "@/app/stores/calendar/computed";

export const TimespansLegendFeature: FC = () => {
  const timespans = useSelector(timespans$);

  return <TimespansLegend timespans={timespans} />;
};
