import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { clickedDates$ } from "@/app/stores/calendar/computed";
import { formatLong } from "@/app/utils/date";
import { calendarData$ } from "@/app/stores";

export const ClickedCellTitleFeature: FC = () => {
  const startDate = useSelector(clickedDates$.start);
  const endDate = useSelector(clickedDates$.end);
  const format = useSelector(calendarData$.format);

  if (!startDate || !endDate) return null;

  if (format === "year_week") {
    return `${formatLong(startDate)} — ${formatLong(endDate)}`;
  }

  return formatLong(startDate);
};
