import { IconProps } from "@/app/components/Icon/Icon.typings";
import { EventIconKey } from "@/app/components/IconPicker/IconPicker.typings";

export interface DynamicIconProps extends Omit<IconProps, "As"> {
  name: EventIconKey;
}
