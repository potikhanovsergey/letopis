import { FC, ForwardedRef, forwardRef } from "react";
import { ActionIcon, createPolymorphicComponent, Tooltip } from "@mantine/core";

import { Icon } from "@/app/components/Icon";

import { IconButtonProps } from "./IconButton.typings";

const IconButtonBase: FC<IconButtonProps> = forwardRef(
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

IconButtonBase.displayName = "IconButton";

export const IconButton = createPolymorphicComponent<"button", IconButtonProps>(
  IconButtonBase
);
