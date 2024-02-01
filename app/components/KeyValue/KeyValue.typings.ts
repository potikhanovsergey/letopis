import { ReactNode } from "react";
import { GroupProps } from "@mantine/core";

export interface KeyValueProps extends Omit<GroupProps, "children"> {
  k: string;
  v: ReactNode;
  icon?: ReactNode;
}
