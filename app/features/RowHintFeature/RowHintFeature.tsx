import { FC } from "react";
import { useSelector } from "@legendapp/state/react";

import RCHint from "@/app/c/components/RCHint";
import { startYearNumber$ } from "@/app/stores/calendar/computed";

import { RowHintFeatureProps } from "./RowHintFeature.typings";
import { calendarData$ } from "@/app/stores";
import dayjs from "dayjs";

export const RowHintFeature: FC<RowHintFeatureProps> = ({ index }) => {
  const startYearNumber = useSelector(startYearNumber$);
  const startDate = useSelector(calendarData$.startDate);
  const format = useSelector(calendarData$.format);

  if (format === "year_week") {
    return <RCHint>{startYearNumber + index}</RCHint>;
  }

  return (
    <RCHint>{dayjs(startDate).add(index, "month").format("MMMM YYYY")}</RCHint>
  );
};
