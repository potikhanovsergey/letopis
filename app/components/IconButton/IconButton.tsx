import { FC, ForwardedRef, forwardRef } from "react";
import { ActionIcon, Tooltip } from "@mantine/core";

import { Icon } from "@/app/components/Icon";

import { IconButtonProps } from "./IconButton.typings";

export const IconButton: FC<IconButtonProps> = forwardRef(
  (
    { icon, label, tooltipDisabled, onClick, ...props },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <Tooltip label={label} disabled={tooltipDisabled}>
        <ActionIcon ref={ref} onClick={onClick} {...props}>
          <Icon As={icon} />
        </ActionIcon>
      </Tooltip>
    );
  }
);

IconButton.displayName = "IconButton";
