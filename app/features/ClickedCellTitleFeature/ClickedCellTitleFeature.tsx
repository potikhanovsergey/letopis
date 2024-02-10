import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { clickedDates$ } from "@/app/stores/calendar/computed";
import { formatLong } from "@/app/utils/date";

export const ClickedCellTitleFeature: FC = () => {
  const startDate = useSelector(clickedDates$.start);
  const endDate = useSelector(clickedDates$.end);

  if (!startDate || !endDate) return null;

  return (
    <>
      {formatLong(startDate)} — {formatLong(endDate)}
    </>
  );
};
