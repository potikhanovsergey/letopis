import { ActionIconProps } from "@mantine/core";
import { Icon } from "@tabler/icons-react";

export interface IconButtonProps extends ActionIconProps {
  label: string;
  onClick?: () => void;
  icon: Icon;
}
