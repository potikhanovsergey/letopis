import { IconButtonProps } from "@/app/components/IconButton/IconButton.typings";

export interface CreateIconButtonProps
  extends Omit<IconButtonProps, "icon" | "label"> {
  label?: string;
}
