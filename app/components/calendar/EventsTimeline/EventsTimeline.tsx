import { FC } from "react";
import { Group, Text, Timeline } from "@mantine/core";

import { DeleteEventFeature } from "@/app/features/DeleteEventFeature";
import { UpdateEventFeature } from "@/app/features/UpdateEventFeature/UpdateEventFeature";
import { formatShort } from "@/app/utils/date";

import { EventsTimelineProps } from "./EventsTimeline.typings";

export const EventsTimeline: FC<EventsTimelineProps> = ({ events, mode }) => {
  if (!events.length)
    return (
      <Text c="dimmed" size="sm">
        Список событий пустой.
      </Text>
    );

  return (
    <Timeline color="gray.3" active={events.length}>
      {events.map((event) => (
        <Timeline.Item bullet={event.icon} key={event.id} title={event.title}>
          <Text size="xs" mt={4}>
            {formatShort(event.date)}
          </Text>
          {mode === "edit" && (
            <Group mt={4}>
              <UpdateEventFeature event={event} />
              <DeleteEventFeature id={event.id} />
            </Group>
          )}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
