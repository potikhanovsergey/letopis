import { ReactNode } from "react";
import { TextProps } from "@mantine/core";

export interface KeyValueProps extends Omit<TextProps, "children"> {
  k: string;
  v: ReactNode;
}
