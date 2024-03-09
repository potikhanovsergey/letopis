import { FC } from "react";
import { ColorSwatch, Group, Text, Timeline } from "@mantine/core";

import DeleteTimespanFeature from "@/app/features/DeleteTimespanFeature";
import { UpdateTimespanFeature } from "@/app/features/UpdateTimespanFeature";
import { formatShort } from "@/app/utils/date";

import { TimespansProps } from "./Timespans.typings";

export const Timespans: FC<TimespansProps> = ({ timespans, mode }) => {
  if (!timespans.length)
    return (
      <Text c="dimmed" size="sm">
        Список промежутков пустой.
      </Text>
    );

  return (
    <Timeline active={timespans.length}>
      {timespans.map((timespan) => (
        <Timeline.Item
          bullet={<ColorSwatch size={30} color={timespan.color} />}
          key={timespan.id}
          title={timespan.title}
        >
          <Text size="xs" mt={4}>
            {formatShort(timespan.startDate)} - {formatShort(timespan.endDate)}
          </Text>
          {mode === "edit" && (
            <Group mt={4}>
              <UpdateTimespanFeature timespan={timespan} />
              <DeleteTimespanFeature id={timespan.id} />
            </Group>
          )}
        </Timeline.Item>
      ))}
    </Timeline>
  );
};
