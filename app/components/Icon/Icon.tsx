import { FC } from "react";

import { IconProps } from "./Icon.typings";

export const Icon: FC<IconProps> = ({
  As,
  size = "1rem",
  stroke = 2,
  ...props
}) => {
  return <As size={size} stroke={stroke} {...props} />;
};
