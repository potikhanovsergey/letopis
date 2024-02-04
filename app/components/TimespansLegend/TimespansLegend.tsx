import { FC } from "react";
import { ColorSwatch, Group, Text, Title } from "@mantine/core";

import { TimespansLegendProps } from "./TimespansLegend.typings";

export const TimespansLegend: FC<TimespansLegendProps> = ({ timespans }) => {
  if (!timespans.length) return null;

  return (
    <div>
      <Title order={2} size="h3">
        Легенда
      </Title>
      <Group>
        {timespans.map((timespan) => (
          <Group gap="xs" key={timespan.id}>
            <ColorSwatch radius="xs" size={16} color={timespan.color} />
            <Text size="sm">{timespan.title}</Text>
          </Group>
        ))}
      </Group>
    </div>
  );
};
