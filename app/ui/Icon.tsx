import { FC } from "react";
import { Icon as IconType, TablerIconsProps } from "@tabler/icons-react";

interface Props extends TablerIconsProps {
  /* Компонент иконки из Tabler Icons */
  Icon: IconType;
}

export const IconBase: FC<Props> = ({
  Icon,
  size = "1rem",
  stroke = 2,
  ...props
}) => {
  return <Icon size={size} stroke={stroke} {...props} />;
};
