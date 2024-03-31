import { FC } from "react";
import { IconPlus } from "@tabler/icons-react";

import { IconButton } from "@/app/components/IconButton";

import { CreateIconButtonProps } from "./CreateIconButton.typings";

export const CreateIconButton: FC<CreateIconButtonProps> = ({
  label = "Создать",
  onClick,
  ...props
}) => {
  return (
    <IconButton
      size="xs"
      label={label}
      onClick={onClick}
      icon={IconPlus}
      {...props}
    />
  );
};
