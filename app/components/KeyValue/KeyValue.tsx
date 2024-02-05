import { FC } from "react";
import { Text } from "@mantine/core";

import { KeyValueProps } from "./KeyValue.typings";

export const KeyValue: FC<KeyValueProps> = ({ k, v, ...props }) => {
  return (
    <Text size="sm" {...props}>
      <Text span inherit fw="bold">
        {k}
        {": "}
      </Text>
      {v}
    </Text>
  );
};
