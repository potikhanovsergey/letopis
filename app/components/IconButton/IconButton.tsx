import { FC } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";

import { IconButtonProps } from "./IconButton.typings";

export const IconButton: FC<IconButtonProps> = ({
  children,
  label,
  onClick,
}) => {
  return (
    <Tooltip label={label}>
      <ActionIcon onClick={onClick}>{children}</ActionIcon>
    </Tooltip>
  );
};
