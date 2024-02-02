import { FC } from "react";
import { Button, Group, Text, Timeline } from "@mantine/core";
import dayjs from "dayjs";

import { DynamicIcon } from "@/app/components/DynamicIcon";
import { EventIconKey } from "@/app/components/IconPicker/IconPicker.typings";
import { DeleteEventFeature } from "@/app/features/DeleteEventFeature";

import { EventsTimelineProps } from "./EventsTimeline.typings";

export const EventsTimeline: FC<EventsTimelineProps> = ({ events, mode }) => {
  return (
    <Timeline color="dark" active={events.length}>
      {events.map((event) => (
        <Timeline.Item
          bullet={<DynamicIcon name={event.icon as EventIconKey} />}
          key={event.id}
          title={event.title}
        >
          <Text size="xs" mt={4}>
            {dayjs(event.date).format("DD.MM.YYYY")}
          </Text>
          {mode === "edit" && (
            <Group mt={4}>
              <Button variant="subtle" size="compact-xs">
                Редактировать
              </Button>
              <DeleteEventFeature id={event.id} />
            </Group>
          )}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
