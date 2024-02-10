import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { Timespans } from "@/app/components/Timespans";
import { calendarData$, mode$ } from "@/app/stores";

export const TimespansModalFeature: FC = () => {
  const timespans = useSelector(() => calendarData$.timespans.get());
  const mode = useSelector(mode$);

  return <Timespans timespans={timespans} mode={mode} />;
};
