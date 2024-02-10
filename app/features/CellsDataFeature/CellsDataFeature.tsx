"use client";
import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Box, Button, Group, Tabs } from "@mantine/core";

import { EventsTimeline } from "@/app/components/EventsTimeline";
import { KeyValue } from "@/app/components/KeyValue";
import { Timespans } from "@/app/components/Timespans";
import { clickedColumnIndex$, clickedRowIndex$, mode$ } from "@/app/stores";
import {
  clickedCellEvents$,
  clickedCellTimespans$,
  clickedDates$,
} from "@/app/stores/calendar/computed";

export const CellsDataFeature: FC = () => {
  const clickedRowIndex = useSelector(clickedRowIndex$);
  const clickedColumnIndex = useSelector(clickedColumnIndex$);
  const startDate = useSelector(clickedDates$.start);
  const endDate = useSelector(clickedDates$.end);
  const events = useSelector(clickedCellEvents$);
  const timespans = useSelector(clickedCellTimespans$);
  const mode = useSelector(mode$);

  return (
    <Box pos="relative">
      {clickedRowIndex !== null && clickedColumnIndex !== null && (
        <>
          <KeyValue k="Начало клетки" v={startDate.format("DD.MM.YYYY")} />
          <KeyValue k="Конец клетки" v={endDate.format("DD.MM.YYYY")} />
        </>
      )}
      <Group my="sm" gap={4}>
        <Button size="compact-xs">Создать событие</Button>
        <Button size="compact-xs">Создать промежуток</Button>
      </Group>

      <Tabs variant="pills" defaultValue="События">
        <Tabs.List mb="sm">
          <Tabs.Tab value="События">События</Tabs.Tab>
          <Tabs.Tab value="Промежутки">Промежутки</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="События">
          <EventsTimeline mode={mode} events={events} />
        </Tabs.Panel>
        <Tabs.Panel value="Промежутки">
          <Timespans mode={mode} timespans={timespans} />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
};
