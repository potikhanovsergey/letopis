import { FC } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";

import { Icon } from "@/app/components/Icon";

import { IconButtonProps } from "./IconButton.typings";

export const IconButton: FC<IconButtonProps> = ({ icon, label, onClick }) => {
  return (
    <Tooltip label={label}>
      <ActionIcon onClick={onClick}>
        <Icon As={icon} />
      </ActionIcon>
    </Tooltip>
  );
};
