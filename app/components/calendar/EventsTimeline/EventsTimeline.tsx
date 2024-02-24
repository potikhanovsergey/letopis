import { FC } from "react";
import { Group, Text, Timeline } from "@mantine/core";

import { DynamicIcon } from "@/app/components/DynamicIcon";
import { EventIconKey } from "@/app/components/IconPicker/IconPicker.typings";
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
    <Timeline color="dark" active={events.length}>
      {events.map((event) => (
        <Timeline.Item
          bullet={<DynamicIcon name={event.icon as EventIconKey} />}
          key={event.id}
          title={event.title}
        >
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
