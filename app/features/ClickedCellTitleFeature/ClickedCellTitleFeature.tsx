import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import { clickedDates$ } from "@/app/stores/calendar/computed";

export const ClickedCellTitleFeature: FC = () => {
  const startDate = useSelector(clickedDates$.start);
  const endDate = useSelector(clickedDates$.end);

  if (!startDate || !endDate) return null;

  return (
    <>
      {startDate.format("DD MMMM YYYY")} — {endDate.format("DD MMMM YYYY")}
    </>
  );
};
