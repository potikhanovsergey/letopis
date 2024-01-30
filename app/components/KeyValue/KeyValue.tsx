import { FC } from "react";
import { Text } from "@mantine/core";

import { KeyValueProps } from "./KeyValue.typings";

export const KeyValue: FC<KeyValueProps> = ({ k, v, ...props }) => {
  return (
    <Text {...props}>
      <Text inherit span fw="bold">
        {k}:{" "}
      </Text>
      {v}
    </Text>
  );
};
