import { FC } from "react";
import { Group } from "@mantine/core";

import { TimespansLegendProps } from "./TimespansLegend.typings";

export const TimespansLegend: FC<TimespansLegendProps> = ({ timespans }) => {
  return (
    <Group>
      {timespans.map((timespan) => (
        <div key={timespan.id}>{timespan.title}</div>
      ))}
    </Group>
  );
};
