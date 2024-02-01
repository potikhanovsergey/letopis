import { FC } from "react";

import { Icon } from "@/app/components/Icon";
import { icons } from "@/app/components/IconPicker/IconPicker.const";

import { DynamicIconProps } from "./DynamicIcon.typings";

export const DynamicIcon: FC<DynamicIconProps> = ({ name, ...props }) => {
  return <Icon As={icons[name]} {...props} />;
};
