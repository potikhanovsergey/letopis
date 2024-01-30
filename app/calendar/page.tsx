"use client";
import { Box } from "@mantine/core";
import dayjs from "dayjs";

import { KeyValue } from "@/app/components/KeyValue";
import { EditToolbarFeature } from "@/app/features/EditToolbarFeature";
import { YearsCalendarFeature } from "@/app/features/YearsCalendarFeature";
import { useCalendarStore } from "@/app/stores";

export default function Page() {
  const startDate = useCalendarStore((state) => state.startDate);

  return (
    <main>
      <Box mx="auto" maw={1200} pt="xl" pb={80}>
        <KeyValue
          k="Стартовая дата"
          v={dayjs(startDate).format("DD.MM.YYYY")}
        />
        <YearsCalendarFeature />
        <EditToolbarFeature />
      </Box>
    </main>
  );
}
