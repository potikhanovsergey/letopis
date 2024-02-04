import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import dayjs from "dayjs";

import { KeyValue } from "@/app/components/KeyValue";
import { calendarData$ } from "@/app/stores";

export const CalendarEndDateFeature: FC = () => {
  const endDate = useSelector(calendarData$.endDate);

  return (
    <KeyValue k="Конец календаря" v={dayjs(endDate).format("DD.MM.YYYY")} />
  );
};
