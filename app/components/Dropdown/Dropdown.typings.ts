import { PropsWithChildren } from "react";

export interface DropdownProps extends PropsWithChildren {
  title: string;
  onClose?: () => void;
}
