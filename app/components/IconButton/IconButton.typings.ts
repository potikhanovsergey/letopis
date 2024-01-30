import { PropsWithChildren } from "react";

export interface IconButtonProps extends PropsWithChildren {
  label: string;
  onClick?: () => void;
}
