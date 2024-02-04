import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import dayjs from "dayjs";

import { KeyValue } from "@/app/components/KeyValue";
import { calendarData$ } from "@/app/stores";

export const CalendarStartDateFeature: FC = () => {
  const startDate = useSelector(calendarData$.startDate);

  return (
    <KeyValue k="Начало календаря" v={dayjs(startDate).format("DD.MM.YYYY")} />
  );
};
