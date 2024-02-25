import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Skeleton } from "@mantine/core";

import { KeyValue } from "@/app/components/KeyValue";
import { calendarData$, hasInitialized$ } from "@/app/stores";
import { formatShort } from "@/app/utils/date";

const CalendarStartDate: FC = () => {
  const startDate = useSelector(calendarData$.startDate);
  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton h={24} w={300} />;

  return <KeyValue size="md" k="Начало календаря" v={formatShort(startDate)} />;
};

export default CalendarStartDate;
