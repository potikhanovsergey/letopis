import { FC } from "react";
import { Group } from "@mantine/core";

import { ModalTitleProps } from "./ModalTitle.typings";

export const ModalTitle: FC<ModalTitleProps> = ({ children, rightSection }) => {
  return (
    <Group gap="xs">
      <span>{children}</span>
      {rightSection}
    </Group>
  );
};
