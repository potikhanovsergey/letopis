import { FC } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";

import { Icon } from "@/app/components/Icon";

import { IconButtonProps } from "./IconButton.typings";

export const IconButton: FC<IconButtonProps> = ({
  icon,
  label,
  onClick,
  ...props
}) => {
  return (
    <Tooltip label={label}>
      <ActionIcon onClick={onClick} {...props}>
        <Icon As={icon} />
      </ActionIcon>
    </Tooltip>
  );
};
