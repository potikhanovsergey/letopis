import { ReactNode } from "react";

export interface ListProps {
  items: { id: string | number; title: string; icon?: ReactNode }[];
  title: string;
}
