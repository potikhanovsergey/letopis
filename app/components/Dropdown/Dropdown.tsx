import { FC } from "react";
import { CloseButton, Group, Text } from "@mantine/core";

import { DropdownProps } from "./Dropdown.typings";

export const Dropdown: FC<DropdownProps> = ({ title, children, onClose }) => {
  return (
    <div>
      <Group justify="space-between" mb="xs">
        <Text fw="bold">{title}</Text>
        <CloseButton onClick={onClose} />
      </Group>
      {children}
    </div>
  );
};
