import { FC } from "react";
import { ColorSwatch, Group, Text, Title, UnstyledButton } from "@mantine/core";

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
          <UnstyledButton key={timespan.id}>
            <Group gap="xs">
              <ColorSwatch radius="xs" size={16} color={timespan.color} />
              <Text size="sm">{timespan.title}</Text>
            </Group>
          </UnstyledButton>
        ))}
      </Group>
    </div>
  );
};
