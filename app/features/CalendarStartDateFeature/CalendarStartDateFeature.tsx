import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Skeleton } from "@mantine/core";
import dayjs from "dayjs";

import { KeyValue } from "@/app/components/KeyValue";
import { calendarData$, hasInitialized$ } from "@/app/stores";

export const CalendarStartDateFeature: FC = () => {
  const startDate = useSelector(calendarData$.startDate);
  const hasInitialized = useSelector(hasInitialized$);

  if (!hasInitialized) return <Skeleton h={24} w={300} />;

  return (
    <KeyValue k="Начало календаря" v={dayjs(startDate).format("DD.MM.YYYY")} />
  );
};
