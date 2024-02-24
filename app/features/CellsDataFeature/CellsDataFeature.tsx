"use client";
import { FC } from "react";
import { useSelector } from "@legendapp/state/react";
import { Box, Group, Tabs } from "@mantine/core";

import { EventsTimeline } from "@/app/components/calendar/EventsTimeline";
import { Timespans } from "@/app/components/Timespans";
import {
  CreateEventInvoker,
  CreateTimespanInvoker,
} from "@/app/features/clicked";
import { mode$ } from "@/app/stores";
import {
  clickedCellEvents$,
  clickedCellTimespans$,
} from "@/app/stores/calendar/computed";

export const CellsDataFeature: FC = () => {
  const events = useSelector(clickedCellEvents$);
  const timespans = useSelector(clickedCellTimespans$);
  const mode = useSelector(mode$);

  return (
    <Box pos="relative">
      {mode === "edit" && (
        <Group gap={4}>
          <CreateEventInvoker />
          <CreateTimespanInvoker />
        </Group>
      )}

      <Tabs mt="sm" variant="pills" defaultValue="События">
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
