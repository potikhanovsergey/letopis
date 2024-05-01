import { FC } from "react";
import { ColorSwatch, Group, Text, Title } from "@mantine/core";

import { TimespansLegendProps } from "./TimespansLegend.typings";

export const TimespansLegend: FC<TimespansLegendProps> = ({ timespans }) => {
  if (!timespans.length) return null;

  return (
    <div>
      <Title order={2} size="h4">
        Легенда
      </Title>
      <Group gap="xs">
        {timespans.map((timespan) => (
          <Group gap={4} key={timespan.id}>
            <ColorSwatch radius="xs" size={12} color={timespan.color} />
            <Text size="sm">{timespan.title}</Text>
          </Group>
        ))}
      </Group>
    </div>
  );
};
