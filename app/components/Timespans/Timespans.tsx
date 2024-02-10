import { FC } from "react";
import { ColorSwatch, Group, Text, Timeline } from "@mantine/core";
import dayjs from "dayjs";

import { DeleteTimespanFeature } from "@/app/features/DeleteTimespanFeature";
import { UpdateTimespanFeature } from "@/app/features/UpdateTimespanFeature";

import { TimespansProps } from "./Timespans.typings";

export const Timespans: FC<TimespansProps> = ({ timespans, mode }) => {
  if (!timespans.length)
    return (
      <Text c="dimmed" size="sm">
        Список промежутков пустой.
      </Text>
    );

  return (
    <Timeline color="dark" active={timespans.length}>
      {timespans.map((timespan) => (
        <Timeline.Item
          bullet={<ColorSwatch size={16} color={timespan.color} />}
          key={timespan.id}
          title={timespan.title}
        >
          <Text size="xs" mt={4}>
            {dayjs(timespan.startDate).format("DD.MM.YYYY")} -{" "}
            {dayjs(timespan.endDate).format("DD.MM.YYYY")}
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
